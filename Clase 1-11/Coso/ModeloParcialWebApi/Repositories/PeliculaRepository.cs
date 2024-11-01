﻿using ModeloParcialWebApi.Models;
using ModeloParcialWebApi.Repositories.Utils;
using System.Data;

namespace ModeloParcialWebApi.Repositories
{
    public class PeliculaRepository : IPeliculaRepository
    {
        private CineDbContext _context;

        public PeliculaRepository(CineDbContext context)
        {
            _context = context;
        }

        public bool Create(Pelicula oPelicula)
        {
            //Implementado por EF Core
            _context.Peliculas.Add(oPelicula);
            return _context.SaveChanges() == 1;
        }

        public bool Delete(int id, string motivo)
        {
            var helper = DataHelper.GetInstance();
            List<ParameterSQL> lst = new List<ParameterSQL>();
            lst.Add(new ParameterSQL("@id", id));
            lst.Add(new ParameterSQL("@motivo", motivo));
            return helper.ExecuteSPDML("SP_REGISTRAR_BAJA_PELICULA", lst) > 0;

        }

        public List<Pelicula> GetAll()
        {
            return _context.Peliculas.ToList();
        }

        public List<Pelicula> GetAllByYears(int anio1, int anio2)
        {
            return _context.Peliculas.Where(x => x.Anio >= anio1 && x.Anio <= anio2).ToList();
        }

        public bool Update(int id)
        {
            var peliculaActualizada = _context.Peliculas.Find(id);
            if (peliculaActualizada != null)
            {
                peliculaActualizada.Estreno = false;
                return _context.SaveChanges() > 0;
            }
            return false;
        }



    }
}

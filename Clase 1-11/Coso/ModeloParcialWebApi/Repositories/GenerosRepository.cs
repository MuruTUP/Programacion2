
using ModeloParcialWebApi.Models;

namespace ModeloParcialWebApi.Repositories
{
    public class GenerosRepository : IGenerosRepository
    {

        private CineDbContext _context;

        public GenerosRepository(CineDbContext context)
        {
            _context = context;
        }

        List<Genero> IGenerosRepository.GetAll()
        {
            return _context.Generos.ToList();
        }
    }
}
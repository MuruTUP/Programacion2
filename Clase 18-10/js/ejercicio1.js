function procesarHora()
{
    //tomar vía DOM el valor de los inputs
   const $hora = document.getElementById("hora")
   const $minutos = document.getElementById("minutos")
   let hh = $hora.value
   let mm = $minutos.value
   //validar entrada correcta:
   if(hh === '' || mm === '')
    {
       alert('Debe completar los campos requeridos!')
       return;
    }
    if(hh < '0' || hh > '23' )
        {
       alert('Valor de hora incorrecto!')
       return;
   }
   if(mm < '0' || mm > '59' )
    {
       alert('Valor de minutos incorrecto!')
       return;
   }
   // procesar y mostrar resultados
   if(hh >= '0' && hh <= '12')
    {
       horaFormato12 = `La hora es ${hh}:${mm} AM`
    }
    else
    {
        horaFormato12 = `La hora es ${hh-12}:${mm} PM`
    }
    alert(horaFormato12)

    
}
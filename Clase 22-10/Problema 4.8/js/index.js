function procesar(){
    //let $n =  document.getElementById('cant') //cantidad de números aleatorios a generar
    const array = [] //arreglo vacío...
    let cpos = 0, cneg =0 , spos = 0, sneg = 0


    let n =  parseInt(document.getElementById('cant').value) //cantidad de números aleatorios a generar
    //deshabilitar botón:
    const $btn = document.querySelector('button')
    $btn.disabled = true;
    //limpiar consola:
    console.clear();

    //for de n vueltas: genera un vector de 100 elementos enteros comprendidos entre (-50;50)
    for (let i = 0; i < n; i++) {
        let valor = Math.floor(Math.random()*100)-50 //(-50;50)
        array.push(valor)
        console.log(`[${i}]:${valor}`)

        if(valor>=0){
            spos += valor
            cpos++
          }else{
            sneg += valor
            cneg++
          }
    }  

    actualizarResultados(array)

    $btn.disabled = false;

    function actualizarResultados(array)
    {
        const $div = document.getElementById('resultados')

        $div.innerHTML = '';

        let rows = ''
        for (let index = 0; index < array.length; index++) 
        {
            const e = array[index];
            rows += `
            <tr>
                <th>${index + 1}</th>
                <th>${e}</th>
            </tr>

            `

        }

        let results = `
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody >
                ${rows}
            </tbody>
        </table>

        <p><span class="badge rounded-pill bd-primary">${mpos}</span></p>
        <p><span class="badge rounded-pill bd-primary">${mneg}</span></p>
        `
    }

    // const $table = document.getElementById('table');
    // $table.style = "display:block"
   
    // console.log(`Media de valores positivos:${spos/cpos}`)
    // console.log(`Media de valores negativos:${sneg/cneg}`)
    // $btn.disabled = false
}
function recuperarUsuarios(){
    const $ul = document.getElementById('lista_usuarios')
    const prom = fetch('https://jsonplaceholder.org/users')
    const rpta = prom.then((res)=>{
        //obtuve 200 OK del pedido HTTP
        return res.json()
    })
    rpta.then((data)=>{
        //obtuve los datos del body del HTTP response
        $ul.innerHTML = ''
        data.forEach(element => { //cada element será un objeto JS que representa a un usuario
            const $li = document.createElement('li')
            $li.innerHTML = `#${element.id}| ${element.firstname}| ${element.lastname}| ${element.email}| ${element.birthDate}`
            $ul.appendChild($li)
        });
    }).catch((error)=>{
        console.error('Error de comunicación HTTP')
    }).finally(()=>{
        console.log('Bloque ejecutado independiente del resultado de la promesa') //SIEMPRE
    })

}
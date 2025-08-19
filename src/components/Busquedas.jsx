import { useEffect, useState } from "react"
import FormBusqueda from "./compBusquedas/FormBusqueda"
import MostrarData from "./compBusquedas/mostrarData"

const getJSON = async ( filter ) => {
    let url = "https://jsonplaceholder.typicode.com/users"
    console.log('filtro: ' + filter)
    if( filter != undefined ){
        let busqueda = `?name=` + filter.split(' ').join('%20')
        url = url + busqueda
    }
    let res = await fetch(url)
    let data = await res.json()
    return data
}

const Busquedas = () => {
    
    async function enviarData ( e ) {
        e.preventDefault()
        const datos = new FormData( e.target )
        const filter = datos.get('search')
        setInfo( await getJSON( filter ) )
    }
    let [info, setInfo] = useState()
    useEffect( () => {
        getJSON().then(data => data) 
    },[] )
    return (
        <section className="my-4 border-1 rounded-xl p-6 ">
            <h2 className="font-bold text-2xl underline">Buscador + Fetch</h2>
            <small className="opacity-70">Leanne Graham </small>
            <FormBusqueda enviarData={enviarData} />
            <MostrarData data={ info } />
        </section>
    )
}

export default Busquedas
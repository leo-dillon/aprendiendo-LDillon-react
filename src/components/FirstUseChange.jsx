import { useState } from "react"

const FirstUseChange = () => {
    const [ nombre, setNombre ] = useState('')
    const modificarNombre = ( event ) => {
        setNombre( event.target.value )
    }
    return (
        <div className="my-4 border-1 rounded-xl p-2">
            <p> Este es mi primer onChange </p>
            <label htmlFor="nombre">
                Nombre
            </label>
            <input 
                className="ml-4 mt-2 border-1 border-gray-400"
                type="text" 
                name="nombre" 
                id="nombre" 
                onChange={ modificarNombre }
            />
            <small> { nombre } </small>
        </div>
    )
}

export default FirstUseChange
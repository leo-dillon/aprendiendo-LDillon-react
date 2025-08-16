import { useState } from "react"

const FirstUseChange = () => {
    const [ nombre, setNombre ] = useState('')
    const [ letras, setLetras ] = useState([])

    const modificarNombre = ( event ) => {
        setNombre( event.target.value )
        if( !letras.includes( event.nativeEvent.data ) ) setLetras( event.nativeEvent.data )
    }
    return (
        <div className="flex flex-col my-4 border-1 rounded-xl p-2">
            <p> Este es mi primer onChange </p>
            <div>
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
            </div>
            <p>Palabra completa: { nombre } </p>
            { 
                ( letras.length > 0 )
                ?  
                    letras.map( (letra, index) => (
                        <>
                            <p>Letras incluidas en tu nombre</p>
                            <p key={index}> { letra } </p>                    
                        </>
                    ) )
                : 
                    ""
            }
        </div>
    )
}

export default FirstUseChange
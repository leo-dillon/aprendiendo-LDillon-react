import { useState } from "react"

const FirstUseChange = () => {
    const [ nombre, setNombre ] = useState('')
    const [ letras, setLetras ] = useState([])

    const modificarNombre = ( event ) => {
        console.log(letras)
        if( !letras.includes( event.nativeEvent.data ) ){
            setLetras( [...letras, event.nativeEvent.data] )
        }
        setNombre( event.target.value )

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
                ( letras.length > 1 )
                ?  
                <>
                    <p>Letras incluidas en tu nombre</p>
                    {
                    letras.map( (letra, index) => (
                            <p key={index}> { letra } </p>                    
                    ) )
                    }
                </>
                : 
                    ""
            }
        </div>
    )
}

export default FirstUseChange
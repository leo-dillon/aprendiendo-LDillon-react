import { useState } from "react"

const FirstUseState = () => {
    const [ valor, setValor ] = useState(0)
    return (
        <div className="my-4 border-1 rounded-xl p-2">
            <p className="opacity-50">Este es mi primer useState</p>
            <p> { valor } </p>
            <button 
                onClick={ () => setValor( "PAN" ) }
                className="border-1 border-cyan-600 rounded-md px-4"
            > 
                Cambiar Valor por "PAN" 
            </button>
        </div>
    )
}

export default FirstUseState
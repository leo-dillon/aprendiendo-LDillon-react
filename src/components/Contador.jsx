import { useState } from "react"

const Contador = () => {
    let [ valor, setValor ] = useState(0)
    let sumar = () => {
        setValor( valor+1 )
    }
    let restar = () => {
        setValor( valor-1 )
    }
    let resetear = ( ) => { setValor(0) }
    return (
        <div className="my-4 border-1 rounded-xl p-2">
            <h2> Este es un "mini-proyecto" contador </h2>
            <div className="flex items-center gap-2">
                <button className="p-1 border-1 rounded-xl" onClick={restar}> ➖ </button>
                <p>
                    { valor }
                </p>
                <button className="p-1 border-1 rounded-xl  " onClick={ sumar }> ➕ </button>
            </div>
            <button onClick={resetear}>Reset</button>
        </div>
    )
}

export default Contador
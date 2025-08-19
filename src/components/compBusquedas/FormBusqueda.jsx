const FormBusqueda = ({ enviarData }) => {
    return (
        <form action="GET" className="my-3" onSubmit={enviarData}>
            <label htmlFor="search">
                Busqueda por nombre
            </label>
            <div className="flex">
                <input 
                    type="text"
                    name="search"
                    id="search"
                    className="w-full max-w-6/10 px-3 py-1 border-1 border-gray-500 rounded-l-xl"
                    placeholder="¿ Qué quieres buscar ?"
                    required 
                />
                <input 
                    type="submit" 
                    value="Buscar" 
                    className="w-full max-w-24 px-3 py-1 border-1 border-gray-500 rounded-r-xl cursor-pointer hover:bg-cyan-200"
                />
            </div>
            <button className="p-2 mt-2 border-1 rounded-xl hover:bg-cyan-200" onClick={enviarData('')}> Todos </button>
        </form>
    )
}

export default FormBusqueda
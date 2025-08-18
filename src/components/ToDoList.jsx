import { useState } from "react"

const TodoList = () => {
    
    let [ tareas, setTareas ] = useState([])
    function editar(nombre){
        setTareas(  
            tareas.map( tarea => (
                tarea.nombre == nombre 
                ? { ...tarea, estado: tarea.estado == 'activa' ? 'Finalizado' : 'activa'}
                : tarea
             ) )
        )
    }
    function enviar ( e ){
        e.preventDefault()
        let data = new FormData(e.target)
        let nombre = data.get('Nombre')
        if( tareas.some( tarea => tarea.nombre === nombre ) ){
            console.log('Existe nombre')
        }else {
            console.log('No existe nombre')
            setTareas( [...tareas, { 
                'nombre': nombre,
                'estado': 'activa'  
            }] )
        }
    }
    return (
        <div className="my-4 border-1 rounded-xl p-2">
            <p> Pequeño proyecto To Do List </p>
            <form action='POST' className="flex flex-col items-start gap-2" onSubmit={enviar}>
                <label htmlFor="Nombre"> Seleccione un nombre </label>
                <input 
                    className="border-1 px-2 py-1 w-100" 
                    type="text" 
                    id="Nombre" 
                    name="Nombre" 
                    placeholder="Nombre de la tarea" 
                    required    
                />
                <button className="border-1 rounded-xl px-4 cursor-pointer" type="submit" > Enviar </button>
            </form>
            {
                tareas.map( ( tarea, index ) => {
                    return (
                        <div key={index} className={ `border-1 rounded-2xl mt-2 px-4 py-2 ${ (tarea.estado == "activa") ? 'border-green-400' : 'border-red-400' } ` } >
                            <p>{tarea.nombre}</p>
                            {
                                ( tarea.estado == "activa" )
                                ? 
                                    <button className="border-1 border-gray-500 cursor-pointer px-3 rounded-2xl" onClick={() => editar(tarea.nombre)}> Completada </button>
                                : 
                                    <button className="border-1 border-gray-500 cursor-pointer px-3 rounded-2xl" onClick={() => editar(tarea.nombre)}> No completada </button>
                            }
                        </div>    
                    )
                } )
            }
            <div className="flex flex-col gap-2 border-2 border-gray-200">

            </div>
        </div>
    )
}

export default TodoList
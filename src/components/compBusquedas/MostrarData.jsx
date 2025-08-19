const MostrarData = ({ data }) => {
    if( data == undefined ) return ''
    if( data.length == 0 ) return <p className="text-xl text-gray-600"> No hay datos disponibles.. </p>
    return (
        <section className="flex flex-col gap-3">
            {
                data.map( (dt) => {
                    return(
                        <div className="flex flex-col gap-2 border-1 bg-cyan-100 p-3 rounded-2xl" key={ dt.id }>
                            <h2 className="text-xl text-gray-800"> { dt.name } </h2>
                            <div className="flex gap-2">
                                <p className="text-md text-gray-600"><strong> Telefono: </strong></p>
                                <p className="text-md text-gray-600"> { dt.phone } </p>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-md text-gray-600"><strong> Email: </strong></p>
                                <p className="text-md text-gray-600"> { dt.email } </p>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-md text-gray-600"><strong> Username: </strong></p>
                                <p className="text-md text-gray-600"> { dt.username } </p>
                                <a href={`#${dt.website} `}> Ir a mi web </a>
                            </div>
                                <p className="text-md text-gray-600"><strong> Mi Dirección: </strong></p>
                            <div className="flex gap-2 ml-6 flex-col">
                                <p className="text-md text-gray-500"> <strong> Ciudad: </strong> { dt.address.city } </p>
                                <p className="text-md text-gray-500"> <strong> Calle: </strong> { dt.address.street } </p>
                                <p className="text-md text-gray-500"> <strong> Número: </strong> { dt.address.suite } </p>
                                <p className="text-md text-gray-500"> <strong> Código postal: </strong> { dt.address.zipcode } </p>
                                <p className="text-md text-gray-500"> <strong> Geolocalización: </strong>  </p>
                                <p className="text-md text-gray-500"> Lat:{ dt.address.geo.lat } - Long { dt.address.geo.lng } </p>
                            </div>
                                <p className="text-md text-gray-600"><strong> Mi Compania: </strong></p>
                            <div className="flex flex-col gap-2 ml-6">
                                <p className="text-md text-gray-500"> nombre: { dt.company.name } </p>
                                <p className="text-md text-gray-500"> data: { dt.company.bs } </p>
                            </div>
                        </div>
                    )
                } )
            }
        </section>
    )
}

export default MostrarData
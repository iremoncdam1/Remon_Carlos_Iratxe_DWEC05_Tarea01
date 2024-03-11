//Este es el elemento para crear el articulo de cada persona
function Persona({img, nombre, edad}) {
    return (
        <>
            <article className="person" >
                <img src={img} />
                <div>
                    <h4>{nombre}</h4>
                    <p>{edad} años</p>
                </div>
            </article>
        </>
    )
}

export default Persona
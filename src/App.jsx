import data from './data.js';           //El archivo con la información de las personas
import Persona from './persona.jsx'     //El elemento para crear una persona

//Creamos el elemento App (es el contenedor que envolverá la lista de personas)
function App() {
  return (
    <main>
        <section className="container">
            {/*En el título se muestra el número de personas que cumplen años hoy */}
            <h3>Hoy hay {data.length} cumpleaños</h3>
            
            {/*Se recorre el mapa de personas. Por cada una de ellas se añade un 
            elemento "Persona" al que se le pasan algunos parametros (la ruta de la
            imagen, el nombre y la edad de la persona). Según el debugger cada persona de
            la lista debe tener un identificador. Así que le añadimos la propiedad key también*/}
            {
                data.map(({id, image, name, age }) => (
                    <Persona key={id} img={image} nombre={name} edad={age} />
                ))
            } 
        </section>
    </main>
  )
}

export default App
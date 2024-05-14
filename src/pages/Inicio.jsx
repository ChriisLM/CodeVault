import CardProyect from "../Components/CardProyect"
import Header from "../Components/Header"
import SliderProyects from "../Components/SliderProyects"
import "../assets/css/Inicio.css"
import proyectsData from "../assets/data/proyectsData.json"

function Inicio() {

  return (
    <main className="main-container">
      <Header />
      <div className="div-separador"> </div>
      <section className="body-container">
        <section className="proyects-container">
          <div className="slider-inicio">
            <SliderProyects proyectos={proyectsData} />
          </div>
          <div className="cards-proyects">
            {proyectsData.map((proyectoData, index1)=>(
              <CardProyect proyecto={proyectoData} key={index1}/>
            ))}
          </div>

        </section>
      </section>
    </main>
  )
}

export default Inicio


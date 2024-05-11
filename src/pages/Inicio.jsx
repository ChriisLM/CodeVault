import CardProyect from "../Components/CardProyect"
import Header from "../Components/Header"
import "../assets/css/Inicio.css"

function Inicio() {

    return (
      <main className="main-container">
        <Header/>
        <div className="div-separador"> </div>
        <body className="body-container">
            <section className="proyects-container">
                <div className="slider-proyects">Slider</div>
                <CardProyect/>

            </section>
        </body>
      </main>
    )
  }
  
  export default Inicio
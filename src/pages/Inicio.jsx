import CardProyect from "../Components/CardProyect"
import Header from "../Components/Header"
import SliderProyects from "../Components/SliderProyects"
import "../assets/css/Inicio.css"

function Inicio() {

  const proyectosEjemplo = [
    {
      titulo: "Proyecto 1",
      imagen: "https://via.placeholder.com/400x200?text=Proyecto+1",
      enlace: "https://www.ejemplo.com/proyecto1"
    },
    {
      titulo: "Proyecto 2",
      imagen: "https://via.placeholder.com/400x200?text=Proyecto+2",
      enlace: "https://www.ejemplo.com/proyecto2"
    },
    {
      titulo: "Proyecto 3",
      imagen: "https://via.placeholder.com/400x200?text=Proyecto+3",
      enlace: "https://www.ejemplo.com/proyecto3"
    },
    {
      titulo: "Proyecto 4",
      imagen: "https://via.placeholder.com/400x200?text=Proyecto+4",
      enlace: "https://www.ejemplo.com/proyecto4"
    },
    {
      titulo: "Proyecto 5",
      imagen: "https://via.placeholder.com/400x200?text=Proyecto+5",
      enlace: "https://www.ejemplo.com/proyecto5"
    },
    {
      titulo: "Proyecto 6",
      imagen: "https://via.placeholder.com/400x200?text=Proyecto+6",
      enlace: "https://www.ejemplo.com/proyecto6"
    },
    {
      titulo: "Proyecto 7",
      imagen: "https://via.placeholder.com/400x200?text=Proyecto+7",
      enlace: "https://www.ejemplo.com/proyecto7"
    },
    {
      titulo: "Proyecto 8",
      imagen: "https://via.placeholder.com/400x200?text=Proyecto+8",
      enlace: "https://www.ejemplo.com/proyecto8"
    },
    {
      titulo: "Proyecto 9",
      imagen: "https://via.placeholder.com/400x200?text=Proyecto+9",
      enlace: "https://www.ejemplo.com/proyecto9"
    },
    {
      titulo: "Proyecto 10",
      imagen: "https://via.placeholder.com/400x200?text=Proyecto+10",
      enlace: "https://www.ejemplo.com/proyecto10"
    }
  ];


  return (
    <main className="main-container">
      <Header />
      <div className="div-separador"> </div>
      <section className="body-container">
        <section className="proyects-container">
          <SliderProyects proyectos={proyectosEjemplo} />
          <CardProyect />

        </section>
      </section>
    </main>
  )
}

export default Inicio


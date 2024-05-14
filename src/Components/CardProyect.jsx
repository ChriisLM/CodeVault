import { Link } from "react-router-dom"
import "../assets/css/CardProyect.css"

function CardProyect({ proyecto, index }) {

    return (
        <div key={index} className="card-container">
            <Link to={proyecto.enlace}>
                <img className="image-proyect" src={proyecto.imagen} alt={proyecto.titulo} />
                <div className="description-container">
                    <h3 className="title-proyect">{proyecto.titulo}</h3>
                    <p className="description-proyect">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </Link>
        </div>
    )
}

export default CardProyect
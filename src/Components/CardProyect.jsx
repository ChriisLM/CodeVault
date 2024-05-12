import "../assets/css/CardProyect.css"

function CardProyect({ proyecto }) {

    return (
        <div className="card-container">
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
                <img className="image-proyect" src={proyecto.imagen} alt={proyecto.titulo} />
                <div className="description-container">
                    <h3 className="title-proyect">{proyecto.titulo}</h3>
                    <p className="description-proyect">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </a>
        </div>
    )
}

export default CardProyect
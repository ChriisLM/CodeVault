import "../../assets/css/cards/CardGallery.css"

function CardGallery() {

    return (
        <div className="CG-container card">
            <article className="CG-info-container">
                <div className="CG-perfil">
                    <img src="https://100dayscss.com/codepen/13-1.jpg" alt="perfil 1" />
                    <div className="CG-overlay"></div>
                    <div className="CG-plus"></div>
                </div>
                <div className="CG-perfil">
                    <img src="https://100dayscss.com/codepen/13-2.jpg" alt="perfil 2" />
                    <div className="CG-overlay"></div>
                    <div className="CG-plus"></div>
                </div>
                <div className="CG-perfil">
                    <img src="https://100dayscss.com/codepen/13-3.jpg" alt="perfil 3" />
                    <div className="CG-overlay"></div>
                    <div className="CG-plus"></div>
                </div>
                <div className="CG-perfil">
                    <img src="https://100dayscss.com/codepen/13-4.jpg" alt="perfil 4" />
                    <div className="CG-overlay"></div>
                    <div className="CG-plus"></div>
                </div>
            </article>
        </div>
    )
}


export default CardGallery
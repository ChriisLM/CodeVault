import "../../assets/css/cards/CardPricing.css"

function CardPricing() {
    return(
        <div className="CPR-container card">
            <article className="CPR-info-container">
                <section className="CPR-planes">
                    <div className="CPR-plan CPR-basico">
                        <div className="CPR-titulo">Basic</div>
                        <div className="CPR-price">$5<span>per month</span></div>
                        <div className="CPR-lineas">
                            <div className="CPR-linea"></div>
                            <div className="CPR-linea"></div>
                        </div>
                    </div>
                    <div className="CPR-plan CPR-pro">
                        <div className="CPR-titulo">Pro</div>
                        <div className="CPR-price">$10<span>per month</span></div>
                        <div className="CPR-lineas">
                            <div className="CPR-linea"></div>
                            <div className="CPR-linea"></div>
                        </div>
                    </div>
                    <div className="CPR-plan CPR-premium">
                        <div className="CPR-titulo">Premium</div>
                        <div className="CPR-price">$20<span>per month</span></div>
                        <div className="CPR-lineas">
                            <div className="CPR-linea"></div>
                            <div className="CPR-linea"></div>
                        </div>
                    </div>
                </section>
                <section className="CPR-datos-container">
                    <div className="CPR-datos CPR-usuarios">
                        <div className="CPR-texto">
                            <span className="CPR-izq">5 Users</span>
                            <span className="CPR-der">100 Users</span>
                        </div>
                        <div className="CPR-linea">
                            <div className="CPR-llenado"></div>
                        </div>
                    </div>
                    <div className="CPR-datos CPR-gigabytes">
                        <div className="CPR-texto">
                            <span className="CPR-izq">20 GB</span>
                            <span className="CPR-der">200 GB</span>
                        </div>
                        <div className="CPR-linea">
                            <div className="CPR-llenado"></div>
                        </div>
                    </div>
                    <div className="CPR-datos CPR-proyectos">
                        <div className="CPR-texto">
                            <span className="CPR-izq">1 Project</span>
                            <span className="CPR-der">50 Projects</span>
                        </div>
                        <div className="CPR-linea">
                            <div className="CPR-llenado"></div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default CardPricing
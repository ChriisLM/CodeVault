import "../../assets/css/cards/CardRedSocial.css"

function CardRedSocial() {
    return (
        <div className="CRS-container card">
            <article className="CRS-info-container">
                <section className="CRS-perfil-container">
                    <div className="CRS-imagen">
                        <div className="CRS-circulo-1"></div>
                        <div className="CRS-circulo-2"></div>
                        <img src="https://100dayscss.com/codepen/jessica-potter.jpg" alt="Jessica Potter" />
                    </div>

                    <div className="CRS-nombre">Jessica Potter</div>
                    <div className="CRS-trabajo">Visual Artist</div>

                    <div className="CRS-botones">
                        <button className="CRS-btn">Follow</button>
                        <button className="CRS-btn">Message</button>
                    </div>
                </section>
                <aside className="CRS-estadisticas">
                    <div className="CRS-caja">
                        <span className="CRS-valor">523</span>
                        <span className="CRS-parametro">Posts</span>
                    </div>
                    <div className="CRS-caja">
                        <span className="CRS-valor">1387</span>
                        <span className="CRS-parametro">Likes</span>
                    </div>
                    <div className="CRS-caja">
                        <span className="CRS-valor">146</span>
                        <span className="CRS-parametro">Follower</span>
                    </div>
                </aside>
            </article>
        </div>
    )
}

export default CardRedSocial
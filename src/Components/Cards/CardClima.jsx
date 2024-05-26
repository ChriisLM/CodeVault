import "../../assets/css/cards/CardClima.css"

function CardClima() {
    return (
        <div className="CC-container card">
            <article className="CC-info-container">
                <section className="CC-tiempo-container">
                    <div className="CC-logo-container">
                        <span className="CC-dia">Monday</span>
                        <img className="CC-imagen" src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="soleado" />
                        <div className="CC-temperatura-container">
                            <svg width="25" height="25" fill="none" stroke="#0741b4"  strokeLinecap="round" strokeLinejoin="round"  strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 13V5a3 3 0 1 1 6 0v8a5 5 0 1 1-6 0Z"></path>
                                <path d="M12 8.5V15"></path>
                                <path d="M12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                            </svg>
                            <span className="CC-temperatura">31°C</span>
                        </div>
                    </div>
                    <aside className="CC-datos-container">
                        <div className="CC-datos">
                            <svg className="CC-iconosEstadisticas" width="25" height="25" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 13.5c0-6.75-7.5-12-7.5-12s-7.5 5.25-7.5 12a7.5 7.5 0 0 0 15 0Z"></path>
                                <path d="M15.29 14.25a3.356 3.356 0 0 1-2.54 2.54"></path>
                            </svg>
                            <span className="CC-valor">16%</span>
                        </div>
                        <div className="CC-datos">
                            <svg className="CC-iconosEstadisticas" width="25" height="25" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.572 4.875a2.25 2.25 0 1 1 1.678 3.75h-9"></path>
                                <path d="M17.822 8.625a2.25 2.25 0 1 1 1.678 3.75H3"></path>
                                <path d="M12.572 19.875a2.25 2.25 0 1 0 1.678-3.75H3.75"></path>
                            </svg>
                            <span className="CC-valor">14Km/h</span>
                        </div>
                        <div className="CC-datos">
                            <svg className="CC-iconosEstadisticas" width="25" height="25" fill="none" stroke="#302020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12 22.5 2.466-3.75"></path>
                                <path d="m9.253 19.5 2.962-4.5"></path>
                                <path d="M8.25 8.625A6.375 6.375 0 1 1 14.625 15h-7.5a4.125 4.125 0 1 1 1.34-8.025"></path>
                            </svg>
                            <span className="CC-valor">78%</span>
                        </div>
                    </aside>
                </section>
                <section className="CC-dias-container">
                    <div className="CC-diabox">
                        <span className="CC-dia">Tue</span>
                        <img className="CC-imagen" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="parcialmente nublado" />
                        <span className="CC-temperatura">27°C</span>
                    </div>
                    <div className="CC-diabox">
                        <span className="CC-dia">Wed</span>
                        <img className="CC-imagen" src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="nublado" />
                        <span className="CC-temperatura">23°C</span>
                    </div>
                    <div className="CC-diabox">
                        <span className="CC-dia">Thu</span>
                        <img className="CC-imagen" src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" alt="lluvioso" />
                        <span className="CC-temperatura">16°C</span>
                    </div>
                    <div className="CC-diabox">
                        <span className="CC-dia">Fri</span>
                        <img className="CC-imagen" src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" alt="lluvioso" />
                        <span className="CC-temperatura">21°C</span>
                    </div>
                </section>
            </article>

        </div>
    )
}

export default CardClima

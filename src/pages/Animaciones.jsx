import { useState } from "react"
import Header from "../Components/Header"
import "../assets/css/Animaciones.css"
import "../assets/css/animaciones/Animacion1.css"
import "../assets/css/animaciones/Animacion2.css"
import "../assets/css/animaciones/Animacion3.css"
import "../assets/css/animaciones/Animacion4.css"
import "../assets/css/animaciones/Animacion5.css"
import "../assets/css/animaciones/Animacion6.css"
import "../assets/css/animaciones/Animacion7.css"
import "../assets/css/animaciones/Animacion8.css"
import "../assets/css/animaciones/Animacion9.css"
import "../assets/css/animaciones/Animacion10.css"
import "../assets/css/animaciones/Animacion11.css"

function Animaciones() {

    const [pausedAnimations, setPausedAnimations] = useState({});

    const toggleAnimation = (animationId) => {
        setPausedAnimations(prevState => ({
            ...prevState,
            [animationId]: !prevState[animationId]
        }));
    };

    const isPaused = (animationId) => pausedAnimations[animationId];

    //variables animaciones
    const a7puntos = Array.from({ length: 18 }, (_, i) => i + 1);

    return (
        <>
            <Header />
            <article className="container">
                <section className="title-container">
                    <h1 className="title">Animaciones</h1>
                </section>
                <section className="projects-container">

                    <div className="container-animacion1 card">
                        <div className={`a1-circulo1 ${isPaused('animacion1') ? 'paused' : ''}`}></div>
                        <div className={`a1-circulo2 ${isPaused('animacion1') ? 'paused' : ''}`}></div>
                        <div className={`a1-circulo3 ${isPaused('animacion1') ? 'paused' : ''}`}></div>
                        <button className="boton" id="toggle-animation1" onClick={() => toggleAnimation('animacion1')}>
                            {isPaused('animacion1') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion2 card">
                        <div className={`a2-ball ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-burbuja1 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-burbuja2 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-burbuja3 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-burbuja4 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-burbuja5 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-burbuja6 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-burbuja7 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-burbuja8 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-particula1 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-particula2 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-particula3 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-particula4 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-particula5 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-particula6 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-particula7 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-particula8 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-particula9 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <div className={`a2-particula10 ${isPaused('animacion2') ? 'paused' : ''}`}></div>
                        <button className="boton" id="toggle-animation2" onClick={() => toggleAnimation('animacion2')}>
                            {isPaused('animacion2') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion3 card">
                        <div className={`a3-gota ${isPaused('animacion3') ? 'paused' : ''}`}></div>
                        <div className={`a3-gota-anillo ${isPaused('animacion3') ? 'paused' : ''}`}></div>
                        <svg className={`a3-octagono ${isPaused('animacion3') ? 'paused' : ''}`}>
                            <polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
                        </svg>
                        <svg className={`a3-triangulo ${isPaused('animacion3') ? 'paused' : ''}`}>
                            <polygon points="53,0 106,90 0,90" />
                        </svg>
                        <div className={`a3-octa-chispas ${isPaused('animacion3') ? 'paused' : ''}`}>
                            <div className={`a3-chispa s1 ${isPaused('animacion3') ? 'paused' : ''}`}></div>
                            <div className={`a3-chispa s2 ${isPaused('animacion3') ? 'paused' : ''}`}></div>
                            <div className={`a3-chispa s3 ${isPaused('animacion3') ? 'paused' : ''}`}></div>
                            <div className={`a3-chispa s4 ${isPaused('animacion3') ? 'paused' : ''}`}></div>
                        </div>
                        <div className={`a3-tri-chispas ${isPaused('animacion3') ? 'paused' : ''}`}>
                            <div className={`a3-chispa s1 ${isPaused('animacion3') ? 'paused' : ''}`}></div>
                            <div className={`a3-chispa s2 ${isPaused('animacion3') ? 'paused' : ''}`}></div>
                            <div className={`a3-chispa s3 ${isPaused('animacion3') ? 'paused' : ''}`}></div>
                        </div>
                        <button className="boton" id="toggle-animation3" onClick={() => toggleAnimation('animacion3')}>
                            {isPaused('animacion3') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion4 card">
                        <div className={`a4-circulo ${isPaused('animacion4') ? 'paused' : ''}`}>
                            <div className={`a4-cielo ${isPaused('animacion4') ? 'paused' : ''}`}></div>
                            <div className={`a4-sol ${isPaused('animacion4') ? 'paused' : ''}`}></div>
                            <div className={`a4-lado-izq ${isPaused('animacion4') ? 'paused' : ''}`}></div>
                            <div className={`a4-lado-der ${isPaused('animacion4') ? 'paused' : ''}`}></div>
                            <div className={`a4-sombra ${isPaused('animacion4') ? 'paused' : ''}`}></div>
                            <div className={`a4-suelo ${isPaused('animacion4') ? 'paused' : ''}`}></div>
                        </div>
                        <button className="boton" id="toggle-animation4" onClick={() => toggleAnimation('animacion4')}>
                            {isPaused('animacion4') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion5 card">
                        <div className={`a5-arriba ${isPaused('animacion5') ? 'paused' : ''}`}></div>
                        <div className={`a5-abajo ${isPaused('animacion5') ? 'paused' : ''}`}></div>
                        <div className={`a5-elipse ${isPaused('animacion5') ? 'paused' : ''}`}>
                            <div className={`a5-gris ${isPaused('animacion5') ? 'paused' : ''}`}></div>
                            <div className={`a5-verde ${isPaused('animacion5') ? 'paused' : ''}`}></div>
                        </div>
                        <button className="boton" id="toggle-animation4" onClick={() => toggleAnimation('animacion5')}>
                            {isPaused('animacion5') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion6 card">
                        <div className={`a6-linea a6-linea-1 ${isPaused('animacion6') ? 'paused' : ''}`}></div>
                        <div className={`a6-linea a6-linea-2 ${isPaused('animacion6') ? 'paused' : ''}`}></div>
                        <div className={`a6-linea a6-linea-3 ${isPaused('animacion6') ? 'paused' : ''}`}></div>
                        <div className={`a6-linea a6-linea-4 ${isPaused('animacion6') ? 'paused' : ''}`}></div>
                        <div className={`a6-linea a6-linea-5 ${isPaused('animacion6') ? 'paused' : ''}`}></div>
                        <div className={`a6-linea a6-linea-6 ${isPaused('animacion6') ? 'paused' : ''}`}></div>
                        <div className={`a6-linea a6-linea-7 ${isPaused('animacion6') ? 'paused' : ''}`}></div>
                        <div className={`a6-linea a6-linea-8 ${isPaused('animacion6') ? 'paused' : ''}`}></div>
                        <div className={`a6-linea a6-linea-9 ${isPaused('animacion6') ? 'paused' : ''}`}></div>
                        <div className={`a6-linea a6-linea-10 ${isPaused('animacion6') ? 'paused' : ''}`}></div>
                        <button className="boton" id="toggle-animation6" onClick={() => toggleAnimation('animacion6')}>
                            {isPaused('animacion6') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion7 card">
                        <div className={`a7-puntos ${isPaused('animacion7') ? 'paused' : ''}`}>
                            {a7puntos.map(i => (
                                <div key={i} className={`a7-punto a7-punto-${i} ${isPaused('animacion7') ? 'paused' : ''}`}></div>
                            ))}
                        </div>
                        <button className="boton" id="toggle-animation7" onClick={() => toggleAnimation('animacion7')}>
                            {isPaused('animacion7') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion8 card">
                        {[...Array(20).keys()].map(i => (
                            <div key={i} className={`a8-rect a8-rect-${i + 1} ${isPaused('animacion8') ? 'paused' : ''}`}></div>
                        ))}
                        <button className="boton" id="toggle-animation8" onClick={() => toggleAnimation('animacion8')}>
                            {isPaused('animacion8') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion9 card">
                        {Array.from({ length: 18 }, (_, i) => (
                            <div key={i} className={`a9-ellipse a9-ellipse-${i + 1} ${isPaused('animacion9') ? 'paused' : ''}`}></div>
                        ))}
                        <button className="boton" id="toggle-animation9" onClick={() => toggleAnimation('animacion9')}>
                            {isPaused('animacion9') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion10 card">
                        <div className={`a10-centro ${isPaused('animacion10') ? 'paused' : ''}`}>
                            {Array.from({ length: 10 }, (_, i) => (
                                <div key={i} className={`a10-anillo a10-anillo-${i + 1} ${isPaused('animacion10') ? 'paused' : ''}`}></div>
                            ))}
                        </div>
                        <button className="boton" id="toggle-animation10" onClick={() => toggleAnimation('animacion10')}>
                            {isPaused('animacion10') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion11 card">
                        <div className={`a11-centro ${isPaused('animacion11') ? 'paused' : ''}`}>
                            <div className={`a11-bola ${isPaused('animacion11') ? 'paused' : ''}`}>
                                {Array.from({ length: 6 }, (_, i) => (
                                    <div key={i} className={`a11-plano a11-plano-${i + 1} ${isPaused('animacion11') ? 'paused' : ''}`}></div>
                                ))}
                            </div>
                        </div>
                        <button className="boton" id="toggle-animation11" onClick={() => toggleAnimation('animacion11')}>
                            {isPaused('animacion11') ? 'Play' : 'Pause'}
                        </button>
                    </div>

                    <div className="container-animacion12 card"></div>
                    <div className="container-animacion13 card"></div>
                    <div className="container-animacion14 card"></div>
                    <div className="container-animacion15 card"></div>
                    <div className="container-animacion16 card"></div>
                    <div className="container-animacion17 card"></div>
                    <div className="container-animacion18 card"></div>
                </section>
            </article>
        </>
    )
}

export default Animaciones
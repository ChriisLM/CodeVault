import { useState } from "react"
import Header from "../Components/Header"
import "../assets/css/Animaciones.css"
import "../assets/css/animaciones/Animacion1.css"
import "../assets/css/animaciones/Animacion2.css"
import "../assets/css/animaciones/Animacion3.css"

function Animaciones() {

    const [pausedAnimations, setPausedAnimations] = useState({});

    const toggleAnimation = (animationId) => {
        setPausedAnimations(prevState => ({
            ...prevState,
            [animationId]: !prevState[animationId]
        }));
    };

    const isPaused = (animationId) => pausedAnimations[animationId];

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

                    <div className="container-animacion4 card"></div>
                    <div className="container-animacion5 card"></div>
                    <div className="container-animacion6 card"></div>
                    <div className="container-animacion7 card"></div>
                    <div className="container-animacion8 card"></div>
                    <div className="container-animacion9 card"></div>
                    <div className="container-animacion10 card"></div>
                    <div className="container-animacion11 card"></div>
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
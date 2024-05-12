import React, { useState } from 'react';
import "../assets/css/SliderProyects.css"

function SliderProyects({ proyectos }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === proyectos.length - 1 ? 0 : prevIndex + 1));
    };

    const sliderStyle = {
        transform: `translateX(-${currentIndex * 100}%)` // Actualizamos la transformación en línea
    };

    return (
        <div className="slider-container">
            <div className="slider" style={sliderStyle}>
                {proyectos.map((proyecto, index) => (
                    <div key={index} className={index === currentIndex ? "slide active" : "slide"}>
                        <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
                            <img src={proyecto.imagen} alt={proyecto.titulo} />
                        </a>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={handlePrev}>&lt;</button>
            <button className="next" onClick={handleNext}>&gt;</button>
        </div>
    );
}

export default SliderProyects;
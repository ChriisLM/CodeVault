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
                <section className="CG-detalles">
                    <div className="CG-close"></div>
                    <img src="https://100dayscss.com/codepen/13-1-header.jpg" alt="" />
                    <div className="CG-imagen">
                        <img src="https://100dayscss.com/codepen/13-1.jpg" alt="" />
                    </div>
                    <div className="CG-datos-container">
                        <div className="CG-nombre"></div>
                        <div className="CG-acciones">
                            <div className="CG-boton">
                                <svg width="25" height="25" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m20.813 14.85-4.397-1.876a1.462 1.462 0 0 0-1.416.122l-2.353 1.566a7.172 7.172 0 0 1-3.3-3.282L10.903 9a1.49 1.49 0 0 0 .131-1.416L9.15 3.187a1.528 1.528 0 0 0-1.566-.9A5.269 5.269 0 0 0 3 7.499C3 14.943 9.056 21 16.5 21a5.268 5.268 0 0 0 5.212-4.584 1.528 1.528 0 0 0-.9-1.566Z"></path>
                                </svg>
                            </div>
                            <div className="CG-boton">
                                <svg width="25" height="25" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.25a9.75 9.75 0 0 0-8.55 14.438L2.653 19.5A1.49 1.49 0 0 0 4.5 21.347l2.813-.797A9.75 9.75 0 1 0 12 2.25Zm5.034 8.784-3 3a.769.769 0 0 1-1.068 0L10.5 11.56l-2.466 2.475a.759.759 0 0 1-1.068-1.068l3-3a.76.76 0 0 1 1.068 0L13.5 12.44l2.466-2.475a.76.76 0 0 1 1.068 1.068Z"></path>
                                </svg>
                            </div>
                            <div className="CG-boton">
                                <svg width="25" height="25" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 3A5.625 5.625 0 0 0 12 5.25 5.625 5.625 0 0 0 1.875 8.625c0 6.74 9.366 12.056 9.76 12.281A.73.73 0 0 0 12 21a.712.712 0 0 0 .366-.094 29.457 29.457 0 0 0 4.828-3.525c3.272-2.944 4.931-5.887 4.931-8.756A5.625 5.625 0 0 0 16.5 3Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}


export default CardGallery
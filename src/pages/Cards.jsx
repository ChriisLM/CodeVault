import CardClima from "../Components/Cards/CardClima"
import CardGallery from "../Components/Cards/CardGallery"
import CardPricing from "../Components/Cards/CardPricing"
import CardRedSocial from "../Components/Cards/CardRedSocial"
import Header from "../Components/Header"
import "../assets/css/Cards.css"


function Cards() {
    return (
        <>
            <Header />
            <article className="container">
                <section className="title-container">
                    <h1 className="title">Cards</h1>
                </section>
                <section className="cards-container">
                    <CardRedSocial/>
                    <CardClima/>
                    <CardGallery/>
                    <div className="card"></div>
                    <CardPricing/>
                    <div className="card"></div>
                </section>
            </article>
        </>
    )
}

export default Cards
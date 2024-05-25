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
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </section>
            </article>
        </>
    )
}

export default Cards
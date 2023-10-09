import Favoris from "./Favoris";
import Rating, { MyComponent } from "./Rating";
import "./Detail.css"
import Saison from "./Saison";
import ReactPlayer from 'react-player'
import { Link, useParams } from "react-router-dom";



const DetailsSeries = ({ title, year, id, imdb, tagline, overview, network, country, trailer, status, rating, votes, language, genres, aired_episodes, poster, saison, onClickFn, onClickFav, favorite,lienRendu }) => {
    const traduction =
        status === "returning series" ? "Série qui retourne" :
            status === "continuing" ? "Série qui continue" :
                status === "in production" ? "En production" :
                    status === "planned" ? "Prévue" :
                        status === "canceled" ? "Annulée" :
                            status === "upcoming" ? "À venir" :
                                status === "pilot" ? "Essaie" : "Série terminée";
    return (
        <div className="Detail-Serie">
            <div className="exit">
                <Link to={"/"+lienRendu}>
                    <button onClick={onClickFn}>X</button>
                </Link>
            </div>
            <div className="image-video">
                <img src={poster} alt="img-poster" className="img-poster" />
                {/* <iframe width="700" height="450" src={"https://www.youtube.com/embed/EGQChk9zGyQ?si=yRhPmfxTvkncG5AM"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                <ReactPlayer url={trailer} width={700} height={450} volume={0.5} />
            </div>
            <div className="section">
                <section className="info-serie">
                    <h1>{title}</h1>
                    <h2 className="taglien">{tagline}</h2>
                    <p className="overview">{overview}</p>
                    <h2 className="year">{year}</h2>
                    <div className="commentaire">
                        <MyComponent evaluation={rating} className="star" />
                        <p className="votes">{votes} votes</p>
                        <Favoris isFav={favorite} onClickFn={onClickFav} />

                        {/* <Favoris className="Bouton-fav" isFav={isFav}/> */}
                    </div>
                </section>
                {/* <p className="id">{id}</p> */}
                <section className="autre-info">
                    <p className="network">Poste de la diffusion : {network}</p>
                    <p className="country">Pays d'origine de la série : {country}</p>
                    <p className="genres">Genre : {genres}</p>
                    <p className="status">Status de la série : {traduction}</p>
                    <p className="language">Language parlée dans la série : {language}</p>
                    <p className="aired">Nombre d'épisodes diffusés : {aired_episodes}</p>
                    <a href={imdb} className="imdb">Lien vers imdb</a>
                    <a href={trailer} className="trailer">Lien de la bande-annonce</a>
                </section>
                <section className="eval"><Rating /> <p>Évaluez cette série</p></section>
            </div>
            <div className="saison-detail">
                {
                    saison.map((s, i) => (
                        // console.log(s),
                        <Saison key={i} saison={s.number} episode={s.episodes} />
                    ))
                }
            </div>
        </div>
    );
}

export default DetailsSeries;
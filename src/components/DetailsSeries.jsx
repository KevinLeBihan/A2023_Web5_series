import Favoris from "./Favoris";
import Rating, { MyComponent } from "./Rating";
import "./Detail.css"
import Saison from "./Saison";
import ReactPlayer from 'react-player'
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const DetailsSeries = ({ onClickFn, onClickFav, favorite, lienRendu }) => {

    const { serieId } = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const fetchSeries = async () => {
            const rep = await fetch(`http://localhost:3000/api/series/${serieId}`);
            const data = await rep.json();
            setDetail(data.serie);

        };
        fetchSeries();
    }, []);
    // console.log(detail);
    const traduction =
        detail.status === "returning series" ? "Série qui retourne" :
            detail.status === "continuing" ? "Série qui continue" :
                detail.status === "in production" ? "En production" :
                    detail.status === "planned" ? "Prévue" :
                        detail.status === "canceled" ? "Annulée" :
                            detail.status === "upcoming" ? "À venir" :
                                detail.status === "pilot" ? "Essaie" : "Série terminée";

    return (
        <div className="Detail-Serie">
            <div className="exit">
                <Link to={"/" + lienRendu}>
                    <button onClick={onClickFn}>X</button>
                </Link>
            </div>
            <div className="image-video">
                <img src={detail.poster} alt="img-poster" className="img-poster" />
                <ReactPlayer url={detail.trailer} width={700} height={450} volume={0.5} />
            </div>
            <div className="section">
                <section className="info-serie">
                    <h1>{detail.title}</h1>
                    <h2 className="taglien">{detail.tagline}</h2>
                    <p className="overview">{detail.overview}</p>
                    <h2 className="year">{detail.year}</h2>
                    <div className="commentaire">
                        <MyComponent evaluation={detail.rating} className="star" />
                        <p className="votes">{detail.votes} votes</p>
                        <Favoris isFav={favorite} onClickFn={onClickFav} />
                    </div>
                </section>
                <section className="autre-info">
                    <div>
                        <p className="network">Poste de la diffusion : {detail.network}</p>
                        <p className="country">Pays d'origine de la série : {detail.country}</p>
                        {detail.genres && (
                            <p className="genres">Genre : {detail.genres.join(", ")}</p>
                        )}
                        <p className="status">Status de la série : {traduction}</p>
                        <p className="language">Language parlée dans la série : {detail.language}</p>
                        <p className="aired">Nombre d'épisodes diffusés : {detail.aired_episodes}</p>
                        <a href={detail.imdb} className="imdb">Lien vers imdb</a>
                        <a href={detail.trailer} className="trailer">Lien de la bande-annonce</a>
                    </div>
                </section>
                <section className="eval"><Rating /> <p>Évaluez cette série</p></section>
            </div>
            <div className="saison-detail">
                <div>
                    {detail.seasons && detail.seasons.map((s, i) => (
                        <Saison key={i} saison={s.number} episode={s.episodes} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetailsSeries;

import DetailsSeries from "./DetailsSeries";
import Saison from "./Saison";
import { useState } from "react";
import { Link, Outlet,useParams } from "react-router-dom";
import "./listeSeries.css";


const ListeSeries = ({ title, year, id, slug, imdb, poster, onClickFn,lienRendu }) => {

    console.log();
    return (
        <>
            <div><Outlet/></div>
                <div className="Serie" onClick={onClickFn}>
                    {/* <div className="Serie"> */}
            <Link className="img-lien" to={`/${lienRendu}/${id}`}>
                    <h1>{title}</h1>
                    <h2>{year}</h2>
                    {/* <Link to={`/SeriesTendances/${id}`} onClick={onClickFn}/> */}
                    <img src={poster} alt="poster" className="poster" />
                    {/* <Link /> */}
            </Link>
                </div>

        </>
    );
}

export default ListeSeries;
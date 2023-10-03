import DetailsSeries from "./DetailsSeries";
import Saison from "./Saison";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./listeSeries.css";


const ListeSeries = ({ title, year, id, slug, imdb, poster, onClickFn }) => {
    return (
        <>
            {/* <div className="Serie" onClick={onClickFn}> */}
            <div className="Serie">
                <h1>{title}</h1>
                <h2>{year}</h2>
                <Link to={`/SeriesTendances/${id}`} onClick={onClickFn}/>
                    <img src={poster} alt="poster" className="poster" />
                <Link />
            </div>
        </>
    );
}

export default ListeSeries;
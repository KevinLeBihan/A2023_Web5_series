import React, { useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter, useParams } from "react-router-dom";
import LogIn from "./LogIn";
import ListeSeries from "./ListeSeries";
import "./App.css";
import list_series from "../../series_etape2_list.json";
import DetailsSeries from "./DetailsSeries";
import details from "../../series_etape2_details.json";
import Saison from "./Saison";
import Profil from "./Profil";
import Layout from './Layout';



const App = () => {
    const [estConnecte, setEstConnecte] = useState(false);
    const [user, setUser] = useState('');
    const [idSerie, setIdSerie] = useState(null);
    const [detailVisible, setDetailVisible] = useState(false);
    const [favorite, setFavorite] = useState([]);
    const routePresent = useParams();
    // const [estIdentifier, setEstIdentifier] = useState(false); // Assurez-vous de déclarer cette variable si vous en avez besoin
    const detail = detailVisible === false || detailVisible === null ? "Backdrop_hidden" : "Backdrop";
    const onClickHandler = (id) => {
        setDetailVisible(true);
        setIdSerie(id);
        console.log(id);
        console.log(detailVisible);
    };

    const updateUser = (newUser) => {
        setUser(newUser)
    };

    const clickBackdrop = () => {
        setDetailVisible(false);

    };
    const allo = "";

    const clickFavorite = (serie) => {
        setFavorite((prevFavorite) => {
            const isFav = prevFavorite.some((fav) => fav.id === serie.id);
            if (isFav) {
                return prevFavorite.filter((fav) => fav.id !== serie.id);
            } else {
                return [...prevFavorite, serie];
            }
        });
    };

    const mesLiens = ['SeriesTendances', 'Series-fav']

    const routes = [
        {
            path: '',
            element: <Layout estConnecte={estConnecte} />,
            children: [
                {
                    index: true,
                    element: <Navigate to="/login" replace />
                },
                {
                    path: 'login',
                    element: estConnecte === false ? (<LogIn onLogin={() => setEstConnecte(true)} estConnecte={estConnecte} updateUser={updateUser} />) : (<Navigate to="/SeriesTendances" />)
                },
                {
                    path: 'SeriesTendances',
                    element:
                        estConnecte ? (
                            <div className="SeriesTendances">
                                <h1 className="titre">Séries Tendances</h1>
                                <div className="Tendance">
                                    {list_series.map(({ title, year, id, slug, imdb, poster }) => {
                                        return (
                                            <ListeSeries
                                                key={id}
                                                title={title}
                                                year={year}
                                                id={id}
                                                slug={slug}
                                                imdb={imdb}
                                                poster={poster}
                                                onClickFn={() => onClickHandler(id)}
                                                lienRendu = {mesLiens[0]}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            
                        ) : (
                            <Navigate to="/login" replace/>
                        ),
                    children:
                        [
                            {
                                path: '/SeriesTendances/:serieId',
                                element:
                                    (detailVisible && idSerie !== null &&
                                        <div className="detailsSerie" >
                                            <DetailsSeries
                                                title={details[idSerie].title}
                                                year={details[idSerie].year}
                                                id={details[idSerie].id}
                                                imdb={details[idSerie].imdb}
                                                tagline={details[idSerie].tagline}
                                                overview={details[idSerie].overview}
                                                network={details[idSerie].network}
                                                country={details[idSerie].country}
                                                trailer={details[idSerie].trailer}
                                                status={details[idSerie].status}
                                                rating={details[idSerie].rating}
                                                votes={details[idSerie].votes}
                                                language={details[idSerie].language}
                                                genres={details[idSerie].genres}
                                                aired_episodes={details[idSerie].aired_episodes}
                                                poster={details[idSerie].poster}
                                                onClickFn={clickBackdrop}
                                                onClickFav={() => clickFavorite(details[idSerie])}
                                                favorite={favorite}
                                                saison={details[idSerie].seasons}
                                                lienRendu = {mesLiens[0]}
                                            />
                                        </div>
                                    )

                            }
                        ]
                },
                {
                    path: 'Series-fav',
                    element:
                        (
                            <div className="Series-fav">
                                <h1 className="titre">Séries favoris</h1>
                                <div className="fav">
                                    {favorite.map(({ title, year, id, slug, imdb, poster }) => {
                                        return (
                                            <ListeSeries
                                                key={id}
                                                title={title}
                                                year={year}
                                                id={id}
                                                slug={slug}
                                                imdb={imdb}
                                                poster={poster}
                                                onClickFn={() => onClickHandler(id)}
                                                lienRendu = {mesLiens[1]}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ),
                        children:
                        [
                            {
                                path: '/Series-fav/:serieId',
                                element:

                                    (detailVisible && idSerie !== null &&
                                        <div className="detailsSerie" >
                                            <DetailsSeries
                                                title={details[idSerie].title}
                                                year={details[idSerie].year}
                                                id={details[idSerie].id}
                                                imdb={details[idSerie].imdb}
                                                tagline={details[idSerie].tagline}
                                                overview={details[idSerie].overview}
                                                network={details[idSerie].network}
                                                country={details[idSerie].country}
                                                trailer={details[idSerie].trailer}
                                                status={details[idSerie].status}
                                                rating={details[idSerie].rating}
                                                votes={details[idSerie].votes}
                                                language={details[idSerie].language}
                                                genres={details[idSerie].genres}
                                                aired_episodes={details[idSerie].aired_episodes}
                                                poster={details[idSerie].poster}
                                                onClickFn={clickBackdrop}
                                                onClickFav={() => clickFavorite(details[idSerie])}
                                                favorite={favorite}
                                                saison={details[idSerie].seasons}
                                                lienRendu = {mesLiens[1]}
                                            />
                                        </div>
                                    )

                            }
                        ]
                },
                {
                    path: 'profil',
                    element:
                        (
                            <div className="Profil">
                                <Profil nom={user} nbFav={favorite.length} photo="https://i.pravatar.cc/300" cEstDeco={()=> setEstConnecte(false)} />
                            </div>
                        )
                },
                {
                    path: '*',
                    element: <Navigate to="/login" />
                }

            ]
        }
    ];

    return <RouterProvider router={createBrowserRouter(routes)} />;

}

export default App;

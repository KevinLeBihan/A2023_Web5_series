import React, { useState,useEffect } from 'react';
import { Navigate, RouterProvider, createBrowserRouter, useParams } from "react-router-dom";
import LogIn from "./LogIn";
import ListeSeries from "./ListeSeries";
import "./App.css";
import { useStorage } from '../hooks/useStorage';
import DetailsSeries from "./DetailsSeries";
import Saison from "./Saison";
import Profil from "./Profil";
import Layout from './Layout';


const App = () => {

    const {saveToStorage, getFromStorage,removeFromStorage } = useStorage('serie-')
    const savedUser = getFromStorage('username');
    const [username, setUsername] = useState("");
    // const [user, setUser] = useState("");
    const [series, setSeries] = useState([]);
    const [estConnecte, setEstConnecte] = useState(false);
    const [indexSerie, setIndexSerie] = useState(null);
    const [detailVisible, setDetailVisible] = useState(false);
    const [favorite, setFavorite] = useState([]);
    
    useEffect(() => {
        const fetchSeries = async () => {
            const rep = await fetch('http://localhost:3000/api/series/trending');
            const data = await rep.json();
            setSeries(data.series);
        };
        fetchSeries();
    },[]);
    const LoginHandler = (user) => {
        setUsername(user);
        saveToStorage('username',user);
    }
    useEffect(() => {
        if(savedUser){
            setUsername(savedUser)
            // setUser(savedUser);
            console.log(savedUser);
            setEstConnecte(true);
            console.log(estConnecte);
        }
    },[savedUser]);

    
    const detail = detailVisible === false || detailVisible === null ? "Backdrop_hidden" : "Backdrop";
    const onClickHandler = (index) => {
        setDetailVisible(true);
        setIndexSerie(index);
        
        console.log(detailVisible);
    };


    // const updateUser = (newUser) => {
    //     setUser(newUser)
    //     saveToStorage('username', newUser);
        
    // };

    const clickBackdrop = () => {
        setDetailVisible(false);

    };

    const removeUserFromStorage = () => {
        removeFromStorage('username'); // Supprimez le nom d'utilisateur du stockage
        setEstConnecte(false);
    }
   
    console.log(indexSerie);

    const clickFavorite = (index) => {
        console.log(index);
        setFavorite((prevFavorite) => {
            const isFav = prevFavorite.some((fav) => fav === index);
            if (isFav) {
                return prevFavorite.filter((fav) => fav !== index);
            } else {
                return [...prevFavorite, index];
            }
        });
        console.log(favorite);
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
                    // element: estConnecte === false ? (<LogIn onLogin={() => setEstConnecte(true)} estConnecte={estConnecte} updateUser={updateUser} />) : (<Navigate to="/SeriesTendances" />)
                    element: estConnecte === false ? (<LogIn onLoginFn={LoginHandler} estConnecter={()=>setEstConnecte(true)} />) : (<Navigate to="/SeriesTendances" />)
                },
                {
                    path: 'SeriesTendances',
                    element:
                        estConnecte  ? (
                            <div className="SeriesTendances">
                                <h1 className="titre">Séries Tendances</h1>
                                <div className="Tendance">
                                    {
                                    series.map(({ title, year, id, slug, imdb, poster },index) => {
                                        return (
                                            <ListeSeries
                                                key={id}
                                                title={title}
                                                year={year}
                                                id={id}
                                                slug={slug}
                                                imdb={imdb}
                                                poster={poster}
                                                onClickFn={() => onClickHandler(index)}
                                                lienRendu = {mesLiens[0]}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            
                        ) : (<Navigate to="/login" replace/>),
                    children:
                        [
                            {
                                path: '/SeriesTendances/:serieId',
                                element:
                                    (detailVisible && indexSerie !== null &&
                                        <div className="detailsSerie" >
                                            <DetailsSeries
                                                onClickFn={clickBackdrop}
                                                onClickFav={() => clickFavorite(indexSerie)}
                                                favorite={favorite}
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
                    estConnecte ? (
                            <div className="Series-fav">
                                <h1 className="titre">Séries favoris</h1>
                                <div className="fav">
                                    {favorite.map((index) => {
                                        const favoriteSeries = series[index];
                                        return (
                                            <ListeSeries
                                                key={favoriteSeries.id}
                                                title={favoriteSeries.title}
                                                year={favoriteSeries.year}
                                                id={favoriteSeries.id}
                                                slug={favoriteSeries.slug}
                                                imdb={favoriteSeries.imdb}
                                                poster={favoriteSeries.poster}
                                                onClickFn={() => onClickHandler(index)}
                                                lienRendu = {mesLiens[1]}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (<Navigate to="/login" replace/>),
                        children:
                        [
                            {
                                path: '/Series-fav/:serieId',
                                element:

                                    (detailVisible && indexSerie !== null &&
                                        <div className="detailsSerie" >
                                            <DetailsSeries
                                                onClickFn={clickBackdrop}
                                                onClickFav={() => clickFavorite(indexSerie)}
                                                favorite={favorite}
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
                                <Profil nom={username} nbFav={favorite.length} photo="https://i.pravatar.cc/300" cEstDeco={removeUserFromStorage} />
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

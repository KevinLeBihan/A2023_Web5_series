import { FaDoorOpen, FaHeart } from "react-icons/fa";
import "./Profil.css";
import { Link } from "react-router-dom";

const Profil = ({ nom, nbFav, photo , estConnecter}) => {
    console.log(estConnecter)
    return (
        <div className="conteneur-profil">
            <div className="profil">
                <div className="Deco" onClick={() => estConnecter(false)}>
                    {
                        
                    }
                    {/* <Link to={"/login"} className="lien"/>
                        <FaDoorOpen />
                    </Link> */}
                    <Link to={"/login"} className="lien">
                        <FaDoorOpen />
                    </Link>
                </div>
                <div className="photo">
                    <img src={photo} alt="" />
                </div>
                <div className="nom">
                    <h1>{nom}</h1>
                </div>
                <div className="nbFav">
                    <h2>Nombre de séries aimées {nbFav} <FaHeart /></h2>
                </div>
            </div>
        </div>

    );
}


export default Profil;
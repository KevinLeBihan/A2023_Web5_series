import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import "./Layout.css";

const Layout = ({estConnecte}) => {
  return (
    <div className="Layout">

      <Nav
        links={estConnecte === false ? 
          [{ name: "Login", url: "/login" }]
          :[
          { name: "Séries tendances", url: "/series-tendances" },
          { name: "Séries favorites", url: "/series-fav" },
          { name: "Recherche",url:"/recherche"},
          { name: "Profil", url: "/profil" },
        ]}
      />

      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;

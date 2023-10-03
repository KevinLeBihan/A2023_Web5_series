import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="Layout">

      <Nav
        links={[
          { name: "Login", url: "/login" },
          { name: "Séries tendances", url: "/SeriesTendances" },
          { name: "Séries favorites", url: "/Series-fav" },
          { name: "Profil", url: "/Profil" },
        ]}
      />

      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Scripts from "./pages/Scripts";
import Script from "./pages/Script";
import Footer from "./components/Footer";

function App() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [selectedRoleId, setSelectedRoleId] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      
      if (hash === "#home" || hash === "#") {
        setCurrentRoute("home");
        setSelectedRoleId(null);
      } else if (hash === "#scripts") {
        setCurrentRoute("scripts");
        setSelectedRoleId(null);
      } else if (hash.startsWith("#script/")) {
        const roleId = hash.replace("#script/", "");
        setCurrentRoute("script");
        setSelectedRoleId(roleId);
      } else {
        setCurrentRoute("home");
        setSelectedRoleId(null);
      }
      
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (route, id = null) => {
    if (route === "home") {
      window.location.hash = "#home";
    } else if (route === "scripts") {
      window.location.hash = "#scripts";
    } else if (route === "script" && id) {
      window.location.hash = `#script/${id}`;
    }
  };

  return (
    <div className="app-container">
      <Navbar navigateTo={navigateTo} currentRoute={currentRoute} />
      
      <main className="main-content">
        {currentRoute === "home" && <Home navigateTo={navigateTo} />}
        {currentRoute === "scripts" && <Scripts navigateTo={navigateTo} />}
        {currentRoute === "script" && (
          <Script roleId={selectedRoleId} navigateTo={navigateTo} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;

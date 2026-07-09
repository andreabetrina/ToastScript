import { useState, useEffect } from "react";
import "./../styles/Footer.css";

function Footer() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 SMCE Toastmasters Club. All Rights Reserved.</p>
        
        <div className="status-badge">
          {isOnline ? (
            <span className="status-tag online">
              <span className="pulse-dot"></span> Online
            </span>
          ) : (
            <span className="status-tag offline">
              <span className="static-dot"></span> Offline Mode
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

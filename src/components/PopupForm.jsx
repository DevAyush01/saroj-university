import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PopupForm = () => {
  const location = useLocation();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load the script only once
    if (scriptLoaded) return;

    const script1 = document.createElement("script");
    script1.src = "https://in8cdn.npfs.co/js/widget/npfwpopup.js";
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      setScriptLoaded(true);
      
      // Initialize the widget
      const initScript = document.createElement("script");
      initScript.innerHTML = `
        window.npfWidgetInstance = new NpfWidgetsInit({
          widgetId: "c4686ca3db50effadb9f24fc7ca22401",
          baseurl: "widgets.in8.nopaperforms.com",
          formTitle: "Enquiry Form",
          titleColor: "#FF0033",
          backgroundColor: "#ddd",
          iframeHeight: "500px",
          buttonbgColor: "#4c79dc",
          buttonTextColor: "#FFF",
        });
      `;
      document.body.appendChild(initScript);

      // Show popup on initial homepage load
      if (location.pathname === '/' && !sessionStorage.getItem('popupShown')) {
        setTimeout(() => {
          const btn = document.querySelector(".npfWidgetButton.npfWidget-c4686ca3db50effadb9f24fc7ca22401");
          if (btn) {
            btn.click();
            sessionStorage.setItem('popupShown', 'true');
          }
        }, 2000);
      }
    };

    return () => {
      document.body.removeChild(script1);
    };
  }, [location.pathname, scriptLoaded]);

  return (
    <button
      type="button"
      className="npfWidgetButton npfWidget-c4686ca3db50effadb9f24fc7ca22401"
      style={{
        position: "fixed",
        right: "-55px",
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        cursor: "pointer",
        backgroundColor: "red",
        color: "#fff", 
        padding: "0.6rem 2rem",
        borderRadius: "0.375rem 0.375rem 0 0.375rem", 
        boxShadow: "0 10px 15px -3px rgba(220, 38, 38, 0.5), 0 4px 6px -2px rgba(220, 38, 38, 0.25)", 
        transition: "background-color 0.3s ease", 
        zIndex: 30,
      }}
      aria-label="Open enquiry form"
    >
      Apply Now!
    </button>
  );
};

export default PopupForm;
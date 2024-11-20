import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showTopButton && (
        <div
          onClick={scrollToTop}
          className="position-fixed bottom-0 end-0 mb-4 me-4 d-flex align-items-center justify-content-center"
          style={{
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            backgroundColor: "#007bff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "16px",
            color: "#fff",
            flexDirection: "column",
            cursor: "pointer",
            transition: "transform 0.3s, background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <i className="bi bi-arrow-up" style={{ fontSize: "15px" }}></i>
          <span style={{ fontSize: "14px", marginTop: "4px" }}>Top</span>
        </div>
      )
      
  );
};

export default ScrollToTopButton;

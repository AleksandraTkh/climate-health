import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { CSSProperties, useState, useEffect } from "react";

function LearnMorePage() {
  const navigate = useNavigate();

  const handleNavigation = (url: string) => {
    window.location.href = url;
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: windowWidth > 768 ? "nowrap" : "wrap",
    paddingTop: "10px",
    overflowX: "auto",
    gap: "15px",
  };

  const cardStyle: CSSProperties = {
    width: windowWidth > 768 ? "90%" : "100%",
    borderRadius: "10px",
    backgroundColor: "#f0f4f8",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle: CSSProperties = {
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    fontSize: "20px",
  };

  const textBodyStyle: CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
  };

  const buttonStyle: CSSProperties = {
    fontWeight: "bolder",
    borderRadius: "20px",
    marginTop: "7px",
    padding: "10px",
    backgroundColor: "#4287f5",
    borderColor: "#4287f5",
    color: "white",
  };

  return (
    <div className="page-container">
      <h1 className="heading">Learn More</h1>
      <p className="description" style={textBodyStyle}>
        These sources were used for the analysis, ensuring reliability and
        accuracy in the information provided. Discover comprehensive information
        on life expectancy, illnesses, and other vital metrics for countries
        worldwide. Access valuable data from reputable sources to gain insights
        into global health trends and disparities.
      </p>
      <div style={cardContainerStyle}>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title style={titleStyle}>
              World Health Organization
            </Card.Title>
            <Card.Text style={textBodyStyle}>
              The World Health Organization (WHO) is a specialized agency
              consisting of 194 member states, whose primary function is to
              address international public health issues.
            </Card.Text>
            <Button
              style={buttonStyle}
              onClick={() => handleNavigation("https://www.who.int/")}
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title style={titleStyle}>Our World in Data</Card.Title>
            <Card.Text style={textBodyStyle}>
              To address the pressing issues facing our planet, it is essential
              to depend on high-quality research and data for direction. Our
              World in Data ensures that this crucial information is not only
              available but also understandable, enabling those who are working
              towards building a better future.
            </Card.Text>
            <Button
              style={buttonStyle}
              onClick={() => handleNavigation("https://ourworldindata.org/")}
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title style={titleStyle}>The World Bank</Card.Title>
            <Card.Text style={textBodyStyle}>
              The World Bank Group, comprised of five institutions and active in
              over 130 locations worldwide, is a unique global partnership. It
              boasts a membership of 189 countries and a diverse workforce from
              more than 170 nations. This organization works collaboratively to
              develop sustainable strategies that aim to reduce poverty and
              promote inclusive growth in developing countries.
            </Card.Text>
            <Button
              style={buttonStyle}
              onClick={() =>
                handleNavigation("https://www.worldbank.org/en/home")
              }
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default LearnMorePage;

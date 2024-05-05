import React, { CSSProperties } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import earthIcon from "../../assets/earth.png";
import perfomanceIcon from "../../assets/performance.png";
import infoIcon from "../../assets/info.png";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const cardContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    paddingTop: "10px",
    overflowX: "auto",
    gap: "15px",
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

  const titleWithIconStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
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

  const indicatorsCardStyle: CSSProperties = {
    width: "90%",
    borderRadius: "10px",
    backgroundColor: "#f0f4f8",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const climateZonesCardStyle: CSSProperties = {
    width: "90%",
    borderRadius: "10px",
    backgroundColor: "#f0f4f8",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const learnMoreCardStyle: CSSProperties = {
    width: "90%",
    borderRadius: "10px",
    backgroundColor: "#f0f4f8",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="page-container">
      <h1 className="heading">About C&H</h1>
      <p className="description" style={textBodyStyle}>
        Welcome to Climate & Health, your premier platform for understanding the
        vital connection between climate and human well-being. The platform
        offers comprehensive insights into how environmental factors, such as
        average yearly temperature and air pollution levels, impact public
        health.
      </p>
      <div style={cardContainerStyle}>
        <Card style={indicatorsCardStyle}>
          <Card.Body>
            <Card.Title style={titleStyle}>
              <div style={titleWithIconStyle}>
                <img
                  src={perfomanceIcon}
                  alt="Kpi Icon"
                  width="30"
                  height="30"
                />
                Indicators
              </div>
            </Card.Title>
            <Card.Text style={textBodyStyle}>
              Whether you're interested in the effects of rising temperatures on
              respiratory diseases or the link between air quality and
              cardiovascular health, the platform provides the analysis you need
              to stay informed.
            </Card.Text>
            <Button
              style={buttonStyle}
              onClick={() => handleNavigation("/indicators")}
            >
              See Indicators
            </Button>
          </Card.Body>
        </Card>

        <Card style={climateZonesCardStyle}>
          <Card.Body>
            <Card.Title style={titleStyle}>
              <div style={titleWithIconStyle}>
                <img src={earthIcon} alt="Earth Icon" width="30" height="30" />
                Climate Zones Map
              </div>
            </Card.Title>
            <Card.Text style={textBodyStyle}>
              Navigate through our interactive climate zones map, showcasing
              regions across the globe and within specific countries. Understand
              the unique environmental challenges each area faces and how they
              intersect with public health concerns.
            </Card.Text>
            <Button
              style={buttonStyle}
              onClick={() => handleNavigation("/climate-zones-map")}
            >
              See Climate Zones Map
            </Button>
          </Card.Body>
        </Card>

        <Card style={learnMoreCardStyle}>
          <Card.Body>
            <Card.Title style={titleStyle}>
              <div style={titleWithIconStyle}>
                <img src={infoIcon} alt="Info Icon" width="30" height="30" />
                Learn More
              </div>
            </Card.Title>
            <Card.Text style={textBodyStyle}>
              Delve into the wealth of information behind our analyses. Learn
              about the reputable sources we rely on to provide accurate and
              data on climate conditions and their impacts on public health.
              From governmental agencies to renowned research institutions,
              discover the rigorous methodologies behind our findings.
            </Card.Text>
            <Button
              style={buttonStyle}
              onClick={() => handleNavigation("/learn-more")}
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;

import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { CSSProperties } from "react";

function LearnMorePage() {
  const navigate = useNavigate();

  const handleNavigation = (url: string) => {
    window.location.href = url;
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

  const titleStyle: CSSProperties = {
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    fontSize: "20px",
  };

  const textBodyStyle: CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
  };

  const cardStyle: CSSProperties = {
    width: "90%",
    borderRadius: "10px",
    backgroundColor: "#f0f4f8",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
              "To tackle the urgent challenges confronting our world, we must
              rely on top-notch research and data for guidance. Our World in
              Data ensures this valuable knowledge is not only accessible but
              also comprehensible, empowering individuals striving to create a
              brighter future."
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
              "The World Bank Group, with a membership spanning 189 countries, a
              diverse staff hailing from over 170 nations, and operational
              presence in more than 130 locations, stands out as a distinctive
              global alliance. Comprising five institutions, it collaborates to
              implement sustainable solutions aimed at alleviating poverty and
              fostering inclusive growth across developing nations."
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

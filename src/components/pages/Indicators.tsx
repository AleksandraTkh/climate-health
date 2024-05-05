import React, { useState } from "react";
import "../../styles/pages/general.css";
import "../../styles/pages/GraphPage.css";
import BarChart from "../graphs/LE/LifeExpectancy";
import SecondGraph from "../graphs/LE/LEvsT";
import ThirdGraph from "../graphs/LE/LEvsUV";
import CancerTemperatureGraph from "../graphs/Disease/Cancer";
import CardiovascularGraph from "../graphs/Disease/CV";
import RespiratoryMortalityGraph from "../graphs/Disease/CR";
import ParkinsonsGraph from "../graphs/Disease/Parkinson";
import SIDSGraph from "../graphs/Disease/SIDS";
import SuicideTemperaturePollutionGraph from "../graphs/Disease/NS";
import BreastCancerClimateGraph2 from "../graphs/Disease/BreastCancer";
import ProstateCancerGraph from "../graphs/Disease/ProstateCancer";
import ColorectalCancerGraph from "../graphs/Disease/CorectalCancer";
function Indicators() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="page-container">
      <h1 className="heading">Important Indicators</h1>
      <p className="text">
        These indicators show how climate zone features affect lifespan and
        healthy lifespan. They also offer insights into how climate impacts
        common non-infectious diseases. It's important to note that this
        information assumes ideal conditions, meaning high living standards.
      </p>
      <hr className="separator" />

      <div className="tabs-container">
        <button
          onClick={() => setActiveTab("tab1")}
          className={activeTab === "tab1" ? "active" : ""}
        >
          Climate & Healthy Life Expectancy
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          className={activeTab === "tab2" ? "active" : ""}
        >
          Climate & Cancer
        </button>
        <button
          onClick={() => setActiveTab("tab3")}
          className={activeTab === "tab3" ? "active" : ""}
        >
          Climate & Cardiovascular Disease
        </button>
        <button
          onClick={() => setActiveTab("tab4")}
          className={activeTab === "tab4" ? "active" : ""}
        >
          Climate & Chronic Respiratory Diseases
        </button>
        <button
          onClick={() => setActiveTab("tab5")}
          className={activeTab === "tab5" ? "active" : ""}
        >
          Climate & Parkinson Disease
        </button>
        <button
          onClick={() => setActiveTab("tab6")}
          className={activeTab === "tab6" ? "active" : ""}
        >
          Climate & SIDS
        </button>
        <button
          onClick={() => setActiveTab("tab7")}
          className={activeTab === "tab7" ? "active" : ""}
        >
          Climate & Number of Suicides
        </button>
      </div>

      {activeTab === "tab1" && (
        <>
          <div className="graph-text-container">
            <div className="graph-container">
              <BarChart />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                The average length of life in a healthy state increases by
                approximately 0.0459 years each additional year. The highest
                average healthy lifespan is in climatic zone A, followed by
                zones C and D, then E and B. The highest life expectancy is in
                Zone A, followed by Zone D and Zone C, with Zones E and B having
                the lowest life expectancy.
              </p>
              <p className="text">
                Zones C and D exhibit similar indicators, which can also be
                observed in the attached graph, indicating that the differences
                between these zones are not very significant.
              </p>
            </div>
          </div>
          <div className="graph-text-container">
            <div className="graph-container">
              <SecondGraph />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                With each unit increase in UV radiation, the average healthy
                lifespan slightly decreases. With each unit increase in UV
                radiation, the expected average healthy lifespan decreases by
                approximately 0.000508 years, or approximately 0.1853 days.
              </p>
            </div>
          </div>
          <div className="graph-text-container">
            <div className="graph-container">
              <ThirdGraph />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                With each degree increase in average annual temperature, the
                average healthy lifespan increases by 0.0316 years. With each
                unit increase in air pollution level, the expected average
                healthy lifespan decreases by 0.088816 years, which is
                approximately equivalent to 32.438 days.
              </p>
            </div>
          </div>
        </>
      )}
      {activeTab === "tab2" && (
        <>
          <div className="graph-text-container">
            <div className="graph-container">
              <CancerTemperatureGraph />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                The incidence of cancer includes the occurrence of all types of
                cancer.
              </p>
              <p className="text">
                In warmer zones, a lower number of cancer cases is observed
                compared to zones with lower temperatures. With each degree
                increase in temperature, the number of cancer cases per 100
                people decreases by approximately 0.1215. However, this trend
                does not apply to Zone E, where a relatively low number of
                cancer cases is observed, indicating that there are several
                other factors not included in this analysis.
              </p>
              <p className="text">
                The average annual duration of sunshine, UV radiation, and the
                level of air pollution have minimal impact on the incidence of
                chronic respiratory diseases.
              </p>
            </div>
          </div>
          <div className="graph-text-container">
            <div className="graph-container">
              <BreastCancerClimateGraph2 />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                With each additional degree Celsius in the average annual
                temperature, an increase in the incidence of breast cancer by
                0.0204 cases per 100 people is expected. Higher UV radiation and
                average annual duration of sunshine suggest a lower number of
                breast cancer cases, but this influence is very small.
              </p>
            </div>
          </div>
          <div className="graph-text-container">
            <div className="graph-container">
              <ProstateCancerGraph />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                "With each increase of one unit in the UV index, there is a
                decrease in the incidence of prostate cancer by 0.00003431 cases
                per 100 people. The average annual temperature and average
                annual duration of sunshine have minimal impact on the incidence
                of chronic respiratory diseases.
              </p>
            </div>
          </div>
          <div className="graph-text-container">
            <div className="graph-container">
              <ColorectalCancerGraph />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                With each degree increase in average annual temperature, an
                increase in the incidence of colorectal cancer by 0.0083 cases
                per 100 people is expected. With each additional hour of average
                annual duration of sunshine, there is a decrease in the
                incidence of colorectal cancer by 0.00003941 cases per 100
                people. An increase in UV radiation by one unit leads to a
                decrease in the incidence of colorectal cancer by 0.00008209
                cases per 100 people.
              </p>
            </div>
          </div>
        </>
      )}
      {activeTab === "tab3" && (
        <>
          <div className="graph-text-container">
            <div className="graph-container">
              <CardiovascularGraph />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                Cardiovascular diseases include all diseases of the heart and
                blood vessels, including myocardial infarctions, strokes,
                atherosclerosis, ischemic heart disease, hypertension,
                cardiomyopathies, and others.
              </p>
              <p className="text">
                Higher average annual temperature reduces the incidence of
                cardiovascular diseases: with each degree increase in average
                annual temperature, there is a decrease in the incidence of
                cardiovascular diseases by 0.023 cases per 100 people. However,
                Zone B has the highest number of cases, which is associated with
                the highest level of air pollution: each additional point in the
                air pollution rating increases the incidence of cardiovascular
                diseases by 0.0089 cases per 100 people.
              </p>
              <p className="text">
                An increase in UV index by one unit increases the incidence of
                cardiovascular diseases by 0.0001 cases per 100 people, and
                longer average duration of sunshine increases the incidence of
                cardiovascular diseases by 0.000045 cases with each additional
                hour of sunshine. However, the influence of these factors is
                less significant than the influence of average annual
                temperature and air pollution.
              </p>
            </div>
          </div>
        </>
      )}
      {activeTab === "tab4" && (
        <>
          <div className="graph-text-container">
            <div className="graph-container">
              <RespiratoryMortalityGraph />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                Longer average duration of sunshine throughout the year reduces
                the number of deaths from chronic respiratory diseases by 0.0042
                cases. However, air pollution and UV radiation are more
                significant than the average annual duration of sunshine: each
                additional point in the air pollution rating increases the
                incidence of chronic respiratory diseases by 0.5343 cases per
                100 people, and with each increase of one unit in the UV index,
                there is a decrease in the incidence of chronic respiratory
                diseases by 0.0053 cases per 100 people.
              </p>
              <p className="text">
                The average yearly temperature has minimal influence on the
                incidence of chronic respiratory diseases.
              </p>
            </div>
          </div>
        </>
      )}
      {activeTab === "tab5" && (
        <>
          <div className="graph-text-container">
            <div className="graph-container">
              <ParkinsonsGraph />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                Longer average duration of sunshine throughout the year reduces
                the number of cases of Parkinson's disease by 0.0000020 cases,
                similarly to the average annual temperature: with each degree
                increase in average annual temperature, there is a decrease in
                the incidence of Parkinson's disease by 0.0021 cases per 100
                people. With each increase of one unit in the UV index, there is
                a decrease in the incidence rate of Parkinson's disease by
                0.000091 cases per 100 people.
              </p>
            </div>
          </div>
        </>
      )}
      {activeTab === "tab6" && (
        <>
          <div className="graph-text-container">
            <div className="graph-container">
              <SIDSGraph />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                SIDS, or Sudden Infant Death Syndrome, is the sudden and
                unexplained death of a child younger than one year old. The
                diagnosis of SIDS is made when the cause of death of the child
                remains unexplained even after investigation of the death scene,
                autopsy, and examination of the clinical history.
              </p>
              <p className="text">
                With higher average annual temperatures, the number of SIDS
                deaths decreases: with each degree increase in average annual
                temperature, there is a decrease in SIDS cases by 0.7214 per
                100,000 people. Conversely, each additional point in air
                pollution rating increases the number of SIDS cases by 0.1026
                per 100,000 people, which explains why the SIDS death rate is
                higher in Zone B than in Zone A.
              </p>
              <p className="text">
                The average annual duration of sunshine and UV radiation have
                minimal influence on the incidence of chronic respiratory
                diseases.
              </p>
            </div>
          </div>
        </>
      )}
      {activeTab === "tab7" && (
        <>
          <div className="graph-text-container">
            <div className="graph-container">
              <SuicideTemperaturePollutionGraph />
            </div>
            <div className="text-container">
              <h3 className="heading-description">Description:</h3>
              <p className="text">
                With higher average annual temperature, the number of suicides
                decreases: with each degree increase in average annual
                temperature, there is a decrease in the number of suicides by
                1.2501 cases per 100,000 people. Each additional point in air
                pollution rating increases the number of suicides by 0.3402
                cases per 100,000 people.
              </p>
              <p className="text">
                The average annual temperature and UV radiation have minimal
                impact on the incidence of chronic respiratory diseases.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Indicators;

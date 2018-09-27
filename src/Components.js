import React from "react";
import { Link } from "react-router-dom";

import "./App.css";
// import "./Select.css";
import { TitlesContainer } from "./components/TitlesContainer";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";
import { BackButton } from "./components/BackButton";
import { ProgressCandidate } from "./components/ProgressCandidate";
import { Badge } from "./components/Badge";

import { Row } from "./components/Row";
import { Button } from "./components/Button";
import { StatsTech } from "./components/StatsTech";
import { StatsTickets } from "./components/StatsTickets";

export const Components = () => {
  return (
    <section className="wrapper">
      <TitlesContainer>
        <BackButton path="/" />
        <Title>Ticket Details</Title>
      </TitlesContainer>

      <TitlesContainer>
        <Subtitle>Tickets</Subtitle>
      </TitlesContainer>

      <form action="" className="Form">
        <div className="form-control">
          <label htmlFor="demo">Project</label>
          <select name="demo" id="demo">
            <option value="all">All...</option>
            <option value="item01">JPMC Galicia - TH</option>
            <option value="item02">JPMC Macro - U</option>
            <option value="item03">JPMC ICBC - MQ</option>
            <option value="item04">JPMC ICBC - UY</option>
            <option value="item05">JPMC Santander - ZX</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="demo2">Profile</label>
          <select name="demo2" id="demo2">
            <option value="all">All...</option>
            <option value="item01">Java Developer</option>
            <option value="item02">Web UI Developer</option>
            <option value="item04">Python Developer</option>
            <option value="item03">UX Designer</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="demo3">Seniority</label>
          <select name="demo3" id="demo3">
            <option value="all">All...</option>
            <option value="item01">Junior</option>
            <option value="item02">Semi Senior</option>
            <option value="item03">Senior</option>
            <option value="item04">Architect</option>
            <option value="item05">Team Leader</option>
          </select>
        </div>
        <div className="form-control">
          <Button>Apply Filter</Button>
        </div>
      </form>
      <p>
        <strong>Filter applied »</strong> JPMC ICBC - UY / Web UI Developer /
        Semi Senior
      </p>

      <table className="TicketPreview hasAging">
        <thead>
          <Row className="row">
            <td>Ticket</td>
            <td>Profile</td>
            <td>Seniority</td>
            <td>Project</td>
            <td>SR Created On</td>
            <td>Start Date</td>
            <td>Aging</td>
            <td>Status</td>
          </Row>
        </thead>
        <tbody>
          <Row className="row rowSolid">
            <td>
              <Link to="/">123456</Link>
            </td>
            <td>Web UI Developer</td>
            <td>Semi Senior</td>
            <td>JPMC - Project 2</td>
            <td>2018-08-10</td>
            <td>2018-09-22</td>
            <td className="agingSuccess">-79</td>
            <td>
              <Badge status="In Progress" />
            </td>
          </Row>
          <Row className="row rowSolid">
            <td>
              <Link to="/">908445</Link>
            </td>
            <td>Web UI Developer</td>
            <td>Architect</td>
            <td>JPMC - Project 99</td>
            <td>2018-08-10</td>
            <td>2018-09-22</td>
            <td className="agingWarning">22</td>
            <td>
              <Badge status="Closed" />
            </td>
          </Row>
        </tbody>
      </table>

      <TitlesContainer>
        <Subtitle>Ticket Information</Subtitle>
        <Button>View history</Button>
      </TitlesContainer>

      <table>
        <thead>
          <Row className="row">
            <td>Project</td>
            <td>Description</td>
            <td>Seniority</td>
            <td>Position</td>
            <td>SR Created On</td>
            <td>Start Date</td>
            <td>Location</td>
          </Row>
        </thead>
        <tbody>
          <Row className="row rowOutline">
            <td>ICBC App</td>
            <td>JPMC - Project MMA34 - TH</td>
            <td>Semi Senior</td>
            <td>Confirmed</td>
            <td>2018-08-11</td>
            <td>2018-09-22</td>
            <td>AR/CABA/Laminar</td>
          </Row>
        </tbody>
      </table>

      <TitlesContainer>
        <Subtitle>Ticket History</Subtitle>
      </TitlesContainer>

      <table className="hasAging History">
        <thead>
          <Row className="row">
            <td>Updated</td>
            <td>Project</td>
            <td>Profile</td>
            <td>Seniority</td>
            <td>SR Created On</td>
            <td>Start Date</td>
            <td>Position</td>
            <td>Aging</td>
            <td>Location</td>
          </Row>
        </thead>
        <tbody>
          <Row className="row rowOutline">
            <td>
              <i>2018-09-30 22:56</i>
            </td>
            <td>ICBC App</td>
            <td>Web UI Developer</td>
            <td>Semi Senior</td>
            <td>Confirmed</td>
            <td>2018-08-11</td>
            <td>2018-09-22</td>
            <td className="agingWarning">89</td>
            <td>AR/CABA/Laminar</td>
          </Row>
          <Row className="row rowOutline">
            <td>
              <i>2018-09-30 22:56</i>
            </td>
            <td>ICBC App</td>
            <td>Web UI Developer</td>
            <td>Semi Senior</td>
            <td>Confirmed</td>
            <td>2018-08-11</td>
            <td>2018-09-22</td>
            <td className="agingWarning">89</td>
            <td>AR/CABA/Laminar</td>
          </Row>
          <Row className="row rowOutline">
            <td>
              <i>2018-09-30 22:56</i>
            </td>
            <td>ICBC App</td>
            <td>Web UI Developer</td>
            <td>Semi Senior</td>
            <td>Confirmed</td>
            <td>2018-08-11</td>
            <td>2018-09-22</td>
            <td className="agingSuccess">-89</td>
            <td>AR/CABA/Laminar</td>
          </Row>
          <Row className="row rowOutline">
            <td>
              <i>2018-09-30 22:56</i>
            </td>
            <td>ICBC App</td>
            <td>Web UI Developer</td>
            <td>Semi Senior</td>
            <td>Confirmed</td>
            <td>2018-08-11</td>
            <td>2018-09-22</td>
            <td className="agingSuccess">-89</td>
            <td>AR/CABA/Laminar</td>
          </Row>
        </tbody>
      </table>

      <TitlesContainer>
        <Subtitle>Candidates</Subtitle>
        <Button>Compare candidates</Button>
      </TitlesContainer>

      <table className="ProgressCandidate">
        <thead>
          <Row className="row">
            <td>Name</td>
            <td>Status</td>
            <td>Lvl.</td>
            <td>
              <div className="ProgressCandidateHead">
                <span>Interview</span>
                <span>Onboarding</span>
                <span>Real</span>
                <span>Closed</span>
              </div>
            </td>
          </Row>
        </thead>
        <tbody>
          <Row className="row rowSolid">
            <td>
              <Link to="/">Nicolás Córdoba</Link>
            </td>
            <td>Screening</td>
            <td>3</td>
            <td>
              <ProgressCandidate
                data={{
                  interview: "yes",
                  onboarding: "yes",
                  real: "yes",
                  closed: "no"
                }}
              />
            </td>
          </Row>
          <Row className="row rowSolid">
            <td>
              <Link to="/">Gonzalo Caba U.</Link>
            </td>
            <td>Screening</td>
            <td>5</td>
            <td>
              <ProgressCandidate
                data={{
                  interview: "yes",
                  onboarding: "yes",
                  real: "yes",
                  closed: "closed"
                }}
              />
            </td>
          </Row>
          <Row className="row rowSolid">
            <td>
              <Link to="/">Lucas Romero Di Benedetto</Link>
            </td>
            <td>Screening</td>
            <td>4</td>
            <td>
              <ProgressCandidate
                data={{
                  interview: "yes",
                  onboarding: "yes",
                  real: "no",
                  closed: "no"
                }}
              />
            </td>
          </Row>
        </tbody>
      </table>

      <TitlesContainer>
        <Subtitle>Candidate Information</Subtitle>
      </TitlesContainer>

      <table>
        <thead>
          <Row className="row">
            <td>Ticket</td>
            <td>Profile</td>
            <td>Seniority</td>
            <td>Project</td>
            <td>SR Created On</td>
            <td>Start Date</td>
            <td>Status</td>
          </Row>
        </thead>
        <tbody>
          <Row className="row rowOutline">
            <td>123456</td>
            <td>Web UI Developer</td>
            <td>Architect</td>
            <td>JPMC - Project 99</td>
            <td>2018-08-10</td>
            <td>2018-09-22</td>
            <td>Closed</td>
          </Row>
        </tbody>
      </table>

      <TitlesContainer>
        <Subtitle>Candidates History</Subtitle>
      </TitlesContainer>

      <table className="hasAging History">
        <thead>
          <Row className="row">
            <td>Updated</td>
            <td>Comments</td>
            <td>Interview</td>
            <td>Onboarding</td>
            <td>Priority</td>
            <td>Aging</td>
            <td>Real</td>
            <td>Status</td>
            <td>Area</td>
            <td>Project</td>
            <td>Lvl.</td>
          </Row>
        </thead>
        <tbody>
          <Row className="row rowOutline">
            <td>
              <i>2018-09-30 22:56</i>
            </td>
            <td>Está cursando en UADE</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>B</td>
            <td className="agingWarning">89</td>
            <td>--</td>
            <td>Interviewing</td>
            <td>GTI</td>
            <td>Post Trades</td>
            <td>4</td>
          </Row>
          <Row className="row rowOutline">
            <td>
              <i>2018-09-30 22:56</i>
            </td>
            <td>Vive lejos pero viaja en auto </td>
            <td>Yes</td>
            <td>Yes</td>
            <td>B</td>
            <td className="agingWarning">30</td>
            <td>--</td>
            <td>Interviewing</td>
            <td>GTI</td>
            <td>Post Trades</td>
            <td>4</td>
          </Row>
          <Row className="row rowOutline">
            <td>
              <i>2018-09-30 22:56</i>
            </td>
            <td>Actualmente no puede comenzar por problemas de vivienda</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>B</td>
            <td className="agingSuccess">77</td>
            <td>--</td>
            <td>Interviewing</td>
            <td>GTI</td>
            <td>Post Trades</td>
            <td>4</td>
          </Row>
          <Row className="row rowOutline">
            <td>
              <i>2018-09-30 22:56</i>
            </td>
            <td>--</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>B</td>
            <td className="agingSuccess">120</td>
            <td>--</td>
            <td>Interviewing</td>
            <td>GTI</td>
            <td>Post Trades</td>
            <td>4</td>
          </Row>
        </tbody>
      </table>

      <TitlesContainer>
        <Title>Statistics</Title>
      </TitlesContainer>

      <TitlesContainer>
        <Subtitle>Tech Stats</Subtitle>
      </TitlesContainer>
      <StatsTech/>

      <TitlesContainer>
        <Subtitle>Tickets Stats</Subtitle>
      </TitlesContainer>
      <StatsTickets/>
    </section>
  );
};

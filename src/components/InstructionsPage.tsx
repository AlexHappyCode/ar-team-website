import React from 'react'
import MainNav from './MainNav'
import ListGroup from 'react-bootstrap/ListGroup'

const InstructionsPage = () => {
  return (
    <div className="lead m-4">
      <MainNav></MainNav>
      <h1>Setup Guide </h1>
      <ListGroup as="ol" numbered id="listgroup">
        <ListGroup.Item className="d-flex align-items-start bg-dark text-white">
          <div className="ms-2 text-start">
            <div className="fw-bold">Unity Hub</div>
            <p>
              Download the unity hub here: <br></br>
              <a
                href="https://unity.com/download"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://unity.com/download
              </a>
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-start bg-dark text-white">
          <div className="ms-2 text-start">
            <div className="fw-bold">Install Unity</div>Unity Version:
            2021.3.18f1 LTS
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-start bg-dark text-white">
          <div className="ms-2 text-start">
            <div className="fw-bold">Git Project</div>Link to our git project:
            <br></br>
            <a href="https://github.com/AlexHappyCode/ar-team-game">
              https://github.com/AlexHappyCode/ar-team-game
            </a>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-start bg-dark text-white">
          <div className="ms-2 text-start">
            <div className="fw-bold">IDE</div>Install Jetbrains Rider:
            <br></br>
            <a href="https://www.jetbrains.com/rider/download/">
              https://www.jetbrains.com/rider/download/
            </a>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default InstructionsPage

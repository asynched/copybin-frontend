import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Index() {
  return (
    <Container>
      <h1>COPYBIN</h1>
      <div className="link-container">
        <Link className="button-link" to="/new/file">
          Create new file
        </Link>
        <a className="button-link" href="https://github.com/Nxrth-x">
          See project
        </a>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--primary);

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  div.link-container {
    display: flex;
    gap: 1rem;

    a.button-link {
      padding: 0.25rem;

      width: 12rem;

      text-align: center;
      color: var(--background);
      text-decoration: none;

      background: var(--primary);
    }
  }
`

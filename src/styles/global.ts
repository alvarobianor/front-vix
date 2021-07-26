import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --background: rgba(240,242,245,1.0);

    --red: rgba(229,46,77,1.0);
    --green: rgba(51, 204, 149, 1);
    --blue: rgba(84,41,204,1.0);
    --blue-light: rgba(105,51,255,1.0);

    --text-title: rgba(54,63,95,1.0);
    --text-body: rgba(150,156,179,1.0);

    --shape: rgba(255,255,255,1.0);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 92.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;

  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{

    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left:0;

    display: flex;

    align-items: center;
    justify-content: center;

  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  
  .close-button-modal {
    width: 100%;
    position: absolute;
    right: 1.5rem;
    top: 5.5rem;
    left: auto;
    border: 0;
    background: transparent;
    transition: filter 1s;
    background-color: tomato;
    &:hover {
      filter: brightness(0.85);
    }

  }

`;

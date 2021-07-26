import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }

  p {
    font-size: 2.5rem;
    font-family: "Kaushan Script", cursive;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
  }

  button {
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

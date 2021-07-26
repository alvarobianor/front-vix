import styled from "styled-components";
export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;

  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    &.highlight-background {
      background: var(--green);
      color: rgba(255, 255, 255, 1);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`;

export const ContainerB = styled.div`
  display: flex;
  flex: 1;
  /* background-color: yellowgreen; */

  width: 30%;
  min-width: 25rem;
  margin-top: -5rem;

  flex-direction: row;
  align-items: center;
  p {
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  select {
    margin-left: 0.3rem;
    padding: 0.55rem 3rem;
    border-radius: 0.25rem;
    background: var(--green);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;

    transition: filter 0.5s;
  }

  button {
    width: 4.5rem;
    padding: 0 0.5rem;
    height: 2rem;
    background: var(--green);

    color: #fff;

    border-radius: 0.25rem;
    border: 0;

    font-size: 0.75rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

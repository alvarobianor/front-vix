import styled from "styled-components";
import Image from "next/image";
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
      .test {
        width: 3rem;
        height: 3rem;
        padding: 2rem;
      }
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

export const Imgg = styled(Image)`
  width: 0.5rem;
  height: 0.5rem;
`;

import styled ,{css}from "styled-components";

const Title = styled.h1`
color: #252c90;
    ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 4rem;
      font-weight: 550;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2.1rem;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
    `}
    
    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 1.8rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    `}

    ${(props) =>
    props.as === 'h5' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      color: brown;
    `}
    ${(props) =>
    props.as === 'h6' &&
  css`
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 3rem;
      font-weight: 800;
      text-align: center;
      color: #3e9e26;
    `}
    
  line-height: 1.4;
`

export default Title;
import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);
    backdrop-filter: blur(5px);
    z-index: 999;
`;

export const Dialog = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    max-height: calc(100% - 180px);
    max-width: 500px;
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 0 0 30px rgba(0,0,0,.25);
    border-radius: 8px;
`
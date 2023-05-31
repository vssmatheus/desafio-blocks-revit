import styled from "styled-components";

export const CatalogoSection = styled.section`
    h1{
        color: #777a81;
    }
`

export const Container = styled.div`
    position: relative;
`;

export const ChatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    padding: 3rem 0;
    
    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        color: #777a81;
        min-width: 45%;
        padding: 2rem;
    }
`;
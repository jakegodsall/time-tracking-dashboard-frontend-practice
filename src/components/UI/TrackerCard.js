import styled from 'styled-components';

const TrackerCard = styled.div`
    background-color: hsl(235, 46%, 20%);
    border-radius: 12px;
    margin: 0.8rem;
    margin-top: 3rem;
    padding: 1.2rem;
    width: 12rem;
    color: #fff;
    position: relative;
    cursor: pointer;

    & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & h3 {
        font-weight: 400;
        font-size: 1rem;
        margin: 0;
        margin-bottom: 0.5rem;
    }

    & h1 {
        font-weight: 300;
        margin: 0;
    }

    & p {
        color: hsl(236, 100%, 87%);
        font-size: 0.87rem;
    }

    &:hover {
        filter: brightness(1.3);
        z-index: 5;
    }
`;

export default TrackerCard;

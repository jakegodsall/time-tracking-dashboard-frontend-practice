import React from 'react';
import styled from 'styled-components';

import EllipsisIcon from '../../images/icon-ellipsis.svg';

import TrackerCard from '../UI/TrackerCard';

const BackgroundDiv = styled.div`
    height: 4rem;
    border-radius: 12px;
    width: 100%;
    background-color: red;
    position: absolute;
    top: -2.5rem;
    left: 0;
    z-index: -5;
`;

const TrackerItem = (props) => {
    console.log(props.styling.color);
    return (
        <TrackerCard>
            <BackgroundDiv></BackgroundDiv>
            <div>
                <h3>{props.title}</h3>
                <img src={EllipsisIcon} alt='' />
            </div>
            <h1>{props.timeframes.current}hrs</h1>
            <p>Last Week - {props.timeframes.previous}hrs</p>
        </TrackerCard>
    );
};

export default TrackerItem;

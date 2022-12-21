import React from 'react';
import styled from 'styled-components';

import TrackerItem from './TrackerItem';

const TrackerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

const TrackerList = (props) => {
    return (
        <TrackerGrid>
            {props.data.map((topic, idx) => {
                return <TrackerItem key={idx} data={topic}></TrackerItem>;
            })}
        </TrackerGrid>
    );
};

export default TrackerList;

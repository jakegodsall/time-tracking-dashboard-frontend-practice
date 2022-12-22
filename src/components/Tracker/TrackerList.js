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
                return (
                    <TrackerItem
                        styling={props.styling[topic.title.toLowerCase()]}
                        key={idx}
                        title={topic.title}
                        timeframes={topic.timeframes[props.selector]}
                    ></TrackerItem>
                );
            })}
        </TrackerGrid>
    );
};

export default TrackerList;

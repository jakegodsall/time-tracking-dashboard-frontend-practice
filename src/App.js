import React from 'react';

import Profile from './components/Profile/Profile';
import TrackerList from './components/Tracker/TrackerList';

const DATA = require('./data.json');

const App = () => {
    return (
        <React.Fragment>
            <Profile></Profile>
            <TrackerList data={DATA}></TrackerList>
        </React.Fragment>
    );
};

export default App;

import React from 'react';

import Profile from './components/Profile/Profile';
import TrackerList from './components/Tracker/TrackerList';

import './App.css';

const DATA = require('./data.json');

const STYLING = {
    work: {
        image: 'icon-work.svg',
        color: 'hsl(15, 100%, 70%)',
    },
    play: {
        image: 'icon-play.svg',
        color: 'hsl(195, 74%, 62%)',
    },
    study: {
        image: 'icon-study.svg',
        color: 'hsl(348, 100%, 68%)',
    },
    exercise: {
        image: 'icon-exercise.svg',
        color: 'hsl(145, 58%, 55%)',
    },
    social: {
        image: 'icon-social.svg',
        color: 'hsl(264, 64%, 52%)',
    },
    'self care': {
        image: 'icon-self-care.svg',
        color: 'hsl(43, 84%, 65%)',
    },
};

const DUMMY_SELECTOR = 'weekly';

const App = () => {
    return (
        <div className='container'>
            <Profile></Profile>
            <TrackerList data={DATA} selector={DUMMY_SELECTOR} styling={STYLING}></TrackerList>
        </div>
    );
};

export default App;

import React from "react";
import Project from '../Project';

const projects = [
    {
        id: '0',
        title: 'Team Profile Generator',
        image: '../image/teamprofile.jpg',
        repo: 'https://github.com/ckrum21/Team-Profile-Generator',
        live: 'https://github.com/ckrum21/Team-Profile-Generator/',
    },
    {
        id: '1',
        title: 'Note Taker',
        image: '../image/notetaker.jpg',
        repo: 'https://github.com/ckrum21/Note-Taker',
        live:'https://dry-atoll-42601.herokuapp.com/',
    },
    {
        id: '2',
        title: 'Weather Dashboard',
        image: '../image/weatherdashboard.jpg',
        repo: 'https://github.com/ckrum21/Weather-Dashboard',
        live:'https://github.com/ckrum21/Weather-Dashboard ',
    },
    {
        id: '3',
        title: 'WorkDay Scheduler',
        image: '../image/workday.jpg',
        repo: 'https://github.com/ckrum21/Work-Day-Scheduler',
        live:'https://github.com/ckrum21/Work-Day-Scheduler ',
    },
    {
        id: '4',
        title: 'Code Quiz',
        image: '../image/CodeQuiz.jpg',
        repo: 'https://github.com/ckrum21/Code-Quiz',
        live:'https://github.com/ckrum21/Code-Quiz',
    },
    {
        id: '5',
        title: 'Password Generator',
        image: '../image/password.jpg',
        repo: 'https://github.com/ckrum21/Password-Generator',
        live:'https://github.com/ckrum21/Password-Generator',
    }
]


function Portfolio() {
    return (
        <div>
            <h1>Portfolio Page</h1>
            <Project projects = {projects} />
        </div>
    );
}

export default Portfolio;
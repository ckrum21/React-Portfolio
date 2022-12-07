import React from "react";
import Project from '../Project';

const projects = {
    id: '0',
    title: 'Team Profile Generator',
    image: '../image/teamprofile.jpg',
    repo: 'https://github.com/ckrum21/Team-Profile-Generator',
    live: 'https://github.com/ckrum21/Team-Profile-Generator/',
}

function Portfolio() {
    return (
        <div>
            <h1>Portfolio Page</h1>
            <Project projects = {projects} />
        </div>
    );
}

export default Portfolio;
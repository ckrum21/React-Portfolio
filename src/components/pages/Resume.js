import React from "react";

export default function Resume() {
   return(
   <div>
    <p>My Resume</p>

    <a
    className="button is-primary"
        href={"/Resume.pdf"}
        target="_blank" rel="noreferrer"
    >
        <span className="icon">
            <i className="fas fa-download"></i>
        </span>
        <span>Download My Resume</span>
    </a>
    <p>List of Skills</p>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JSON</li>
        <li>React</li>
    </ul>

    </div>
    
       );
}

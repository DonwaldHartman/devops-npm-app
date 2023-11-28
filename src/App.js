import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import devops_logo from './assets/devops-shield.png';
import './App.css';
import particlesOptions from "./particles.json";
import 'reactjs-popup/dist/index.css';


function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
  
    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <div className='Container'>
            <header className="App-header">
                <p className='Hero'><img src={devops_logo} className="" alt="logo"/></p>
<h3> This is a sample project for Kubernetes Nodejs testing on DevOps projects</h3>
  <hr></hr>
  <h3>Hey Donwald ! If you are able to read this then this app is clearly working </h3>
            </header>
            </div>
        </div>
    );
}

export default App;

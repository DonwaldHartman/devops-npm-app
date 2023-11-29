import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import devops_logo from './assets/wizard.png';
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
  <h3>Hey Donwald! If you are able to read this then this app is clearly working </h3>
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28222%2C171%2C99%2C0%29&t=cobalt&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=function%2520App%28%29%2520%257B%250A%2520%2520%2520%2520const%2520particlesInit%2520%253D%2520useCallback%28main%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520loadFull%28main%29%253B%250A%2520%2520%2520%2520%257D%252C%2520%255B%255D%29%250A%2520%2520%250A%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522App%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CParticles%2520options%253D%257BparticlesOptions%257D%2520init%253D%257BparticlesInit%257D%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27Container%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cheader%2520className%253D%2522App-header%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%27Hero%27%253E%253Cimg%2520src%253D%257Bdevops_logo%257D%2520className%253D%2522%2522%2520alt%253D%2522logo%2522%252F%253E%253C%252Fp%253E%250A%253Ch3%253E%2520This%2520is%2520a%2520sample%2520project%2520for%2520Node%2520testing%2520on%2520DevOps%2520projects%253C%252Fh3%253E%250A%2520%2520%253Chr%253E%253C%252Fhr%253E%250A%2520%2520%253Ch3%253EIf%2520you%2520are%2520able%2520to%2520read%2520this%2520then%2520is%2520clearly%2520working%2520%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fheader%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%29%253B%250A%257Deturn%2520go%28f%252C%2520seed%252C%2520%255B%255D%29%250A%257D"
  style="width: 875px; height: 541px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

            </header>
            </div>
        </div>
    );
}

export default App;

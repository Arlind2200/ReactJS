import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('1/2');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setStep('2/2');
  };

  const handleBackButton = () => {
    setSelectedOption('');
    setStep('1/2');
  };

  const renderBody = () => {
    if (step === '1/2') {
      return (
        <div class="options-list">
          <ul>
            <li onClick={() => handleOptionSelect('Option 1')}>
              <img src="https://picsum.photos/35?random=1" />
              Anti Wrinkle treatment
              <svg fill="#c4c4c4" height="14px" width="14px" version="1.1" id="Capa_1"
               viewBox="0 0 47.255 47.255" stroke="#c4c4c4" stroke-width="2.64">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <g> <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z">
                  </path> 
                  </g> 
                  </g>
                  </svg>
            </li>
            <li onClick={() => handleOptionSelect('Option 2')}>
              <img src="https://picsum.photos/35?random=2" />
                Dermal Fillers
              <svg fill="#c4c4c4" height="14px" width="14px" version="1.1" id="Capa_1"
               viewBox="0 0 47.255 47.255" stroke="#c4c4c4" stroke-width="2.64">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <g> <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z">
                  </path> 
                  </g> 
                  </g>
                  </svg>
            </li>
            <li onClick={() => handleOptionSelect('Option 3')}>
              <img src="https://picsum.photos/35?random=3" />
              Secret RF
              <svg fill="#c4c4c4" height="14px" width="14px" version="1.1" id="Capa_1"
               viewBox="0 0 47.255 47.255" stroke="#c4c4c4" stroke-width="2.64">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <g> <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z">
                  </path> 
                  </g> 
                  </g>
                  </svg>
            </li>
            <li onClick={() => handleOptionSelect('Option 4')}>
              <img src="https://picsum.photos/35?random=4" />
              HarmonyCA
              <svg fill="#c4c4c4" height="14px" width="14px" version="1.1" id="Capa_1"
               viewBox="0 0 47.255 47.255" stroke="#c4c4c4" stroke-width="2.64">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <g> <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z">
                  </path> 
                  </g> 
                  </g>
                  </svg>
            </li>
            <li onClick={() => handleOptionSelect('Option 5')}>
              <img src="https://picsum.photos/35?random=5" />
              Facials
              <svg fill="#c4c4c4" height="14px" width="14px" version="1.1" id="Capa_1"
               viewBox="0 0 47.255 47.255" stroke="#c4c4c4" stroke-width="2.64">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <g> <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z">
                  </path> 
                  </g> 
                  </g>
                  </svg>
            </li>
          </ul>
        </div>
      );
    } else if (step === '2/2') {
      return (
        <div>
          <h2>Selected Option:</h2>
          <p>{selectedOption}</p>
          <button onClick={() => handleBackButton()}>Back</button>
        </div>      
      );
    }
  };

  return (
    <div>
      <header>
        <h1>Choose Service</h1>
        <p>Step {step}</p>
      </header>
      <main>
        {renderBody()}
      </main>
      <footer>
        Not sure about consulation type? Please call <a href='tel:02037959063'>0203 7959063</a>
      </footer>
    </div>
  );
}

export default App;

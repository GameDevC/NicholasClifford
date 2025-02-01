import './App.css';
import React from "react";
import { Link } from "react-router-dom";
//import BackgroundDecoration from './BackgroundDecorations';

function App() {
  return (
    <div>
    
    <div className = "BigBackground">
    
    <div className = "First-Layer-Setup">
      <div className = "Header-Area">
        <div className = "Header-Image"></div>
      </div>
      <div className = "Nav-Bar-Background">
        <div className = "Nav-Bar-Button-padding-top">

        </div>
        <div className = "Nav-Bar-Button-Organizer">
          <div className = "Nav-Bar-Button-Left-Padding">
            
          </div>
          <div className = "Nav-Bar-Button">
            <Link to="/" className = "Nav-Bar-Button-Text">
              <button className = "Button-Unformatting">
                <div>
                  Home
                </div>
              </button>
            </Link>
          </div>
          <div className = "Nav-Bar-Button-Spacing">

          </div>
          <div className = "Nav-Bar-Button">
            <Link to="/bio" className = "Nav-Bar-Button-Text">
              <button className = "Button-Unformatting">
                Bio
              </button>
            </Link>
          </div>
          <div className = "Nav-Bar-Button-Spacing">
            
          </div>
          <div className = "Nav-Bar-Button">
            <Link to="/projects" className = "Nav-Bar-Button-Text">
              <button className = "Button-Unformatting">
                Projects
              </button>
            </Link>
          </div>
          <div className = "Nav-Bar-Button-Spacing">
            
          </div>
          <div className = "Nav-Bar-Button">
            <Link to="/experience" className = "Nav-Bar-Button-Text">
              <button className = "Button-Unformatting">
                Experience
              </button>
            </Link>
          </div>
          <div className = "Nav-Bar-Button-Spacing">
            
          </div>
          <div className = "Nav-Bar-Button">
            <Link to="/contact" className = "Nav-Bar-Button-Text">
              <button className = "Button-Unformatting">
                Contact
              </button>
            </Link>
          </div>
        </div>

      </div>
      <div className = "Paragraph-Spacer">

      </div>
      <div className = "Paragraph-Block">
        <div className = "Paragraph-Title-Row">
          <div className = "Paragraph-Title-Left-Spacer">

          </div>
          <div className = "Paragraph-Title">
            Website Over View
          </div>
        </div>
        <div className = "Paragraph-Flex" style={{ position: 'relative' }}>
          <div className = "Paragraph-Background">
            <div className = "Paragraph-Text-Holder">
              <div className = "Paragraph-Text">
                Hello and welcome to my website! My name is Nicholas Clifford, a Computer Scientist by training and a 
                lover of anything engineering. I made this site to act as a sort of portfolio to describe further
                about who i am, what my goals are, and previous projects I have done in the past. I'm always open to talk
                further about future projects or endevors so feel free to contact me within the resources of the contact page. 
                Thank you for visiting and have a wonderful day!
              </div>
            </div>
          </div>
          <div className = "Picture-Left-Aligned-Spacer">
            <div className = "SemiProfessionalTechSelfie">
              <div className = "Image-Holder" >
              
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    
    
    </div>
    
    </div>
  );
}

export default App;

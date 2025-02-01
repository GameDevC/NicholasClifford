import './App.css';
import React from "react";
import { Link } from "react-router-dom";

function Bio() {
    return (
        
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
          
          <div className = "Semi-Paragraph-Holder">
            <div className = "Semi-Paragraph-Background-Spacer">

            </div>
            <div className = "Semi-Paragraph-Background">
                <div className = "Semi-Paragraph-Text-Holer">
                    <div className = "Semi-Paragraph-Text-Buffer-Top">

                    </div>
                    <div className= "Semi-Paragraph-Text">
                        This is the Bio page, which serves as a brief introduction for who I am as a person, going through my personality and how I am mentally compared to listing
                        out projects. I feel like these pages are essential if you are going to work with someone because you have to be able to trust who you work with, and I 
                        want you to be able to trust me with my work and capabilities.
                    </div>
                </div>
            </div>
          </div>

          <div className = "Paragraph-Block">
            <div className = "Paragraph-Title-Row">
              <div className = "Paragraph-Title-Left-Spacer">
              </div>
              <div className = "Paragraph-Title">
                About Me
              </div>
            </div>
            <div className = "Paragraph-Flex" style={{ position: 'relative' }}>
          <div className = "Paragraph-Background">
            <div className = "Paragraph-Text-Holder">
              <div className = "Paragraph-Text">
                My name is Nicholas Clifford, Californian born and have my Computer Science and Engineering degree from University of California, Merced. 
                While my degree is in Computer Science, I love all aspects of engineering and science. Since I was in elementary school I have been programming/designing
                video games and building simple robots that rely more on physics than robotics. However I love talking and being around people who talk about any of the 
                sciences like chemistry or biology, as well as am a huge history buff. Much of what I do is either out of practicality or for fun, which has lead me to own
                multiple personal servers and computers, while also building multiple robotics that help with smaller task around my home. 
              </div>
            </div>
          </div>
          <div className = "Picture-Left-Aligned-Spacer">
            <div className = "ProfessionalSelfie">
              <div className = "Image-Holder" >
              </div>
            </div>
          </div>
          </div>
          </div>

          
          


          <div className = "Paragraph-Block">
            <div className = "Paragraph-Title-Row">
              <div className = "Paragraph-Title-Left-Spacer">
              </div>
              <div className = "Paragraph-Title">
                My Goals
              </div>
            </div>
            <div className = "Paragraph-Flex" style={{ position: 'relative' }}>
          <div className = "Paragraph-Background">
            <div className = "Paragraph-Text-Holder">
              <div className = "Paragraph-Text">
                Most of my immidiate goals are to simply be able to get to the point where I can make a living off of what I like to do. While I love programming, designing, and
                leading teams to make extremely complex systems, I know I can always get to a better place of where I want to work. My over arching goal is to build something that can
                move the world. I don't want to sit back and let the world pass me by when I know that I can do something about it, expecially when theres so much that can be
                improved upon in the world. I am very persistant with trying to make the world a better place, and when things get tough I remember a quote that reminds me "good is hard,
                and bad is always easy."
              </div>
            </div>
          </div>
          <div className = "Picture-Left-Aligned-Spacer">
            <div className = "AmbitiousSelfie">
              <div className = "Image-Holder" >
              </div>
            </div>
          </div>
          </div>
          </div>
          
        </div>
      );
}

export default Bio;

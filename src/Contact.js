import './App.css';
import React from "react";
import { Link } from "react-router-dom";

function Contact() {
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
            <Link to="/NicholasClifford/" className = "Nav-Bar-Button-Text">
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
            <Link to="/NicholasClifford/bio" className = "Nav-Bar-Button-Text">
              <button className = "Button-Unformatting">
                Bio
              </button>
            </Link>
          </div>
          <div className = "Nav-Bar-Button-Spacing">
            
          </div>
          <div className = "Nav-Bar-Button">
            <Link to="/NicholasClifford/projects" className = "Nav-Bar-Button-Text">
              <button className = "Button-Unformatting">
                Projects
              </button>
            </Link>
          </div>
          <div className = "Nav-Bar-Button-Spacing">
            
          </div>
          <div className = "Nav-Bar-Button">
            <Link to="/NicholasClifford/experience" className = "Nav-Bar-Button-Text">
              <button className = "Button-Unformatting">
                Experience
              </button>
            </Link>
          </div>
          <div className = "Nav-Bar-Button-Spacing">
            
          </div>
          <div className = "Nav-Bar-Button">
            <Link to="/NicholasClifford/contact" className = "Nav-Bar-Button-Text">
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
                        Below you'll find my contact information. I'm always looking to work with new people and work on new projects so please
                        don't hesitate to reach out! I try to check my messages regularly, but of course I'm only one person working on several projects
                        at a time as well as participating in multiple events at a time, so messages may get back logged during certain times. But I can 
                        guarentee that I'll get back to you as soon as I can! 
                    </div>
                </div>
            </div>
          </div>
          

          <div className = "Socials-Holder">
            <div className = "Socials-Flex-Direction">

                <div className = "Socials-Spacers-Left">

                </div>


                <div className = "Socials-Background-Image">
                    <div className = "Socials-Button" onClick={() => window.location.href = 'https://ethernickdev.itch.io/'}>
                        <div className = "Section-Button-Text-Holder">
                            <div className = "Section-Button-Text">
                                Itch.IO
                            </div>
                        </div>
                    </div>
                    <div className = "Socials-Text-Holder">
                        <div className = "Socials-Text-Top-Spacer">

                        </div>
                        <div className = "Section-Text-Holder-Specfic">
                            <div className = "Socials-Text">
                                Not much to put on here, but I check it every now and then for game jams.
                            </div>
                        </div>
                        
                    </div>
                    <div className = "Socials-Image-Holder">
                        <div className = "itchcIO">

                        </div>
                    </div>
                </div>
                <div className = "Socials-Spacers">
                </div>


                <div className = "Socials-Background-Image">
                    <div className = "Socials-Button" onClick={() => window.location.href = 'https://www.twitch.tv/ethernick_'}>
                        <div className = "Section-Button-Text-Holder">
                            <div className = "Section-Button-Text">
                                Twitch
                            </div>
                        </div>
                    </div>
                    <div className = "Socials-Text-Holder">
                        <div className = "Socials-Text-Top-Spacer">

                        </div>
                        <div className = "Section-Text-Holder-Specfic">
                            <div className = "Socials-Text">
                                The Best Way To See My Personality, and Sometimes Work. Most Immidiate Response If I Am Live At The Moment
                            </div>
                        </div>
                        
                    </div>
                    <div className = "Socials-Image-Holder">
                        <div className = "TwitchLogo">

                        </div>
                    </div>
                </div>
                <div className = "Socials-Spacers">
                </div>



                <div className = "Socials-Background-Image">
                    <div className = "Socials-Button" onClick={() => window.location.href = 'https://www.linkedin.com/in/nicholas-clifford-746933170/'}>
                        <div className = "Section-Button-Text-Holder">
                            <div className = "Section-Button-Text">
                                LinkedIn
                            </div>
                        </div>
                    </div>
                    <div className = "Socials-Text-Holder">
                        <div className = "Socials-Text-Top-Spacer">

                        </div>
                        <div className = "Section-Text-Holder-Specfic">
                            <div className = "Socials-Text">
                                LinkedIn is typically only for the most professional and work enviornment conversations. 
                            </div>
                        </div>
                        
                    </div>
                    <div className = "Socials-Image-Holder">
                        <div className = "LinkedInLogo">

                        </div>
                    </div>
                </div>
                <div className = "Socials-Spacers">
                </div>



                <div className = "Socials-Background-Image">
                    <div className = "Socials-Button" onClick={() => window.location.href = ''}>
                        <div className = "Section-Button-Text-Holder">
                            <div className = "Section-Button-Text">
                                Gmail
                            </div>
                        </div>
                    </div>
                    <div className = "Socials-Text-Holder">
                        <div className = "Socials-Text-Top-Spacer">

                        </div>
                        <div className = "Section-Text-Holder-Specfic">
                            <div className = "Socials-Text">
                                I try to get to emails as fast as possible, but feel free to send multiple messages if urgent to
                                Nacdeveloping@gmail.com
                            </div>
                        </div>
                        
                    </div>
                    <div className = "Socials-Image-Holder">
                        <div className = "GmailLogo">

                        </div>
                    </div>
                </div>
                <div className = "Socials-Spacers">
                </div>


            </div>
          </div>

          
        </div>
      );
}

export default Contact;

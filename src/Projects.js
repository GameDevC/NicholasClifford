import './App.css';
import React from "react";
import { Link } from "react-router-dom";

function Projects() {
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
                        Here I list out all the personal projects that I have done that aren't in the profesisonal field. I chose to list them out since 
                        I've done so many different projects over the years, and many of them have very different skills involved, such as Game Development, Robotics, and 
                        Neural Networks. This page will likely be updated in batches of projects, and will likely not cover smaller projects, as it would require weekly updates at
                        minimum if I listed out every smaller program I made. I hope this page shows not only some of the skills ive learned throughout my time, but also
                        my ambition to work on and learn about new and complex topics.
                    </div>
                </div>
            </div>
          </div>
     
            <div className = "Section-Unspacer"></div>


          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Live Stream Developer
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "155%"}}>
                                One of my biggest personal hobbies over the past few years was streaming, and to help with this one of my goals was to make a large enough and 
                                complex enough display that would interact with the stream. I develope a program in Unity that can display any video, image, or even special effect 
                                upon activation of command which from me or from a chat member. It also served aesthetic purposes, like displaying chat messages and creating custom avatars
                                for chat members. This should be stated that its more than one program that this works with, since it works with my custom server that sorts through all incoming
                                logic and holds a personal database for streams, connects to a specific command for managing admin commands, and connects to outside custom programs which allow
                                me to easily use and maintain the program from other programs such as a dashboard or a custom videogame. This was a massive undertaking and I can confidently say 
                                if there was anything you can come up with to add to it, I would be able to easily integrate it into the system. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "TwitchStreamingUI">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>


          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Unreal Engine Starwars Scene
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "190%"}}>
                                This project was a fun side project I did in order to get a handle on the Unreal Engine game engine. The scene was made on a lower end PC at the time, 
                                so graphically its not as well is it could be. But it did give me experience in modeling the characters, animating the scenes, designing camera shots, 
                                and creating assets that would for the world such as materials and special effects. Overall this was a begginers project that went from start to finish on
                                practicing all necessary skills to make a professional scene for both the film industry and gaming industry. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "StarwarsImage">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>


          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Robotics Hack Pack
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "190%"}}>
                                This is a collection of robotics that I have been completing on a regular basis designed by Mark Rober, an ex NASA engineer and current content creator. 
                                These packs give a basic premise and design for robotics, and allow you to build and modify them. This provides a firm basis centered around a certain topic,
                                like IR following, and allows flexible modification while providing manufactured parts that otherwise wouldn't be commercially available. These packs allow
                                the user to understand a large variety of topics in robotics, programming, electrical engineering, modeling/3d printing, etc. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "HackPackImage">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>


          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Unreal Engine Basic Game Demo
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "185%"}}>
                                This was a project that I chose to take up because I wanted to get familiar with the game development side of unreal engine. Everything in the game is
                                made by me, including the level design, level modeling, game mechanics, etc. The only things I did not make were the main menu image, and the music which 
                                come from Metroid and Paper Mario: The Thousand Year Door Respectively. This helped me understand the more mechanical side of game development, and even
                                though it is a less serious project, I feel confident in being able to make a fully fledge and fun video game experience in any game genera after completing 
                                it. The demo for this game can also be found on my Itch.io page. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "UnrealEngineDemoImage">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>


          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Machine Learning Friend Predictor
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "210%"}}>
                                This was a project I made on my off time to prove definitively who was my friend and who wasn't. It used a supervised machine learning
                                algorithm with people's personalities categorised as numbers then cleaned to fit in a Tensor format. The data it was trained on was the personalities
                                of celebrities at random, and whether i would be friends with them or not. Then i would use the data from my friends, to have the outcome of yes 
                                or no if I would likely be friends with them. This was made as a joke project, but still gave insight on how Machine Learning could be used. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "FriendNeuralNetwork">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Image Predictor Machine Learning
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                A simple machine learning program that would analyze images based on pixel color and pattern recognition, which would then be able to 
                                determine what is inside the picture.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "ProjectImageSample">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Sony Vegas Macro Automator
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                A collection of scripts that I've designed in order to speed up common Sony Vegas editing practices including track movements, frame movements, special effects,
                                music addition, clipping, and dynamic expanding of the project. This allowed me to add the most common edits i needed to make in each scene with one click,
                                compared to spending around 15 minutes per scene adding every edit. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "VegasScripts">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Twitch Plays Program
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                A simple Twitch plays program that got me introduced to how to connect servers to Twitch APIs. This provided a simple function of actively reading
                                a live stream chat, interpreting the context of the message, and executing commands into my personal computer. This allowed for functionality of
                                what is commonly known as "Twitch Plays", which allows users who are watching a Twitch live stream to enter text and have it execute video game commands within
                                the stream they are watching. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "TwitchPlays">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>


          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        AI Me Assistant / Singer
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                This was a AI assistant of myself that I made. By using a simple OpenAI model as the base, and then adding a text to speech utalizing a model made off my voice 
                                I was able to create a virtual assistant of myself. Then I added additional code, as well as a method to train a model off of my voice as well as a vocalist voice, 
                                in order to make the AI assistant sing any song I gave it. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "AISingingMe">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Escape Room Program
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                This was a quick 1 week program I made for my friend where I allowed him to play through my eyes, using a head mounted camera, and created an Escape
                                Room around me where he would need to lead me to freedom. Part of the escape room included this program, which had its own puzzles in its own write, but
                                also required and taught how to use python and linux terminal commands in order to escape. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "EscapeRoomCode">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        House Price Predictor
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                A simple Machine Learning program made to analyze house prices in the area of any given home, and based off the price and specifications of the home, 
                                would be able to pridict the price of a house if it was not given. This is a neiche program, but useful for things like if Zillow doesn't havea specific
                                pricing for a house. With minor tweaks you could also change it to find other peices of data such as squarefootage of homes. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "HousePricePredictor">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Motion Capture To Controller
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                A fun program I made that allowed me to play video games using motion tracking. The only hardware used was a camera, which would use openCV to read the inputs
                                and then run through a few algorithms in order to determine my movements and convert them into commands for a game. Most notibly i played "Elden Ring" With
                                this program, so to swing a sword i would need to swing a sword IRL, to jump i would need to jump IRL, and so on. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "MotionCaptureThumbnail">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        OmniC Website
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                This was as small website I made for my friend group. This was a private site so it never launched to the public, but was used for very small and simple
                                documentation sharing. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "OmniC">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Payment System Square Space Full Stack
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                A test site I created in order to fully set up and demo payment systems using squarespace. The code for this site would go on to be use in 
                                other sites such as the Tech Highway site. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "SquareSpace">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Stable Diffusion Models
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                A collection of Stable Diffusion Models I created in order to determine how AI could learn from any given data set. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "StableDiffusion">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Spam Email Detector ML
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                A simple Machine Learning program that utalized supervised learning in order to determine if a email was spam or not. Often not needed by the majority
                                email systems, but a useful program to make in order to understand how Machine Learning and data formatting performs. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "SpamEmails">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>


          <div className = "Section-Unspacer"></div>

          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        Portfolio Website
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                This is where you are now! I built this site so I can have a more solid portfolio that I can organize and better display certain projects 
                                rather than just having a simple google docs of a list. This website is planned to be updated indefinetly, adding projects and updating the 
                                visuals as time goes on. I may also add some easter eggs for those who have a curious mind. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "WebsiteImage">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>


          <div className = "Section-Holder">
            <div className = "Section-Background-Spacer">
            </div>
            <div className = "Section-Flex">
                <div className = "Section-Unflexer">
                    <div className = "Section-Title">
                        All In One Home Server
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                This is a server that I obtained and reprogrammed to serve as my all in one home server. The original version is a NAS, but after putting on a new 
                                OS I can keep its base functionality of a NAS, using mirrored drives, as well as use it for other low computational high storage functionality. Such as
                                storing vintage video games, streaming movies directly, upholding basic outgoing servers that need to be ran indefinetly. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "NasServer">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
      );
}

export default Projects;

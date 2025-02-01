import './App.css';
import React from "react";
import { Link } from "react-router-dom";

function Experience() {
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
                        This is where I list my experiences in professional and competative fields. Professional relating mainly to working enviornments, but I also wanted to list
                        some other experiences I've delt with such as various different jams, competions, and tournaments i've participated in since they have arguably played
                        a larger part in developing my skills than work environements have in the past. 
                    </div>
                </div>
            </div>
          </div>


          <div className = "Paragraph-Block">
            <div className = "Paragraph-Title-Row">
              <div className = "Paragraph-Title-Left-Spacer">
              </div>
              <div className = "Paragraph-Title">
                Professional Work Experience
              </div>
            </div>
            <div className = "Paragraph-Flex" style={{ position: 'relative' }}>
          <div className = "Paragraph-Background">
            <div className = "Paragraph-Text-Holder">
              <div className = "Paragraph-Text">
                Under this category I list everything that I've done in a traditional professional work environment. These are your standard jobs when I work for or otherwise was 
                employed by a company at the time. This won't cover everything I have done in the job, but will serve as an overall cover for what I have done. 
              </div>
            </div>
          </div>
          <div className = "Picture-Left-Aligned-Spacer">
            <div className = "WorkplaceSelfie">
              <div className = "Image-Holder" >
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
                        OMRON Robotic Calibration System
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                A Project where I took the role as Project Manager. This was a heavily involved Mechanical Engineering centered project where we
                                developed and produced a fully fuctional static calibration system for OMRON's four axis precision robots. This involved designing, 
                                Modeling, manufacturing of the product, as well as all calculations for price and predicted profits for longevity of the product which
                                according to calculations would provide ample profitability. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "ScaraRobot">
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
                        OMRON Dynamic Maintenance Prediction System
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "195%"}}>
                                This was a project where I took the role of Project Manager, leading a team to develope a fully functional web application that
                                could be accessed over a network and to connect to a hub of robots. This web application would then both actively look for run time, as 
                                well as use machine learning to analyze each robot's specfic part's deviation to catagorize when the robot would need routine maintenance, 
                                urgent maintenance, and for the machine to be shut off. The primary purpose of the application was to cut down on both downtime of the robotics
                                and provide a larger update to safety so workers don't preform around faulty heavy machinery. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "ScaraMaintenance">
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
                        Jakks Pacific Operations
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                This was my first internships where I worked in the operations branch in Jakks pacific. Here I was provided with maintaining 
                                scheduling for products to be delivered and where they should be delivered manually, as well as develop smaller simple scripts that
                                work mutually with existing programs such as excel to automate and overwatch reports. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "JakksPacific">
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
                        Sunpoint Public Adjusters Backroom Operator
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "185%"}}>
                                Here I took on the duties of a operator in the backroom of Sunpoint Public Adjusters. This involved, often times solely, the duties
                                of finding and logging every disaster within the Western United States; California, Oregon, Washington, Nevada, Arizona, Montana, Idaho, New Mexico,
                                Colorado, and extending to Texas. As well as logging these disasters, I would need to filter them based on specific rapidly changing criteria, creating reports
                                on them, and dispatching them to other branches of our companies. These reports would require the use of personally made programs and off the shelf programs 
                                to make and find multiple layers of information upon a person, their family, and their relationships. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "Sunpoint">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Paragraph-Block">
            <div className = "Paragraph-Title-Row">
              <div className = "Paragraph-Title-Left-Spacer">
              </div>
              <div className = "Paragraph-Title">
                Semi-Professional Work Experience
              </div>
            </div>
            <div className = "Paragraph-Flex" style={{ position: 'relative' }}>
          <div className = "Paragraph-Background">
            <div className = "Paragraph-Text-Holder">
              <div className = "Paragraph-Text">
                This is a collection of works I have done in a work environment where I wasn't working under any specific employer, but was doing work in a professional standing. 
                These often had their own paperwork for legal forms to fill out and would involve being paid an hourly wage or per project completed. Some of these were self
                employed projects where I managed work for clients, others were jobs such as bounties on various job boards.
              </div>
            </div>
          </div>
          <div className = "Picture-Left-Aligned-Spacer">
            <div className = "WhiteboardSelfie">
              <div className = "Image-Holder" >
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
                        Tech Highway
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "200%"}}>
                                This was my first big website I made. I founded the group Tech Highway to hopefully be a gateway for people to get into robotics. The
                                project eventually fell through due to a lack of funds to be able to upkeep it enough for it to take off. However during that time there
                                were several skills to be gained, such as team formation and leadership, full stack developing using react and flask, ecommerce development, 
                                and largely the most complex was a full development and implementation of a neural network, which led me to make more Machine Learning personality
                                projects in the future. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "TechHighway">
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
                        Hack The Box Academy and Labs
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                Hack the box is where I did most of my Purple Teaming experise, purple teaming being a mix of red teaming and blue teaming. With this I was able to learn and improve
                                upon both penetration testing of networks and machines, as well as develope techniques to prevent against individuals trying to hack into my system. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "HackTheBox">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className = "Section-Unspacer"></div>

          <div className = "Paragraph-Block">
            <div className = "Paragraph-Title-Row">
              <div className = "Paragraph-Title-Left-Spacer">
              </div>
              <div className = "Paragraph-Title">
                Events
              </div>
            </div>
            <div className = "Paragraph-Flex" style={{ position: 'relative' }}>
          <div className = "Paragraph-Background">
            <div className = "Paragraph-Text-Holder">
              <div className = "Paragraph-Text">
                These are various professionally hosted events that I have participated in. These events are ones I have solely participated in, and not just visited, since 
                realistically anybody can visit an event but it takes a certain amount of commitment to actually participate in it. Notice that subject matter of these events are
                also varying, as most revolve around programming or computer science, however I am adding all kind of event experience I have. 
              </div>
            </div>
          </div>
          <div className = "Picture-Left-Aligned-Spacer">
            <div className = "EventSelfie">
              <div className = "Image-Holder" >
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
                        Game Jam Pirate Software
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "160%"}}>
                                This was a event I joined in 2024 as a team of 2. In this game jam we made a simple game in a week that had three different phases to a day sequence. 
                                The first sequence being a collection phase, where the play runs through the over world talking and gaining information about a story and gathering ingredients 
                                to make powerful spells. They then would get to the crafting phase, where they would use knowledge they gained and resources gained to make spells and set them
                                to their liking for a future battle. The final phase of the day would be a tournament fight that links to the overal story. This took the majority of my time to make
                                as I made a custom AI that took into consideration things like player position, hp, and random variance to determine what the next course of action the npc should take. 
                                This resulted in a suprisingly fun and challenging fight that the player would undergo, and proved as a fun experience for my first time developing this specific type of 
                                algorithm following fighter. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "MagistersDream">
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
                        Game Jam Object Oriented Programming
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "180%"}}>
                                Here I was put as the head of a team who knew nothing about game development. In this project I was put as the defacto team leader, which one of our teammates immidately
                                dropped out and the other was delegated to making art for the game. In this jam I used A C centered programing language not suited for game development, and used its image
                                system to portray the assets in the game. From there I created a game engine and physics engine inside the program in order to give logic to the game, as well as made an 
                                animation controller to fully demonstrate the full capabilities of the game. Here it gave us one of the highest scores in the jam and served as a test to prove that I KNEW 
                                How complex concepts in physics simulations work. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "ObjectOrientedGame">
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
                        Pulse Jet Engine Project
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                This is one of the first project I joined out of highschool, where I worked on a team inside an AIAA group to determine the effectiveness 
                                of alternative jet engines, such as a pulse engine, inside high debris situations. This included working on the pulse jet itself as we built
                                smaller but functional versions of said engine. We also used micro controllers, typically using Arduinos, to monitor specific attributes 
                                and analyze the results in a custom flow simulation inside of SolidWorks. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "PulseJet">
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
                        Solar Car Racing Competition
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                This event I attended as a host of the competition, serving under the Solar Energy Association. Here we spent a few weeks teaching kids up to highschool age,
                                on how to build and power their solar vehicles. From there we hosted a competition on the UCMerced campus to determine who could build the best and fastest
                                Solar Powered Vehicle. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "SolarEnergyAssociation">
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
                        Apex Legends BLGS #1
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "165%"}}>
                                This was a competition I participated in that was in the competative gaming field. Here I participated in a team called "Death Deified", where I acted as both
                                a captain and a Co-Captain. This event spanned over a few months where we would train to be the best we could in one of the most competative games on the market
                                and compete against high level players. During which we challenged in 4 out of 4 of the tournament slots, where we faced off against many top 20 teams in the world
                                including team "Falcons" which was the number one top ranked team in the world at the time, and qualified to pass the round we faced off against them. While this doesn't 
                                provide too much in terms of engineering skills, it shows my commitment to practice and regularly get better at something I enjoy over a long period of time, enough so
                                to be on a competative level with the literal best in the world in a game that has millions of players. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "DeathDefiant">
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
                        Gatcha Professor 
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "215%"}}>
                                This was an appliction that two of my friends and I made as a project in university. Here it was a small gag project but it 
                                emphasized the utility of building an application on multiple size screen platforms, such as mobile or desktop, to make a simple 
                                gatcha game focused around professors around the school. While it may not have been the most technical project, it was still very
                                much appreciated by the professors we showed it to, one of which had us demonstrate for his current class of a few hundred students. 
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
                        Machine Programming Simulator
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                This project was a task given to me to replicate a Machine Programming environment, such as MARS, inside of a high level language. I made
                                this project in Python and C, using the commond "Machine Programming Cheat Sheet" as a template in order to make the project. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "MARS">
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
                        Twitch Database Analyzer
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text" style={{fontSize: "185%"}}>
                                This was A small Unity project I made with a friend. Here it used Unity as a display in order to show information requested of it, and sort through 
                                information within given "plug in" datasheets. By taking publicly available information, we could plug it into the program, it would parse and analyze it
                                into our database and upon request would give the user the best outcome for their suggestion. Such as if a user wanted to find the top categories on twitch
                                with the most users and least amount of streamers on Fridays between 5 and 7 pm. The availability to become as specific as necessary makes the project useful
                                for individuals who are very involved in the specific neiches of Twitch. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "TwitchDatabaseAnalyser">
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
                        Hack Merced
                    </div>
                    <div className = "Section-Background">
                        <div className = "Section-Text-Formatter">
                            <div className = "Section-Text-Top-Padding"></div>
                            <div className = "Section-Text">
                                This was the first Hackathon that I participated in, lasting about two days but spawning the birth of a team called "Project Insomnia". The team 
                                was a problem solving computer engineering team and in the Hackathon we developed a fitness program that would provide basic health tracking functionality
                                as well as promote positive mentality to help the user persue their actions in developing healthier habits. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section-Image-Spacer">
                </div> 
                <div className = "Section-Image-Holder">
                    <div className = "HackMerced">
                        <div className = "Section-Image-Frame">
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
      );
}

export default Experience;

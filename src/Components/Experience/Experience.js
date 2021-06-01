import React from 'react';
import "./Experience.css";
import Ability from "./Ability";

// TODO: There's no bootstrap so need to use flexbox

const Experience = ({ newRoute }) => {
    return (
        <div id="backgroundContainer">
            <div id="innerBackgroundContainer">
                <div className="experienceContainer">
                    <div className="abilityNameContainer">
                        <h2>Languages</h2>
                    </div>
                    <div className="break-row"></div>
                    <Ability abilityName="English (Native)" score="5"/>
                    <Ability abilityName="日本語 (Japanese) (~JLPT5)" score="2"/>
                    <Ability abilityName="Indonesian (Beginner)" score="1"/>
                </div>{/*  end of row */}

                <div className="experienceContainer">
                    <div className="abilityNameContainer">
                        <h2>Operating Systems</h2>
                    </div>
                    <div className="break-row"></div>
                    <Ability abilityName="Windows" score="5" years="20+"/>
                    <Ability abilityName="Ubuntu" score="3" years="10+"/>
                    <Ability abilityName="Windows Server" score="4" years="10+"/>
                    <Ability abilityName="Arch Linux" score="2" years="2"/>
                    <Ability abilityName="OpenVMS" score="3" years="10+"/>
                    <Ability abilityName="Red Hat" score="2" years="2"/>
                    <Ability abilityName="Mac" score="1" years="1"/>
                </div>{/*  end of row */}

                <div className="experienceContainer">
                    <div className="abilityNameContainer">
                        <h2>Programming/Scripting</h2>
                    </div>
                    <div className="break-row"></div>
                    <Ability abilityName="PHP" score="5" years="20+"/>
                    <Ability abilityName="Node.JS" score="2" years="2"/>
                    <Ability abilityName="ASP.NET" score="4" years="10+"/>
                    <Ability abilityName="Oracle PL/SQL" score="5" years="10+"/>
                    <Ability abilityName="HTML" score="5" years="20+"/>
                    <Ability abilityName="XML" score="5" years="5"/>
                    <Ability abilityName="JavaScript" score="4" years="20+"/>
                    <Ability abilityName="JSX" score="2" years="2"/>
                    <Ability abilityName="jQuery" score="4" years="10+"/>
                    <Ability abilityName="Java" score="3" years="5"/>
                    <Ability abilityName="JSON" score="5" years="5+"/>
                    <Ability abilityName="Visual Basic .NET" score="4" years="10+"/>
                    <Ability abilityName="C#" score="4" years="4"/>
                    <Ability abilityName="Visual Basic 6" score="3" years="2"/>
                    <Ability abilityName="CSS" score="4" years="20+"/>
                    <Ability abilityName="Fortran 70/90/95" score="3" years="2"/>
                    <Ability abilityName="C/C++" score="3" years="5"/>
                    <Ability abilityName="Python" score="2" years="1"/>
                    <Ability abilityName="Ruby" score="1" years="1"/>
                </div>{/*  end of row */}

                <div className="experienceContainer">
                    <div className="abilityNameContainer">
                        <h2>Databases</h2>
                    </div>
                    <div className="break-row"></div>
                    <Ability abilityName="Oracle" score="5" years="10+"/>
                    <Ability abilityName="MySQL" score="4" years="2"/>
                    <Ability abilityName="SQL Server" score="4" years="4"/>
                    <Ability abilityName="PostgreSQL" score="3" years="1"/>
                    <Ability abilityName="MongDB" score="1" years="1"/>
                    <Ability abilityName="ParseAPI" score="1" years="1"/>
                </div>{/*  end of row */}

                <div className="experienceContainer">
                    <div className="abilityNameContainer">
                        <h2>Skills</h2>
                    </div>
                    <div className="break-row"></div>
                    <Ability abilityName="Bootstrap Framework" score="5"/>
                    <Ability abilityName="WordPress" score="4"/>
                    <Ability abilityName="ReactJS" score="2"/>
                    <Ability abilityName="SASS/SCSS" score="2"/>
                    <Ability abilityName="MVC Pattern" score="3"/>
                    <Ability abilityName="Command Line Interface (CLI)" score="5"/>
                    <Ability abilityName="UML & Case Diagrams" score="4"/>
                </div>{/*  end of row */}

                <div className="experienceContainer">
                    <div className="abilityNameContainer">
                        <h2>Tools</h2>
                    </div>
                    <div className="break-row"></div>
                    <Ability abilityName="Visual Studio Code" score="5" years="10+"/>
                    <Ability abilityName="Sublime Text 3" score="4" years="2"/>
                    <Ability abilityName="Visual Studio" score="4" years="10+"/>
                    <Ability abilityName="Notepad++" score="5" years="10"/>
                    <Ability abilityName="MobaXterm" score="4" years="2"/>
                    <Ability abilityName="PuTTY" score="5" years="10+"/>
                    <Ability abilityName="Git" score="4" years="6+"/>
                    <Ability abilityName="Subversion" score="4" years="10+"/>
                    <Ability abilityName="SQL Developer" score="5" years="10+"/>
                    <Ability abilityName="Unity3D" score="2" years="2"/>
                    <Ability abilityName="MonoDevelop" score="3" years="2" />
                    <Ability abilityName="Firefox" score="1" years="10+"/>
                    <Ability abilityName="Internet Explorer" score="1" years="15+"/>
                    <Ability abilityName="Webkit Browsers" score="1" years="8+"/>
                    <Ability abilityName="TOAD Data modeler" score="2" years="1"/>
                    <Ability abilityName="TOAD for Oracle" score="3" years="3"/>
                    <Ability abilityName="RTMC Pro" score="5" years="1"/>
                    <Ability abilityName="Campbell Loggernet" score="5" years="10+"/>
                    <Ability abilityName="Adobe Photoshop" score="2" years="2"/>
                    <Ability abilityName="Paint.NET" score="4" years="10+"/>
                    <Ability abilityName="Microsoft Office" score="4" years="15+"/>
                    <Ability abilityName="Delphi/RAD Studio" score="2" years="1"/>
                </div>{/*  end of row */}
                <div>
                    &nbsp;
                </div>

            </div>
        </div>  
    );
}

export default Experience;
import React from 'react';

function Majors() {
    return(
        <>
         <section>
            <main>
            <div class="float-container">
                <div class="float-child">
                    <div class="CPE">
                        Bachelor's of Science Computer Engineering
                    </div>
                </div>
                <div class="float-child">
                    <div class="EE">
                        Bachelor's of Science Electrical Engineering
                    </div>
                </div>  
            </div>
            </main>
        </section>
        <section>
            <div class="float-container">
                <div class="float-child">
                    <div className="major-boxCPE">
                        <a href="/degrees-minors/general-cpe">Computer Engineering (general)</a>
                    </div>
                    <div className="major-boxCPE">
                        <a href="/degrees-minors/chip-scale">Chip-Scale Integration</a>
                    </div>
                    <div className="major-boxCPE">
                        <a href="/degrees-minors/controls-robotics-automony-cpe">Controls, Robotics, and Autonomy</a>
                    </div>
                    <div className="major-boxCPE">
                        <a href="/degrees-minors/machine-learning">Machine Learning</a>
                    </div>
                    <div className="major-boxCPE">
                        <a href="/degrees-minors/networking-cybersecurity">Networking and Cybersecurity</a>
                    </div>
                    <div className="major-boxCPE">
                        <a href="/degrees-minors/software-systems">Software Systems</a>
                    </div>
                </div>

                <div class="float-child">
                    <div className="major-boxEE">
                        <a href="/degrees-minors/general-ee">Electrical Engineering (general)</a>
                    </div>
                    <div className="major-boxEE">
                        <a href="/degrees-minors/communications-networking">Communications and Networking</a>
                    </div>
                    <div className="major-boxEE">
                        <a href="/degrees-minors/controls-robotics-automony-ee">Controls, Robotics, and Autonomy</a>
                    </div>
                    <div className="major-boxEE">
                        <a href="/degrees-minors/enery-power-electronic-systems">Energy and Power Electronic Systems</a>
                    </div>
                    <div className="major-boxEE">
                        <a href="/degrees-minors/micro-nanosystems">Micro-Nanosystems</a>
                    </div>
                    <div className="major-boxEE">
                        <a href="/degrees-minors/photonics">Photonics</a>
                    </div>
                    <div className="major-boxEE">
                        <a href="/degrees-minors/radio-frequency-microwave">Radio Frequency and Microwave</a>
                    </div>
                    <div className="major-boxEE">
                        <a href="/degrees-minors/space-systems">Space Systems</a>
                    </div>
                </div>
            </div>
        </section>                   
        </>
    );
}
export default Majors;
//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import CPE from './components/Major_CPE';
import EE from './components/Major_EE';
import Majors from './components/Checksheets/Majors';
import MajorSpecific from './components/MajorSpecific';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { route } from 'express/lib/application';
import GeneralCPE from './components/Checksheets/GeneralCPE';
import ChipScaleIntegration from './components/Checksheets/ChipScaleIntegration';
import ControlsRoboticsAutonomyCPE from './components/Checksheets/ControlsRoboticsAutonomyCPE';
import MachineLearning from './components/Checksheets/MachineLearning';
import NetworkingCybersecurity from './components/Checksheets/NetworkingCybersecurity';
import SoftwareSystems from './components/Checksheets/SoftwareSystems';

import GeneralEE from './components/Checksheets/GeneralEE';
import CommunicationsNetworking from './components/Checksheets/CommunicationsNetworking';
import ControlsRoboticsAutonomyEE from './components/Checksheets/ControlsRoboticsAutonomyEE';
import PowerSystems from './components/Checksheets/PowerSystems';
import MicroNanoSystems from './components/Checksheets/MicroNanoSystems';
import Photonics from './components/Checksheets/Photonics';
import RadioFrequencyMicrowave from './components/Checksheets/RadioFrequencyMicrowave';
import SpaceSystems from './components/Checksheets/SpaceSystems';

import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import DegreePlanner from './components/PlanDegree';

import {CS3214, ECE1004, ECE2024, ECE2500, ECE2514, ECE2544, ECE2214, ECE2564, ECE2574, ECE2714, ECE2804,
  ECE3004, ECE3074, ECE3105, ECE3106, ECE3204, ECE3274, ECE3304, ECE3354, ECE3504, ECE3514, ECE3544, ECE3704,
  ECE3574, ECE3614, ECE4224, ECE4524, ECE4525, ECE4334, ECE4424, ECE4550, ECE4554, ECE4574, ECE4805, ECE4806} from './components/Classes/';
import Classes from './components/Classes/Classes'

function App() {
  return (
    <Router>
      <div className= "App">
          <Nav />
          <Routes>
            <Route path="/" element ={<Home/> }  exact/>
            <Route path="/degrees-minors" element ={<Majors/>} exact/>
            <Route path="/courses" element ={<Classes/>} exact/>
            <Route path="/plan-my-degree" element ={<DegreePlanner/>} exact/>
            <Route path="/Contacts" element ={<Contacts/>} exact/>
            <Route path="/FAQ" element ={<FAQ/>} exact/>
            <Route path="/degrees-minors/cpe" element ={<CPE/>} exact/>
            <Route path="/degrees-minors/ee" element ={<EE/>} exact/>
            <Route path="/degrees-minors/:major" element ={<MajorSpecific/>}  exact/>
            <Route path="/degrees-minors/general-cpe" element={<GeneralCPE/>} exact/>
            <Route path="/degrees-minors/chip-scale" element={<ChipScaleIntegration/>} exact/>
            <Route path="/degrees-minors/controls-robotics-automony-cpe" element={<ControlsRoboticsAutonomyCPE/>} exact/>
            <Route path="/degrees-minors/machine-learning" element={<MachineLearning/>} exact/>
            <Route path="/degrees-minors/networking-cybersecurity" element={<NetworkingCybersecurity/>} exact/>
            <Route path="/degrees-minors/software-systems" element={<SoftwareSystems/>} exact/>
            <Route path="/degrees-minors/general-ee" element={<GeneralEE/>} exact/>
            <Route path="/degrees-minors/communications-networking" element={<CommunicationsNetworking/>} exact/>
            <Route path="/degrees-minors/controls-robotics-automony-ee" element={<ControlsRoboticsAutonomyEE/>} exact/>
            <Route path="/degrees-minors/enery-power-electronic-systems" element={<PowerSystems/>} exact/>
            <Route path="/degrees-minors/micro-nanosystems" element={<MicroNanoSystems/>} exact/>
            <Route path="/degrees-minors/photonics" element={<Photonics/>} exact/>
            <Route path="/degrees-minors/radio-frequency-microwave" element={<RadioFrequencyMicrowave/>} exact/>
            <Route path="/degrees-minors/space-systems" element={<SpaceSystems/>} exact/>
            <Route path="/classes/CS3214" element={<CS3214/>} exact/>
            <Route path="/classes/ECE1004" element={<ECE1004/>} exact/>
            <Route path="/classes/ECE2024" element={<ECE2024/>} exact/>
            <Route path="/classes/ECE2214" element={<ECE2214/>} exact/>
            <Route path="/classes/ECE2500" element={<ECE2500/>} exact/>
            <Route path="/classes/ECE2514" element={<ECE2514/>} exact/>
            <Route path="/classes/ECE2544" element={<ECE2544/>} exact/>
            <Route path="/classes/ECE2564" element={<ECE2564/>} exact/>
            <Route path="/classes/ECE2574" element={<ECE2574/>} exact/>
            <Route path="/classes/ECE2714" element={<ECE2714/>} exact/>
            <Route path="/classes/ECE2804" element={<ECE2804/>} exact/>
            <Route path="/classes/ECE3004" element={<ECE3004/>} exact/>
            <Route path="/classes/ECE3074" element={<ECE3074/>} exact/>
            <Route path="/classes/ECE3105" element={<ECE3105/>} exact/>
            <Route path="/classes/ECE3106" element={<ECE3106/>} exact/>
            <Route path="/classes/ECE3204" element={<ECE3204/>} exact/>
            <Route path="/classes/ECE3274" element={<ECE3274/>} exact/>
            <Route path="/classes/ECE3304" element={<ECE3304/>} exact/>
            <Route path="/classes/ECE3354" element={<ECE3354/>} exact/>
            <Route path="/classes/ECE3504" element={<ECE3504/>} exact/>
            <Route path="/classes/ECE3544" element={<ECE3544/>} exact/>
            <Route path="/classes/ECE3514" element={<ECE3514/>} exact/>
            <Route path="/classes/ECE3574" element={<ECE3574/>} exact/> 
            <Route path="/classes/ECE3614" element={<ECE3614/>} exact/>
            <Route path="/classes/ECE3704" element={<ECE3704/>} exact/>
            <Route path="/classes/ECE4224" element={<ECE4224/>} exact/>
            <Route path="/classes/ECE4334" element={<ECE4334/>} exact/>
            <Route path="/classes/ECE4424" element={<ECE4424/>} exact/>
            <Route path="/classes/ECE4524" element={<ECE4524/>} exact/>
            <Route path="/classes/ECE4525" element={<ECE4525/>} exact/>
            <Route path="/classes/ECE4550" element={<ECE4550/>} exact/>
            <Route path="/classes/ECE4554" element={<ECE4554/>} exact/>
            <Route path="/classes/ECE4574" element={<ECE4574/>} exact/>
            <Route path="/classes/ECE4805" element={<ECE4805/>} exact/>
            <Route path="/classes/ECE4806" element={<ECE4806/>} exact/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

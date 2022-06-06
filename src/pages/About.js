import React from 'react'
import Header from '../components/Header'
import { Divider } from 'native-base'
import Footer from '../components/Footer'
import HardwareComonent from '../components/HardwareComonent'
const components = [
    {
        name:'Arduino Uno',
        image:'https://robu.in/wp-content/uploads/2017/10/Uno-R3-CH340G-ATmega328p-Development-Board-Compatible-with-Arduino2.png',
        description: `The Uno R3 CH340G ATmega328p Development Board is the low-cost version of the popular Uno R3 Arduino. It is assembled with the CH340 USB to Serial converter chip, instead of using an Atmega16U2 chip..`
    }, {
        name: 'ESP32 CAM',
        image: 'https://robu.in/wp-content/uploads/2019/12/Ai-Thinker-ESP32-CAM-Development-Board-WiFiBluetooth-with-OV2640-Camera-Module-6.jpg',
        description: `As you may be aware, ESP32 boards are more popular than you might think, and AI THINKER is one of the leading manufacturers of development boards, has introduced a line of ESP32 boards. `
    }, {
        name: 'Sound Sensor',
        image: 'https://robu.in/wp-content/uploads/2016/03/robu-3-22.jpg',
        description: `Sound Detection Module Sensor for Intelligent Vehicle Compatible With Arduino is a Single channel signal output Sensor. The output is effective to the low-level sound signal with good fidelity, When there is sound, outputs low level and signal light.`
    }, {
        name: 'Ultrasonic Sensor',
        image: 'https://robu.in/wp-content/uploads/2017/09/ultrasonic-sensor-us-100-distance-measuring-module-01.jpg',
        description: `This is the US-100 Ultrasonic Sensor Distance Measuring Module with Temperature Compensation. The US-100 Ultrasonic Sensor can measure or detect the object in the range of 2 cm to 450 cm distance.`
    }, {
        name: 'Jumper Wires',
        image: 'https://robu.in/wp-content/uploads/2016/01/40pcs-20cm-2-54MM-Male-to-Female-for-Dupont-Wire-Jump-Jumper-Cables-For-Arduino-Shield.jpg',
        description: `This is 20CM Dupont Wire Color Jumper Cable, 2.54mm 1P-1P Male to Female 40PCS. A very Flexible and easily detachable cable to the no. of wires according to your requirement. It has 1Pin male to the 1pin female header with both ends. Also, it is compatible with 2.54 mm mil spacing pin headers.`
    }, {
        name: 'Breadboard',
        image: 'https://robu.in/wp-content/uploads/2019/11/Transparent-830-Points-Solderless-Breadboard-6.jpg',
        description: `An MB102 830 Points Solderless Prototype PCB Breadboard is an invaluable tool for experimenting with circuit designs whether in the R&D or university lab. A breadboard is used to make up temporary circuits for testing or to try out an idea. No soldering is required so it is easy to change connections and replace components.`
    },
]
function About() {
    return (
        <div>
            <Header  />
            <Divider bg='gray.500' />
            

            <h2 className='t2'>Code and Sources</h2>                                  
            <div className='flex wrap center m90'>
                <div className='details-container'>
                    <p style={{fontWeight:600}}>Backend Server</p> 
                    <div className='flex'>
                        <a target='_blank' href='https://github.com/rootrsk/security-server'>Github</a>
                    </div>
                </div>
                <div className='details-container'>
                    <p style={{fontWeight:600}}>Web Application</p> 
                    <div className='flex'>
                        <a target='_blank' href='https://github.com/rootrsk/security-cam-front'>Github</a>
                    </div>
                </div>
                <div className='details-container'>
                    <p style={{fontWeight:600}}>Mobile Application</p> 
                    <div className='flex'>
                        <a target='_blank' href='https://github.com/rootrsk/cloud-vision-application'>Github</a>
                    </div>
                </div>
                <div className='details-container'>
                    <p style={{fontWeight:600}}>Arduino and Camera</p> 
                    <div className='flex'>
                        <a target='_blank' href='https://github.com/rootrsk/cloud-vision-arduino-esp32'>Github</a>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='t2'>Hardware Components</h2>
                <div className='flex wrap m90 center'>
                   {
                        components.map((item,index)=>{
                            return <HardwareComonent item={item} key={index} />
                        })
                    } 
                </div>
                
            </div>  
            <Footer />
        </div>
    )
}

export default About

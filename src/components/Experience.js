import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './liIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref =useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div style={{scaleY: scrollYProgress}} 
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                        position="Undergraduate Student Researcher"
                        company="Schulich School of Engineering"
                        companyLink="https://ucalgary.ca/experiential-learning/undergraduate-research/pure"
                        time="May 2024 - Current"
                        address="Calgary, AB"
                        work="Developed pipelines to execute tasks through various large language models on 
                        high-performance clusters. I conducted syntactic, semantic, and qualitative analysis 
                        utilizing Python libraries such as Pandas and transformers. My research focused on 
                        comparing model outputs with an emphasis on evaluating code summarization and optimizing 
                        results using custom metrics and tools."
                    />
                    <Details 
                        position="Web Development Team Lead"
                        company="Sculich Unmanned Aerial Vehicles"
                        companyLink="https://calgaryuav.com/"
                        time="June 2024 - Present"
                        address="Calgary, AB"
                        work="Led the web development team to create a dynamic, organized, and user-friendly ground 
                        control system (GCS) that manages flight operations and displays real-time drone metrics. 
                        Ensured the page was readable and optimized for both performance and functionality, keeping 
                        a structured and responsive layout. Coordinated the integration of RocketM5 and 5.8G antennas,
                         enabling reliable long-distance communication between the drone’s Raspberry Pi and the GCS."
                    />
                    <Details 
                        position="Full Stack Web Developer"
                        company="Sculich Unmanned Aerial Vehicles"
                        companyLink="https://calgaryuav.com/"
                        time="September 2023 - June 2024"
                        address="Calgary, AB"
                        work="Designed and developed a ground control system for drone flight management, displaying 
                        key metrics like ground speed, vertical speed, and altitude. Built a web application using 
                        HTML, CSS, JavaScript, and Python (Flask) to provide an intuitive interface for controlling 
                        flight operations, onboard electronics, and real-time photo transmission for item drops. 
                        Implemented a robust communication system using RocketM5 for long-distance datalinks, 
                        ensuring seamless drone-GCS connectivity."
                    />
                    <Details 
                        position="UI/UX Developer"
                        company="Craft-XR - TechStart UCalgary"
                        companyLink="https://techstartucalgary.com/"
                        time="September 2023 - April 2024"
                        address="Calgary, AB"
                        work="Created and integrated 3D assets using Blender, Ready Player Me, and Mixamo into 
                        interactive healthcare training simulations powered by the Unity engine. Led the design and
                         development of user-friendly interfaces, optimizing interactions with virtual environments. 
                         The project leveraged technologies like SteamVR, ORAMAVR, and Azure cloud services to build 
                         extended reality experiences for healthcare simulations."
                    />
                </ul>
            </div>

        </div>
    );
}

export default Experience;
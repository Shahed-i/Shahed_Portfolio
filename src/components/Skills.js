import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8
         shadow-dark cursor-pointer absolute py-3 px-6'
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration:1.5}}
        viewport={{once:true}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>

        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark
             text-light p-8 shadow-dark cursor-pointer'
            whileHover={{scale:1.05}}>
                React
            </motion.div>

            <Skill name="CSS" x="-5vw" y="-9vw"/>
            <Skill name="Python" x="-21vw" y="-2vw"/>
            <Skill name="C" x="14vw" y="-1vw"/>
            <Skill name="C++" x="0vw" y="13.5vw"/>
            <Skill name="HTML" x="-18vw" y="-15vw"/>
            <Skill name="MySQL" x="14vw" y="-11vw"/>
            <Skill name="JavaScript" x="28vw" y="-4vw"/>
            <Skill name="Figma" x="0vw" y="-18.5vw"/>
            <Skill name="Node.js" x="-15vw" y="21vw"/>
            <Skill name="Next.js" x="20.5vw" y="18vw"/>
            <Skill name="Flask" x="35vw" y="6vw"/>
            <Skill name="Tailwind CSS" x="-33vw" y="-9vw"/>
            <Skill name="GitHub" x="-35vw" y="6vw"/>
            <Skill name="Unity" x="-23vw" y="11vw"/>
            <Skill name="Java" x="17vw" y="8.5vw"/>
            <Skill name="Postman" x="26vw" y="-16vw"/>
            <Skill name="Eclipse" x="-11vw" y="5vw"/>

        </div>

        </>
    );
}

export default Skills;
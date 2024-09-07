import React from 'react'
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/shahed.jpg';
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

const About = () => {
    return (
     <>
        <Head>
            <title>Shahed Issa | About</title>
            <meta name="description" content="any description" />
        </Head>

        <main className="flex w-full flex-col items-center justify-center">
            <Layout className='pt-16'>
                <AnimatedText text="Hello, I&apos;m Shahed" className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-center'>
                        <p>I&apos;m a third-year Software Engineering student at the University of Calgary with
                         a minor in Mechatronics. I&apos;m deeply passionate about artificial intelligence and 
                         large language models, having worked on various projects utilizing AI to 
                         push the boundaries of the software world. I enjoy working on solutions that merge 
                         my technical skills with creativity, whether it&apos;s developing complex applications 
                         or exploring how software can enhance mechanical systems. </p>

                        <p className=' my-4'>Throughout my academic journey, I&apos;ve delved into web development, robotics, and the 
                        overlap between software and mechanical engineering. While pursuing my degree, 
                        I had the opportunity to be involved in a variety of clubs and initiatives that gave me 
                        hands-on experience in game development, VR/VX, GUI and website development, and research. 
                        These experiences have broadened my perspective and further fueled my enthusiasm for 
                        developing innovative, user-centric solutions.</p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        <Image src={profilePic} alt="Shahed Issa" className='w-full h-auto rounded-2xl' />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-center'>
                        <p>My enthusiasm for learning drives me to stay updated with the latest advancements and 
                        actively pursue innovative projects that push the boundaries of what&apos;s possible. I&apos;m 
                        always eager to embrace new challenges and continuously seek opportunities to bridge the 
                        gap between cutting-edge technology and real-world applications!</p>
                    </div>
                </div>

                <Skills />
                <Experience />
            </Layout>
        </main>
     </>
    )   
}

export default About;
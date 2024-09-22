import React from 'react'
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '../components/Icons';
import trainPanel from "../../public/images/projects/trainPanel.PNG";
import planify from "../../public/images/projects/planify.jpg";


const FeaturedProject = ({type, title, summary, img, github}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark' />
            <Link href={github} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={github} target="_blank" 
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Github</Link>
                </div>
            </div>
        </article>
    )
}

const FeaturedProject2 = ({type, title, summary, img, github, link}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark' />
            <Link href={github} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={link} target="_blank" 
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}
  

const Project = ({type, title, summary,  github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-between relative rounded-br-3xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark' />
            <div className='w-full flex flex-col items-start justify-between'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={github} target="_blank" 
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Github</Link>
                </div>
            </div>
        </article>
    )
}


const projects = () => {
    return(
        <>
            <Head>
            <title>Shahed Issa | Projects</title>
            <meta name="description" content="any description" />
            </Head>

            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className="pt-16">
                    <AnimatedText text="My Projects" className='mb-16'/>

                    <div className='grid grid-cols-12 gap-24'>

                    <div className='col-span-12'>
                        <FeaturedProject2 
                            type="Project 1" 
                            title="Planner App" 
                            summary="A comprehensive task management application designed to streamline productivity 
                            and organization. It features a built-in calendar for adding tasks and deadlines, as well
                             as a focus mode that utilizes the Pomodoro study method to enhance concentration. Users 
                             can also organize their tasks by category and quickly jot down notes in a dedicated 
                             section, making it a versatile tool for managing both academic and personal projects."
                            img={planify}
                            github="https://github.com/Shahed-i/plannerapp" 
                                link="https://planify-web.netlify.app/"
                            />
                    </div>

                        <div className='col-span-12'>
                            <FeaturedProject 
                                type="Project 2" 
                                title="Dynamic Subway Information System" 
                                summary="A Java application simulating subway screens with real-time train data, 
                                rotating ads from a MySQL database, and daily weather updates from the OpenWeatherMap
                                 API. Built with Java Swing, it features a responsive interface and supports various 
                                 media formats, refreshing ads every 10 seconds."
                                img={trainPanel}
                                github="https://github.com/arnavmittal14/ENSF380SummerFinalProject" />
                        </div>

                        <div className='col-span-6'>
                        <Project 
                                type="Project 3" 
                                title="Disaster Relief System" 
                                summary="A robust Java application designed to efficiently manage and organize 
                                disaster victim data, enabling streamlined tracking of personal information, medical
                                 records, and relief efforts during emergencies. The system utilizes SQL for secure 
                                 data storage and retrieval, while supporting command-line arguments for simplified 
                                 user input and operations."
                                github="https://github.com/Shahed-i/380_Individual_Project" />
                        </div>
                        
                        <div className='col-span-6'>
                        <Project 
                                type="Project 4" 
                                title="Museum Management System" 
                                summary="This project involves designing and developing a database management system
                                 for a museum to organize and manage its collection of art objects and exhibitions. 
                                 The database is structured to store detailed information about art pieces, artists, 
                                 exhibitions, and collections, including types of art (paintings, sculptures, etc.), 
                                 acquisition status, and exhibition history."
                                github="https://github.com/ENSF-300-F23/museum-project-shnazz" />
                        </div>

                    </div>

                </Layout>
            </main>

        </>
    );
}

export default projects;
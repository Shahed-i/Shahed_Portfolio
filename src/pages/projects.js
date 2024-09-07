import React from 'react'
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '../components/Icons';
import project1 from "../../public/images/projects/devdreaming.jpg"

const FeaturedProject = ({type, title, summary, img, github}) => {
    return (
        <article className='w-full flex items-center justify-between
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
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
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, summary, img, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-between
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
            <Link href={github} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg mb-6'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={github} target="_blank" 
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
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
                            <FeaturedProject 
                                type="Project 1" 
                                title="Dynamic Subway Information System" 
                                summary="A Java application simulating subway screens with real-time train data, 
                                rotating ads from a MySQL database, and daily weather updates from the OpenWeatherMap
                                 API. Built with Java Swing, it features a responsive interface and supports various 
                                 media formats, refreshing ads every 10 seconds."
                                img={project1}
                                github="https://github.com/arnavmittal14/ENSF380SummerFinalProject" />
                        </div>

                        <div className='col-span-6'>
                        <Project 
                                type="Project 2" 
                                title="Disaster Relief System" 
                                summary="A robust Java application designed to efficiently manage and organize 
                                disaster victim data, enabling streamlined tracking of personal information, medical
                                 records, and relief efforts during emergencies. The system utilizes SQL for secure 
                                 data storage and retrieval, while supporting command-line arguments for simplified 
                                 user input and operations."
                                img={project1}
                                github="https://github.com/Shahed-i/380_Individual_Project" />
                        </div>
                        
                        <div className='col-span-6'>
                        <Project 
                                type="Project 2" 
                                title="Museum Management System" 
                                summary="This project involves designing and developing a database management system
                                 for a museum to organize and manage its collection of art objects and exhibitions. 
                                 The database is structured to store detailed information about art pieces, artists, 
                                 exhibitions, and collections, including types of art (paintings, sculptures, etc.), 
                                 acquisition status, and exhibition history."
                                img={project1}
                                github="https://github.com/ENSF-300-F23/museum-project-shnazz" />
                        </div>

                        <div className='col-span-12'>
                        <FeaturedProject 
                                type="Project 4" 
                                title="Planner App" 
                                summary="description"
                                img={project1}
                                github="https://github.com/arnavmittal14/ENSF380SummerFinalProject" />
                        </div>

                    </div>

                </Layout>
            </main>

        </>
    );
}

export default projects;
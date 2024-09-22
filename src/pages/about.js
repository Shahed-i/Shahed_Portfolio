import React from 'react'
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/shahed.JPG';
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
            <Layout className='pt-0'>
                <Experience />
                <Skills />
            </Layout>
        </main>
     </>
    )   
}

export default About;
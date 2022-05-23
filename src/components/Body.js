import React from 'react'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import Home from './Home'
import Intro from './Intro'
import Feature from './Feature'
import Videos from './Videos'
import MoreFeatures from './MoreFeatures'
import Roadmap from './Roadmap'
import Faq from './Faq'
import Team from './Team'
import Footer from '../layouts/Footer'

class Body extends React.Component {

    render() {
        return (
            <div className='flex flex-col justify-center place-items-center w-full bg-primary-dark'>
                <div className='w-full fixed top-0 right-0 z-30 lg:pl-24'>
                    <Header />
                    <div className='w-auto h-auto block lg:hidden'>
                        <Sidebar />
                    </div>
                </div>
                <div className='flex flex-col w-full pt-48 lg:pt-24' style={{
                    backgroundImage: "linear-gradient(180deg, #1F005E, transparent 25%, transparent 75%, #211f23), radial-gradient(circle farthest-corner at 50% 80%, rgba(85, 64, 191, 0.2), rgba(58, 56, 62, 0) 65%), radial-gradient(circle farthest-corner at 0% 50%, rgba(64, 128, 191, 0.3), rgba(58, 56, 62, 0) 66%), radial-gradient(circle farthest-corner at 75% 15%, rgba(191, 64, 85, 0.25), rgba(58, 56, 62, 0) 40%), url('https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/617ffc954f80dd02ddb2b35c_stardust.png')",
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                    <section className='px-6 sm:px-12' id='home'>
                        <Home />
                        <Intro />
                    </section>
                    <section className='px-6 sm:px-12'  id='features'>
                        <Feature />
                        <Videos />
                        <MoreFeatures />
                    </section>
                    <section id='roadmap'>
                        <Roadmap />
                    </section>
                    <section className='px-6 sm:px-12'  id='faq'>
                        <Faq />
                    </section>
                    <section className='px-6 sm:px-12'  id='team'>
                        <Team />
                        <Footer />
                    </section>
                </div>
            </div>
        )
    }
}

export default Body
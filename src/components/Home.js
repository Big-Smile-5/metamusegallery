import React from 'react'
import Trailer from './Trailer'

class Home extends React.Component {

    render() {
        return (
            <div className='flex flex-col justify-center space-y-5 place-items-center'>
                <div className="flex flex-wrap items-center w-full">
                    <div className='w-full lg:w-1/2 mobile:p-0 p-5 sm:p-10'>
                        <div className='bg-white bg-opacity-20'>
                            <h1 className='bg-red-light w-fit text-white mobile:text-2xl text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black p-2 px-4 sm:-ml-12'>Minting Soon</h1>
                            <div className='p-6 space-y-3'>
                                <h2 className='text-white mobile:text-xl text-2xl font-bold'>Building the MetaLouvre Multiverse NFT Gallery and Exchange</h2>
                                <p className='text-gray-300 mobile:text-xl text-2xl' style={{
                                    fontFamily: 'Helvetica, sans-serif'
                                }}>
                                    Join our exclusive Community and fund the creation of the MetaLouvre NFT Gallery and Exchange in the Sandbox and Decentraland Metaverses
                                </p>
                                
                                <div className='flex flex-wrap mobile:space-x-0 space-x-5'>
                                    <a className="px-3 py-2 flex items-center font-bold text-white space-x-3 border-2 border-white mobile:w-full w-fit rounded-xl"
                                        href='https://discord.gg/SRCkyQuByV' target="_blank" rel="noopener noreferrer">
                                        <span className='text-white text-2xl cursor-pointer'>
                                            <i className='fab fa-discord'></i>
                                        </span>
                                        <span className='text-xl'>Join Us</span>
                                    </a>
                                    <a className="px-3 py-2 flex items-center font-bold text-white space-x-3 border-2 border-white mobile:w-full w-fit rounded-xl"
                                        href='https://twitter.com/MetaLouvreNFT' target="_blank" rel="noopener noreferrer">
                                        <span className='text-white text-2xl cursor-pointer'>
                                            <i className='fab fa-twitter'></i>
                                        </span>
                                        <span className='text-xl'>Follow Us</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full h-fit lg:w-1/2 p-5 sm:p-20 lg:p-10'>
                        <Trailer />
                    </div>
                </div>
                
                <div className='flex flex-col justify-center place-items-center' data-aos='fade-up'>
                    <div className='w-11/12 sm:w-4/5 flex justify-center'>
                        <img src='./images/logo.png' alt='logo_img' />
                    </div>
                    <h1 className='w-4/5 text-white mobile:text-2xl text-3xl text-center'>
                        Join the community and Secure a Lifetime of Passive Income from our NFT Gallery and Exchange directly in the Metaverse!<br></br> Minting Soon!
                    </h1>
                </div>
            </div>
        )
    }
}

export default Home
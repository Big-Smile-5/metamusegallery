import React from 'react'

class Intro extends React.Component {

    render() {
        return (
            <div className='flex flex-col space-y-20 py-8 sm:py-10 md:py-16'>
                <div className='flex flex-wrap items-center w-full desktop-min:flex-col-reverse' data-aos='fade-up'>
                    <div className='w-full lg:w-45 p-5 sm:p-20 lg:p-10 xl:p-20'>
                        <img className='rounded-lg' src='/images/intro.png' alt='intro_img' />
                    </div>
                    <div className='w-full lg:w-55 space-y-10 desktop-min:text-center '>
                        <h1 className='text-pink-light text-2xl md:text-3xl lg:text-4xl font-bold'>
                            What are the MetaLouvre NFT Gallery Easels?
                        </h1>
                        <p className='text-white text-md md:text-lg font-medium'>
                            The MetaLouvre Easel NFTs are unique, hand drawn NFTs featuring hyper realistic paintings on the canvas with colored, textured backgrounds. The Easels are stored as ERC-721a tokens on the Ethereum Blockchain.
                            <br></br><br></br>With the MetaLouvre Easel NFT collection we will fund the creation of a "brick and mortar" NFT Gallery and Exchange in the Sandbox and Decentraland Metaverses. Each MetaLouvre Easel NFT holder will receive a percentage of the profits generated in our gallery. With each NFT held, you will be automatically entered into our royalty program where we distribute 70% of the profits generated in the gallery to our NFT holders.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro
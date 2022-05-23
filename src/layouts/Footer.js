import React from 'react'

class Footer extends React.Component {

    render() {
        return (
            <div className='flex flex-col place-items-center space-y-5'>
                <ul className="flex flex-row list-none space-x-5">
                    <li className="bg-blue-normal rounded-full">
                        <a className="w-12 h-12 flex justify-center items-center text-xs uppercase font-bold text-white hover:opacity-75"
                            href='https://www.youtube.com/channel/UCCdFQliZ7cBM3hHkZBDidrg' target="_blank" rel="noopener noreferrer">
                            <span className='text-white text-xl cursor-pointer'>
                                <i className='fab fa-youtube'></i>
                            </span>
                        </a>
                    </li>
                    <li className="bg-purple-normal rounded-full">
                        <a className="w-12 h-12 flex justify-center items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href='https://www.instagram.com/metamusenft' target="_blank" rel="noopener noreferrer">
                            <span className='text-white text-xl cursor-pointer'>
                                <i className='fab fa-instagram'></i>
                            </span>
                        </a>
                    </li>
                    <li className="bg-blue-normal rounded-full">
                        <a className="w-12 h-12 flex justify-center items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href='https://twitter.com/MetaMuseNFT' target="_blank" rel="noopener noreferrer">
                            <span className='text-white text-xl cursor-pointer'>
                                <i className='fab fa-twitter'></i>
                            </span>
                        </a>
                    </li>
                    <li className="bg-purple-normal rounded-full">
                        <a className="w-12 h-12 flex justify-center items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href='https://discord.gg/SRCkyQuByV' target="_blank" rel="noopener noreferrer">
                            <span className='text-white text-xl cursor-pointer'>
                                <i className='fab fa-discord'></i>
                            </span>
                        </a>
                    </li>
                </ul>
                <div className='mobile:flex-col mobile:space-y-2 flex justify-between place-items-center w-full border-t-2 border-gray-500 py-4'>
                    <h1 className='text-white text-xs'>
                        Copyright@2022. All rights reserved
                    </h1>
                    <h1 className='text-white text-xs'>
                        Privacy Policy
                    </h1>
                </div>
            </div>
        )
    }
}

export default Footer
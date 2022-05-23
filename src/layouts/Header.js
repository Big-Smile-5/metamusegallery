import React from 'react'

class Header extends React.Component {

    constructor() {
        super()

        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <nav className="lg:border-b lg:border-gray-700 relative flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-primary-light">
                <div className="container px-5 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <a className="inline-block h-20 md:h-24 py-2" href="#pablo">
                            <img className='h-full object-contain' src='/images/logo.png' alt='logo_img' />
                        </a>
                        <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => this.setState((state) => ({
                                    ...state,
                                    isOpen: !state.isOpen
                                }))}>
                            <span className="block relative w-5 h-px rounded-sm bg-white"></span>
                            <span className="block relative w-5 h-px rounded-sm bg-white mt-1"></span>
                            <span className="block relative w-5 h-px rounded-sm bg-white mt-1"></span>
                        </button>
                    </div>
                    <div className={`flex flex-col flex-grow items-center place-items-center overflow-hidden space-y-3 py-2 transition-all duration-500 lg:py-0 lg:space-y-0 lg:space-x-8 lg:flex-row
                                     ${this.state.isOpen === true?'desktop-min:max-h-96':'desktop-min:max-h-0'}`}>
                        <ul className="flex flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                   href='https://www.youtube.com/channel/UCCdFQliZ7cBM3hHkZBDidrg' target="_blank" rel="noopener noreferrer">
                                    <span className='text-white text-xl cursor-pointer'>
                                        <i className='fab fa-youtube'></i>
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                   href='https://www.instagram.com/metalouvrenft' target="_blank" rel="noopener noreferrer">
                                    <span className='text-white text-xl cursor-pointer'>
                                        <i className='fab fa-instagram'></i>
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                   href='https://twitter.com/MetaLouvreNFT' target="_blank" rel="noopener noreferrer">
                                    <span className='text-white text-xl cursor-pointer'>
                                        <i className='fab fa-twitter'></i>
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                   href='https://discord.gg/SRCkyQuByV' target="_blank" rel="noopener noreferrer">
                                    <span className='text-white text-xl cursor-pointer'>
                                        <i className='fab fa-discord'></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <button className="bg-lightBlue-500 text-white hover:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            Connect wallet
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
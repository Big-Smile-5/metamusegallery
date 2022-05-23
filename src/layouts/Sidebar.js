import React from 'react'

class Sidebar extends React.Component {

    render() {
        return (
            <div className='flex flex-row flex-wrap bg-primary-light py-3 lg:min-h-screen lg:space-y-10 lg:py-16 lg:flex-col'>
                <div className='desktop-min:space-y-1 w-1/5 lg:w-full h-fit flex flex-col place-items-center z-50'>
                    <a href='#home'>
                        <img className='h-8 md:h-10 lg:h-auto' src='/images/1.png' alt='home_img'></img>
                    </a>
                    <h1 className='text-white text-sm md:text-md lg:text-lg'>Home</h1>
                </div>
                
                <div className='desktop-min:space-y-1 w-1/5 lg:w-full h-fit flex flex-col place-items-center'>
                    <a href='#features'>
                        <img className='h-8 md:h-10 lg:h-auto'  src='/images/2.png' alt='features_img'></img>
                    </a>
                    <h1 className='text-white text-sm md:text-md lg:text-lg'>Features</h1>
                </div>

                
                <div className='desktop-min:space-y-1 w-1/5 lg:w-full h-fit flex flex-col place-items-center'>
                    <a href='#roadmap'>
                        <img className='h-8 md:h-10 lg:h-auto'  src='/images/3.png' alt='roadmap_img'></img>
                    </a>
                    <h1 className='text-white text-sm md:text-md lg:text-lg'>Roadmap</h1>
                </div>

                
                <div className='desktop-min:space-y-1 w-1/5 lg:w-full h-fit flex flex-col place-items-center'>
                    <a href='#faq'>
                        <img className='h-8 md:h-10 lg:h-auto'  src='/images/4.png' alt='faq_img'></img>
                    </a>
                    <h1 className='text-white text-sm md:text-md lg:text-lg'>FAQ</h1>
                </div>

                
                <div className='desktop-min:space-y-1 w-1/5 lg:w-full h-fit flex flex-col place-items-center'>
                    <a href='#team'>
                        <img className='h-8 md:h-10 lg:h-auto'  src='/images/5.png' alt='team_img'></img>
                    </a>
                    <h1 className='text-white text-sm md:text-md lg:text-lg'>Team</h1>
                </div>
            </div>
        )
    }
}

export default Sidebar
import React from 'react'
import Constants from '../constants/constants'

const teamItem = function(data, i) {
    return (
        <div className='w-full lg:w-1/2 h-full flex flex-col justify-center place-items-center px-5 lg:px-12' key={i}>
            <div className='h-auto py-5'>
                <img className='md:max-h-1/2 lg:max-h-full  rounded-full border-2 border-white object-cover w-full' src={`${data.image}`} alt='avatar' />
            </div>
            <h1 className='text-yellow-500 font-bold text-2xl'>
                { data.nickname }
            </h1>
            <h2 className='text-white text-md'>
                { data.role }
            </h2>
            <div className='flex justify-evenly'>
                {
                    (data.contacts.twitter !== "") && 
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        href={`${data.contacts.twitter}`} target="_blank" rel="noopener noreferrer">
                        <span className='text-white text-xl cursor-pointer'>
                            <i className='fab fa-twitter'></i>
                        </span>
                    </a>
                }
                {
                    (data.contacts.twitter !== "") && 
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        href={`${data.contacts.instagram}`} target="_blank" rel="noopener noreferrer">
                        <span className='text-white text-xl cursor-pointer'>
                            <i className='fab fa-instagram'></i>
                        </span>
                    </a>
                }
                {
                    (data.contacts.linkedin !== "") && 
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        href={`${data.contacts.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <span className='text-white text-xl cursor-pointer'>
                            <i className='fab fa-linkedin-in'></i>
                        </span>
                    </a>
                }
            </div>
        </div>
    )
}
class Team extends React.Component {

    render() {
        return (
            <div className='flex flex-col justify-center place-items-center space-y-10 pt-8 pb-24'>
                <h1 className="text-white text-4xl sm:text-6xl font-bold">
                    Our Team
                </h1>
                <div className='flex flex-wrap items-start h-max'>
                    { Constants.Team.map((data, i) => {
                        return teamItem(data, i)
                    })}
                </div>
            </div>
        )
    }
}

export default Team
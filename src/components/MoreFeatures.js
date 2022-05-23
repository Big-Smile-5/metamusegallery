import React from 'react'
import Constants from '../constants/constants'

const featureItem = function(data, i) {
    return (
        <div className='w-full sm:px-4 py-5 lg:w-1/3' data-aos='fade-up' key={i}>
            <div className='w-full h-full bg-primary-light shadow-lg drop-shadow-xl p-7 py-10 rounded-lg space-y-6'>
                <h1 className='text-2xl py-2 font-bold text-center text-pink-light'>
                    { data.title }
                </h1>
                <p className='w-full text-gray-300'>
                    { data.detail }
                </p>
            </div>
        </div>
    )
}

class MoreFeatures extends React.Component {

    render() {
        const featureList = Constants.MoreFeatures

        return (
            <div className='flex flex-col justify-center place-items-center py-10 sm:py-20 space-y-12'>
                <h1 className='text-white text-4xl sm:text-6xl font-bold' data-aos='fade-up'>More Features</h1>
                <div className='flex items-stretch flex-wrap'>
                    { featureList.map((data, i) => {
                        return featureItem(data, i)
                    })}
                </div>
            </div>
        )
    }
}

export default MoreFeatures
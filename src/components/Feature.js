import React from 'react'
import Constants from '../constants/constants'

const featureItem = function (data, i) {
    return (
        <div className={`flex flex-wrap items-start w-full lg:${i % 2 === 1 ? 'flex-row-reverse' : ''}`} data-aos='fade-up' key={i}>
            <div className='flex flex-col w-full space-y-10 lg:w-1/2'>
                <div className='flex items-start'>
                    <h1 className='text-pink-normal text-6xl sm:text-8xl font-bold leading-none'>{ i + 1 }</h1>
                    <h2 className='text-pink-light text-2xl  sm:text-3xl font-medium'>
                        { data.title }
                    </h2>
                </div>
                <p className='text-white text-lg font-medium'>
                    { data.detail }
                </p>
            </div>
            <div className='w-full lg:w-1/2 px-5 sm:px-20'>
                <img src={ data.image } alt='feature_img' />
            </div>
        </div>
    )
}

class Feature extends React.Component {

    render() {
        const featureList = Constants.Features
        
        return (
            <div className='flex flex-col justify-center space-y-8 py-12 pb-20'>
                <h1 className='text-white text-4xl sm:text-6xl font-bold text-center sm:text-left sm:px-8'>Features</h1>
                <div className='flex flex-col'>
                    { featureList.map((data, i) => {
                        return featureItem(data, i)
                    })}
                </div>
            </div>
        )
    }
}

export default Feature
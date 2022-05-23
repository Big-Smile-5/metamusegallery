import React from 'react'
import Constants from '../constants/constants'

const roadMapItem = function(data, i) {

    let direction1, direction2
    direction1 = 'left'
    direction2 = 'right'
    if(i % 2 === 1) {
        direction1 = 'right'
        direction2 = 'left'
    }

    return (
        <div className={`timeline-container sm:p-3 my-5 lg:my-10`} key={i}>
            <div className={`flex ${i % 2 === 1?'flex-row-reverse':''} flex-wrap w-full items-center`}>
                <h1 className={`w-full lg:w-1/2 px-2 py-4 text-2xl text-white ${direction1} sm:px-6 sm:py-5 sm:text-3xl date`}
                    data-aos='fade-down'>
                    { data.date }
                </h1>
                <ul className={`w-full lg:w-1/2 px-2 sm:px-6 text-gray-300 ${direction2} content`} data-aos='fade-up'>
                    { data.contents.map((item, j) => {
                        return (
                            <li key={j}>
                                <p>
                                    { item }
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

class Roadmap extends React.Component {

    render() {
        const roadmapAdapter = Constants.Roadmap

        return (
            <div className="w-full flex flex-col place-items-center space-y-2 sm:space-y-5 lg:space-y-12 roadmap-background" id="roadmapSection">
                <h1 className="text-white text-4xl sm:text-6xl font-bold" data-aos='fade-up'>
                    Road Map
                </h1>
                <div className="timeline">
                    { roadmapAdapter.map((data, i) => {
                        return roadMapItem(data, i)
                    })}
                </div>
            </div>
        )
    }
}

export default Roadmap

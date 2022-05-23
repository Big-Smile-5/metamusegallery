import React from 'react'

class Videos extends React.Component {

    render() {
        return (
            <div className='flex flex-wrap pb-6 px-5 desktop-min:space-y-5 sm:pb-16'>
                <div className='w-full sm:px-5 lg:w-1/2'>
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/4MDPHNKaEok"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullscreen=""></iframe>
                </div>
                <div className='w-full sm:px-5 lg:w-1/2'>
                    <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/qBVXT0vK-RE"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullscreen=""></iframe>
                </div>
            </div>
        )
    }
}

export default Videos
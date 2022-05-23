import React from 'react'
import Constants from '../constants/constants'

class Faq extends React.Component {

    constructor() {
        super()

        this.setActive = this.setActive.bind(this)
        this.accordionItem = this.accordionItem.bind(this)
        this.state = {
            accordion: []
        }
    }

    setActive(i) {
        let newAccordion = [...this.state.accordion]

        newAccordion[i].isOpen = !newAccordion[i].isOpen
        this.setState({
            ...this.state,
            accordion: newAccordion
        })
    }

    accordionItem (data, i) {
        return (
            <div className='w-full h-auto flex flex-col bg-primary-light rounded-lg px-5' data-aos='fade-right' key={i}>
                <button className={`relative w-full font-bold text-md sm:text-lg text-left text-white py-4 bg-transparent
                                    accordion ${data.isOpen === true?'accordion-active':''}`}
                    onClick={ () => this.setActive(i) }
                >
                    { data.title }
                </button>
    
                <div className={`overflow-hidden transition-all  duration-500 ${data.isOpen === true?'max-h-96':'max-h-0'}`}>
                    <p className='text-white pb-2 text-base text-left'>
                        { data.detail }
                    </p>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let newAccordion = Constants.FAQ.map((data) => {
            return (
                {
                    title: data.title,
                    detail: data.detail,
                    isOpen: false
                }
            )
        })
        this.setState({
            ...this.state,
            accordion: newAccordion
        })
    }

    render() {
        return (
            <div className='relative flex justify-center place-items-center py-10 sm:py-20'>
                <div className='flex flex-col w-full lg:w-4/5 z-10 space-y-12 place-items-center'>
                    <h1 className='text-white text-center text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest'
                        data-aos='fade-down'>
                        Frequently Asked Question
                    </h1>
                    <div className='w-full space-y-2 md:space-y-3'>
                        { this.state.accordion.map((data, i) => {
                            return this.accordionItem(data, i)
                        }) }
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq
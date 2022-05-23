import React from 'react'

export default class Trailer extends React.Component {

    componentWillMount() {
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");

        script1.src = "https://fast.wistia.com/embed/medias/iqjfy98kq3.jsonp";
        script1.async = true;

        script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
        script2.async = true;

        document.body.appendChild(script1);
        document.body.appendChild(script2);
    }

    render() {
        return (
            <div className="wistia_responsive_padding relative w-full h-auto border-8 border-red-light">
                <div className="wistia_responsive_wrapper h-fit w-full top-0 left-0">
                    <div className="wistia_embed wistia_async_iqjfy98kq3 videoFoam=true relative w-full h-fit">
                        <div className="wistia_swatch absolute h-fit w-full top-0 left-0 opacity-0 overflow-hidden transition-opacity duration-200">
                            <img src="https://fast.wistia.com/embed/medias/iqjfy98kq3/swatch" className="w-full h-full object-contain" style={{
                                filter: "blur(5px)"
                            }} alt="" aria-hidden="true" onLoad="this.parentNode.style.opacity=1;" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
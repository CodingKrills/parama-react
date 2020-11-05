import React, { Component } from "react";


var apple= 'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/appleStore.png';


export default class FooterUpper extends Component {
    render() {
        return (
            <>
                <div className="bg-dark p-4">
                    <div className="row mx-4">
                        <div className="col-4">
                            <p className="text-white font-weight-bold">DOWNLOAD OUR APP</p>
                            <div className="d-flex"><a className="dl-anc" aria-label="Google Play Store"
                                // href="https://play.google.com/store/apps/details?id=com.fsn.nds" rel="noopener"
                                // target="_blank"
                                >
                                <div className="">
                                    <img className="download-app-img css-1mbq8mn e1jjwn40"
                                        src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/googlePlay.png"
                                        height="33" width="112" loading="lazy" alt="Google Play Store" />
                                </div>
                            </a>
                                <a className="dl-anc" aria-label="Apple App Store"
                                    // href="https://itunes.apple.com/in/app/nykaa-design-studio/id1439872423?mt=8" rel="noopener"
                                    // target="_blank"
                                    >
                                    <div className="pl-4">
                                        <img className="download-app-img css-1mbq8mn e1jjwn40"
                                            src={apple}
                                            height="33" width="112" loading="lazy" alt="Apple App Store" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-4">
                            <p className="text-white font-weight-bold text-center">SUBSCRIBE TO NEWSLETTER</p>
                            <div className="">
                                <form className="d-flex"><input className="form-control bg-transparent rounded-0"
                                placeholder="enter your email" aria-label="enter your email"  /><button
                                className="btn bg-transparent border rounded-0 text-secondary">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="">
                                <p className="text-white font-weight-bold text-center">FOR QUERIES</p>
                                <div className="text-center text-white font-weight-bold">
                                    <p className="m-auto"><small>+91-7278555963</small></p>
                                    <p className="m-auto"><small>support@paramafashion.com</small></p>
                                    <p className="m-auto"><small>(Monday to Saturday, 10AM - 7PM)</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
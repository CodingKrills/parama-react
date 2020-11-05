
import React, { Component } from 'react'

export default class FooterMiddle extends Component {
    render() {
        return (
            <>
                <div className="bg-light p-4">
                    <div className="row mx-4">
                        <div className="col-2">
                            <p className="font-weight-bold text-uppercase">Who are we</p>
                            <ul className="lk-list">
                                <li className="lk-itm"><a className="lk-anc">About Us</a></li>
                                <li className="lk-itm"><a className="lk-anc">Careers</a></li>
                                <li className="lk-itm"><a className="lk-anc">Press</a></li>
                            </ul>
                        </div>
                        <div className="col-6 lk-section-2">
                            <p className="font-weight-bold text-uppercase">Help</p>
                            <ul className="lk-list">
                                <li className="lk-itm"><a className="lk-anc">Contact Us</a></li>
                                <li className="lk-itm"><a className="lk-anc">Shipping &amp; Return Policy</a></li>
                                <li className="lk-itm"><a className="lk-anc">Help Center</a></li>
                                <li className="lk-itm"><a className="lk-anc">Terms &amp;Conditions</a></li>
                                <li className="lk-itm"><a className="lk-anc">Privacy Policy</a></li>
                                <li className="lk-itm"><a className="lk-anc">Privacy Policy for EU Residents</a></li>
                                <li className="lk-itm"><a className="lk-anc">Responsible Disclosure</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <p className="font-weight-bold text-uppercase">Quicklinks</p>
                            <ul className="lk-list">
                                <li className="lk-itm"><a className="lk-anc">Offers</a></li>
                                <li className="lk-itm"><a className="lk-anc">Sitemap</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <p className="font-weight-bold text-uppercase">follow us</p>
                            <div className="lk-social">
                                <a><i className="lk-icon lk-insta"></i></a>
                                <a><i className="lk-icon lk-fb"></i></a></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

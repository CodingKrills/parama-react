import React, { Component } from 'react';

import GetCatagory from '../GetCatagory';

export default class FooterLower extends Component {
    render() {
        return (
            <>
                <div className="bg-white p-4">
                    <div className="row mx-4">
                        <div className="col-2 css-b2v7g5">
                            <div className="font-weight-bold text-uppercase">Indian Wear</div>
                                <GetCatagory />
                        </div>
                        <div className="col-2 css-b2v7g5">
                            <div className="font-weight-bold text-uppercase">WESTERN WEAR</div>
                                <GetCatagory />
                        </div>
                        <div className="col-2 css-b2v7g5">
                            <div className="font-weight-bold text-uppercase">ACCESSORIES</div>
                                <GetCatagory />
                        </div>
                        <div className="col-2 css-b2v7g5">
                            <div className="font-weight-bold text-uppercase">LINGERIE</div>
                                <GetCatagory />
                        </div>
                        <div className="col-2 css-b2v7g5">
                            <div className="font-weight-bold text-uppercase">JEWELLERY</div>
                                <GetCatagory />
                        </div>
                        <div className="col-2 css-b2v7g5">
                            <div className="font-weight-bold text-uppercase">TOP BRANDS</div>
                                <GetCatagory />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

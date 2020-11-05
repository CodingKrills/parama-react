import React, { Component } from 'react';
import Logo from './Logo';

export default class NavbarUpper extends Component {
    render() {
        return (
            <>
             kliiii
                <ul className="row">
                    <li className="col-lg-4 col-6 order-0">
                        <Logo />
                    </li>
                    <li className="col-lg-3 col-6 order-lg-2 d-flex py-3">
                        <img src="../../assets/img/india.png" className="india" alt="" />
                        <button className="btn p-0">
                            <img  className="Icon_feather-phone-call" alt="" />
                            <span className="ID91-0000000000">
                                +91-0000000000
                            </span>
                        </button>
                    </li>
                    <li className="col-lg-5 col-12 order-lg-1">
                        <div className="input-group-overlay d-flex py-2">
                            <div className="input-group-prepend border rounded-left">
                                {/*<div ngbDropdown className="d-inline-block">
                                    <button className="btn h-100" id="dropdownBasic1" ngbDropdownToggle>
                                        <div className="d-flex">
                                            <p className="m-auto"> All Categories</p>
                                            <p className="material-icons m-auto">
                                                arrow_drop_down
                            </p>
                                        </div>
                                    </button>
                                    <div ngbDropdownMenu aria-labelledby="dropdownBasic1" className="catmenu">
                                        <div className="container" *ngFor="let catagory of catagories">
                            <a ngbDropdownItem href="#" className="my-2" (click)="$event.preventDefault()">
                                <div className="d-flex justify-content-between">
                                            <div className="d-flex ">
                                                <img src="../../assets/img/bbb.png" height="30px" width="30px" alt="">
                                                    <p className="mb-auto mx-4" style="font-size: 23px;">{{ catagory }}</p>
                                    </div>
                                                <div className="text-dark">
                                                    <span className="material-icons"
                                                        style="font-size: 30px; color: rgb(223, 219, 219);">
                                                        navigate_next
                                        </span>
                                                </div>
                                            </div>
                            </a>
                                    </div>
                                </div>
                                </div> */}
                            </div>
                            <input className="form-control appended-form-control search-list border-right-0" type="text"
                                placeholder="Search entire store here...." />
                            <div className="input-group-append-overlay">
                                <span className="input-group-text search-icon border-left-0">
                                    <img height="35px" alt="" />
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </>
        )
    }
}

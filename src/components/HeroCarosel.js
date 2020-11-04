import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel'

export default class HeroCarosel extends Component {
    render() {
        return (
            <div>






                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.abetterlemonadestand.com/wp-content/uploads/2018/11/Print-on-Demand-Product-Ideas-for-Ecommerce.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.abetterlemonadestand.com/wp-content/uploads/2018/11/Print-on-Demand-Product-Ideas-for-Ecommerce.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://blog.boxme.asia/wp-content/uploads/2020/08/Print-on-demand-6-1024x465.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>





            </div>
        )
    }
}

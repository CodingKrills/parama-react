import React, { Component } from 'react';
import  FooterUpper  from './Footer/FooterUpper';
import FooterMiddle from './Footer/FooterMiddle';
import FooterLower from './Footer/FooterLower';
import CopyRight from './Footer/CopyRight';

export default class Footer extends Component {
    render() {
        return (
            <>
                <FooterUpper />
                <FooterMiddle />
                <FooterLower />
                <CopyRight />
            </>
        )
    }
}

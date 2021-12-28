import React from 'react'
import FooterFirstSection from './FooterFirstSection'
import FooterSecondSection from './FooterSecondSection'
import FooterThirdSection from './FooterThirdSection'

const Footer = () => {
    return (
        <div className='container-fluid mt-5 bg-dark'>
            <div className='container text-primary'>
                <div className='row'>

                <div className='col-lg-4 mt-5'>
                <FooterFirstSection />
                </div>

                <div className='col-lg-4 mt-5'>
                <FooterSecondSection />
                </div>

                <div className='col-lg-4 mt-5'>
                <FooterThirdSection />
                </div>

                </div>
            </div>
        </div>
    )
}

export default Footer

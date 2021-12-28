import React from 'react'
import Contact from './Contact'
import Maps from './Maps'

const Combine2 = () => {
    return (
        <div className='container-fluid mt-5' style={{backgroundColor:'grey',paddingBottom:'1%'}}>
            <div className='row'>
            <div className='col-lg-6 mt-5'>
            <Contact />
            </div>
            <div className='col-lg-6 mt-5'>
                <Maps />
            </div>
            </div>
        </div>
    )
}

export default Combine2

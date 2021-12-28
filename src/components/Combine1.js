import React from 'react'
import ImagesComponent from './ImagesComponent'
import Skills from './Skills'

const Combine1 = () => {
    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
            <div className='col-lg-5'>
                <ImagesComponent />
            </div>
            <div className='col-lg-7'>
                <Skills />
            </div>
            </div>
        </div>
    )
}

export default Combine1

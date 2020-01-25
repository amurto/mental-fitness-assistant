import React from 'react';

import './Tests.css';
import BDI from './tests/Test1';
import HAnxiety from './tests/Test2';
import Schiz from './tests/Test3';
import Bipolar from './tests/Test4';

const Tests = () => {
    return (
        <div className="wrapper-container">
            <div className="container container-card">
                <BDI />
                <HAnxiety />
                <Schiz />
                <Bipolar />
            </div> 
        </div>  
    )
}
export default Tests;
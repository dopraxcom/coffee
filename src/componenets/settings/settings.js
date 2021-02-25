import React from 'react';
import {DMS} from '../../assets/js/default/dark-mode-switch';

function Settings(){
    DMS();
    return(
    <div className="card settings-card">
        <div className="card-body">
            <div className="card settings-card">    
                <div className="card-body">
                    <div className="single-settings d-flex align-items-center justify-content-between">
                        <div className="title"><i className="lni lni-night"></i><span className="m-2">حالت تاریک</span></div>
                            <div className="data-content">
                                <div className="toggle-button-cover">
                                    <div className="button r">
                                    <input className="checkbox" id="darkSwitch" type="checkbox"/>
                                    <div className="knobs"></div>
                                    <div className="layer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    );
};

export default Settings;
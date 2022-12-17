import React from 'react';
import { withStorageListener } from './withStorageListener';
import './changeAlert.css';


function ChangeAlert ({ show, toggleShow}) {
    if(show){
        return (
            <div className='changeAlert'>
                <button
                 className='bton'
                 type="button"
                 onClick={()=> {
                    toggleShow(false); 
                }}
                 >
                    Recargar informacion
                    </button>
            </div>
        );
    } else{
        return null;
    }
    
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)


export { ChangeAlertWithStorageListener }





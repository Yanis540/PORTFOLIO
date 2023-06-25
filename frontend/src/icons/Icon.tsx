import React from 'react';

import clsx from 'clsx';
import {FiGithub,FiTwitter,FiLinkedin} from "react-icons/fi"
import {PiGithubLogo,PiTwitterLogo,PiLinkedinLogo} from "react-icons/pi"
interface IconProps {
    type:"twitter"|"github"|"linkedin"|"external"
    className ? : string 
};

function Icon({type,className=""}:IconProps) {
    const ChoosenIcon = ()=>{
        switch(type){
            case "twitter":
                return PiTwitterLogo
            case "github":
                return PiGithubLogo
            case "linkedin":
                return PiLinkedinLogo
            default :
                return PiLinkedinLogo
        }
    }
    const SelectedIcon = ChoosenIcon()
    return (
        <h2 className='text-whitish hover:text-greenish-blue  cursor-pointer hover:translate-y-[-20px] duration-300 ease-in-out'>
           <SelectedIcon size={24} /> 
        </h2>
    );
};

export default Icon;
import React from 'react';

import {FiGithub,FiTwitter,FiLinkedin} from "react-icons/fi"
import {PiGithubLogo,PiTwitterLogo,PiLinkedinLogo} from "react-icons/pi"
import {BiLinkExternal} from "react-icons/bi"
interface IconProps {
    name:IconName
    className ? : string 
};
export type IconName = "twitter"|"github"|"linkedin"|"external"

function Icon({name,className=""}:IconProps) {
    const ChoosenIcon = ()=>{
        switch(name){
            case "twitter":
                return PiTwitterLogo
            case "github":
                return PiGithubLogo
            case "linkedin":
                return PiLinkedinLogo
            case "external":
                return BiLinkExternal
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
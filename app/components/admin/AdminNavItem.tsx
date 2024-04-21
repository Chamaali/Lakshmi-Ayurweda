'use client'

import {IconBase, IconType} from "react-icons"

interface AdminNavItemProps{
    selected?: boolean;
    icon: IconType;
    label: string;
}

const adminNavItem: React.FC<AdminNavItemProps> = ({selected, icon:Icon, label}) => {
    return (
      
            <div className={`flex items-center p-2 ${selected ? 'text-slate-50':'border-transparent'}`}>
                
                <Icon size={20}/>
                <div className="font-medium text-center break-normal text-black">
                    {label}   
                </div> 
            </div>
        
        
    )
}

export default adminNavItem;
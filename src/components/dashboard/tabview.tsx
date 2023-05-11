import { Drawer, Tab, Tabs } from '@mui/material'
import React, { Dispatch, SetStateAction, useState } from 'react'
import MobileContainer from '../mobileContainer/MobileContainer';
import TasksIcon from '../../../public/assets/icons/TasksIcon.svg'
import AgendaIcon from '../../../public/assets/icons/AgendaIcon.svg'
import ThirdIcon from '../../../public/assets/icons/ThirdIcon.svg'
import NotificationIcon from '../../../public/assets/icons/NotifacationIcon.svg'
import SearchIcon from '../../../public/assets/icons/SearchIcon.svg'
type Props = {
    page:Number,
    setPage:Dispatch<SetStateAction<Number>>,
}

const tabview = ({page,setPage}: Props) => {
    const tabs =[
        {
            id:0,
            icon:<AgendaIcon/>,
            name:'Agenda',
        },
        {
            id:1,
            icon:<TasksIcon/>,
            name:'Tasks',
        },
        {
            id:2,
            icon:<ThirdIcon/>,
            name:'',
        },
        {
            id:3,
            icon:<NotificationIcon/>,
            name:'Notification',
        },
        {
            id:4,
            icon:<SearchIcon/>,
            name:'Search',
        },
    ]
    

    const handleChange = ( newValue: number) => {
      setPage(newValue);
    };
  return (
    <MobileContainer>
        
                    <Tabs
                    value={page}
                    sx={{
                        position:'absolute',
                        bottom:0,
                        bgcolor:'#fff',
                        width:'375px',
                        
                        
                    }}>
                        {tabs.map((item:any)=>(
                            <Tab
                            onClick={()=>handleChange(item.id)}
                            key={item.id}
                            icon={item.icon}
                            label={item.name}
                            sx={{
                                textTransform:'none',
                                width:'75px',
                                color:'grey.300',
                                minWidth:'75px',
                                fontSize:'8px',
                                px:'0px',
                                ':active':{
                                    color:'primary',

                                }
                            }}
                            />
                        ))}
                    </Tabs>
        
    </MobileContainer>
  )
}

export default tabview
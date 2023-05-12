import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import ArrowLeftIcon from '../../../public/assets/icons/ArrowLeft.svg'
import BurgerMenuIcon from '../../../public/assets/icons/BurgerMenu.svg'
import { IconButton, Typography } from '@mui/material'
import Link from 'next/link'
type Props = {
    page:Number,
}

const Header = ({page}: Props) => {
   const [label,setLabel]=useState<String>('')
   useEffect(()=>{
        const newItem = tabs[+page]
        const newLabel:String = newItem.name
        setLabel(newLabel)
   },[page])
    const tabs =[
        {
            id:0,
            name:'Agenda',
        },
        {
            id:1,
            name:'Tasks',
        },
        {
            id:2,
            name:'Add',
        },
        {
            id:3,
            name:'Notification',
        },
        {
            id:4,
            name:'Search',
        },
    ]
  return (
    <Grid
    container
    display={'flex'}
    px={'12px'}
    justifyContent={'space-between'}>
            <Grid
            item>
                <Link href={'../'}>
                    <IconButton>
                        <ArrowLeftIcon/>
                    </IconButton>
                </Link>
            </Grid>
            <Grid
            item>
                <Typography>
                    {label}
                </Typography>
            </Grid>
            <Grid
            item>
                <IconButton>
                    <BurgerMenuIcon/>
                </IconButton>
            </Grid>
    </Grid>
  )
}

export default Header
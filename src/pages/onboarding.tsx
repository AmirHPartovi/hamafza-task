import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import MobileContainer from '../components/mobileContainer/MobileContainer'
import OnboardinIcon0 from '../../public/assets/icons/onboarding0.svg'
import OnboardinIcon1 from '../../public/assets/icons/onboarding1.svg'
import OnboardinIcon2 from '../../public/assets/icons/onboarding2.svg'
import OnboardinIcon3 from '../../public/assets/icons/onboarding3.svg'
import OnboardinIcon4 from '../../public/assets/icons/onboarding4.svg'
import { useState } from 'react'
import Link from 'next/link'
type Props = {}

const Onboarding = (props: Props) => {
  const[studyLevel,setStudyLevel]=useState<Number>(0)

  const level = [
    {
      id:0,
      name:'Year 7-9',
      icon:<OnboardinIcon0/>,
      color:'info.100',
    },
    {
      id:1,
      name:'Year 10-11',
      icon:<OnboardinIcon1/>,
      color:'info.200',
    },
    {
      id:2,
      name:'Year 12-133',
      icon:<OnboardinIcon2/>,
      color:'info.300',
    },
    {
      id:3,
      name:'Bachelors',
      icon:<OnboardinIcon3/>,
      color:'info.400',
    },
    {
      id:4,
      name:'Masters',
      icon:<OnboardinIcon4/>,
      color:'info.500',
    },
]
const handleLevel =(id:Number)=>{
  setStudyLevel(id);
}
  return (
    <MobileContainer>
        <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        pt={'72px'}>
          
            <Typography
            variant='h3'
            alignSelf={'start'}
            ml={'40px'}
            >
                Education level
            </Typography>
            <Typography
            color={'grey.100'}
            fontSize={'1rem'}
            textAlign={'start'}
            mx={'40px'}
            mt={'12px'}>
            Create a unique emotional story that describes better than words
            </Typography>
            {level.map((item:any) =>(
                <Grid
                key={item.id}>
                  <Link href={'/dashboard'}>
                  <Button
                    variant='outlined'
                    onClick={()=>handleLevel(item.id)}
                    sx={{
                      borderColor:`${item.color}`,
                      width:'311px',
                      height:'88px',
                      borderRadius:'12px',
                      color:'grey.200',
                      margin:'8px',
                      alignItems:"center",
                      justifyContent:'flex-start',
                      bgcolor:'#fff',
                      
                    }}
                    >
                      {item.icon}
                      {item.name}
                    </Button>
                  </Link>
                </Grid>
            ))}
            <Grid
            alignSelf={'end'}
            mx={'40px'}
            item>
              <Link href={'/dashboard'}>
                <Button>
                  Skip
                </Button>
              </Link>
            </Grid>
        </Grid>
    </MobileContainer>
  )
}

export default Onboarding
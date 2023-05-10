import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import MobileContainer from '../components/mobileContainer/MobileContainer'
import Hero from '../../public/assets/photo/Hero.svg'
import SwipeIcon from '../../public/assets/icons/swipeIcon.svg'
import Link from 'next/link'

type Props = {}

const start = (props: Props) => {
  return (
    <MobileContainer>
    <Grid 
    container 
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    width={'375px'}>
            <Grid item mt={'97px'}mb={'30px'}>
                <Hero/>
            </Grid>
            <Grid
                item
                container
                bgcolor={'#fff'}
                border={'1px solid'}
                borderRadius={'24px'}
                borderColor={'divider'}
                height={'375px'}
                mt={'64px'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                alignItems={'center'}
                py={'24px'}
                >
                    <Grid
                    item>
                        <SwipeIcon/>
                    </Grid>
                    <Grid
                    item>
                            <Typography
                            variant='h3'
                            textAlign={'center'}>
                                    Task Manager
                            </Typography>
                            <Typography
                            color={'grey.100'}
                            fontSize={'1rem'}
                            textAlign={'center'}
                            mx={'40px'}
                            mt={'12px'}>
                                    Create a unique emotional story that describes better than words
                            </Typography>
                    </Grid>
                    <Grid
                    item>
                            <Link href={'/onboarding'}>
                                <Button
                                  variant='contained'
                                  sx={{
                                    width:'250px',
                                    height:'56px',
                                    textTransform:'none',
                                    borderRadius:'12px'
                                  }}>
                                    Get Started
                                </Button>
                              </Link>
                    </Grid>
            </Grid>
            
    </Grid>

  </MobileContainer>
  )
}

export default start
import Grid from '@mui/material/Grid'
import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode,
}

const MobileContainer = ({children}: Props) => {
  return (
    <Grid
    container
    display={'flex'}
    alignItems={'center'}
    justifyContent={'center'} >
              <Grid
              item
              container
              width={'375px'}
              height={'750px'}
              bgcolor={'background.default'}>
                <main>
                    {children}
                </main>
              </Grid>
     </Grid>
  )
}

export default MobileContainer
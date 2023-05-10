import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import MobileContainer from '../components/mobileContainer/MobileContainer'

type Props = {}

const onboarding = (props: Props) => {
  return (
    <MobileContainer>
        <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}>
            <Typography
            variant='h3'
            textAlign={'left'}>
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
        </Grid>
    </MobileContainer>
  )
}

export default onboarding
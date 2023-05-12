import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import MobileContainer from '../components/mobileContainer/MobileContainer'
import DashboardLayout from '../components/dashboard/dashboadLayout'
import { ReactNode, useEffect, useState } from 'react'
import Agenda from '../components/dashboard/dashComponents/agenda'
import Tasks from '../components/dashboard/dashComponents/tasks'
import Add from '../components/dashboard/dashComponents/add'
import Notification from '../components/dashboard/dashComponents/notification'
import Search from '../components/dashboard/dashComponents/serch'
type Props = {}

const Dashboard = (props: Props) => {
    const [page, setPage] = useState<Number>(0);
    const dashChildren=[
        {
            id:0,
            component:<Agenda/>
        },
        {
            id:1,
            component:<Tasks/>
        },
        {
            id:2,
            component:<Add/>
        },
        {
            id:3,
            component:<Notification/>
        },
        {
            id:4,
            component:<Search/>
        },
    ]
    const [component,setComponent]=useState<ReactNode>(<Agenda/>)
    useEffect(()=>{
        const comp = dashChildren[+page].component
        setComponent(comp)
    },[page])
  return (
    <MobileContainer>
        <DashboardLayout page={page}setPage={setPage}>
            {component}
        </DashboardLayout>
    </MobileContainer>
  )
}

export default Dashboard
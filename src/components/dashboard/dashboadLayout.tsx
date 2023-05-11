import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import MobileContainer from '../mobileContainer/MobileContainer'
import Header from './header'
import TabView from './tabview'
type Props = {
    children: ReactNode,
    page:Number,
    setPage:Dispatch<SetStateAction<Number>>,
}

const dashboadLayout = ({children,page,setPage}: Props) => {
  return (
    <MobileContainer>
        <Header page={page}/>
            <main>
                {children}
            </main>
        <TabView page={page}setPage={setPage}/>
    </MobileContainer>
  )
}

export default dashboadLayout


import { Outlet } from 'react-router-dom'
import OutSideNavBar from '../components/OutSideNavBar'
import OutSideFooter from '../components/OutSideFooter'
function OutsideLayout() {
  return (
    <div className='flex flex-col w-full'>
        <OutSideNavBar/>
        <Outlet/>
        <OutSideFooter/>
    </div>
  )
}

export default OutsideLayout
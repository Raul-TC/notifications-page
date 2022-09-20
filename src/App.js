import { useEffect, useState } from 'react';
import './App.css';
import MarkAsRead from './Components/MarkAsRead';
import Notification from './Components/Notification';
import Notifications from './Components/Notifications';

function App() {
  const [notificationCount, setNotificationCount] = useState(3)
  const [data,setData] = useState(null)
  useEffect(() => {
   
    fetch("data.json").then(res => res.json()).then(el => setData(el))
  }, [])
  
 return(
  <>
  <header className='flex justify-between h-[80px] w-[90%] m-auto items-center '>
    <Notifications notificationCount={notificationCount}/>
    <MarkAsRead setNotificationCount={setNotificationCount}/>
  </header>
    <main>
  <Notification name='Mark Webber' imageUser="Assets/avatar-mark-webber.webp" Children={<>
  <p>reacted to your recent post <span>My first tournament today!</span></p>
  </>} />
    </main>
  </>
  )
}

export default App;

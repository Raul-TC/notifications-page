import { useEffect, useState } from 'react';
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
  <main className='sm:bg-gray-100 h-screen flex items-center justify-center'>

  <div className='w-[90%] m-auto sm:max-w-[768px] bg-white sm:rounded-xl'>
  <header className='flex justify-between h-[80px] w-[95%] m-auto items-center  sm:bg-white'>
    <Notifications notificationCount={notificationCount}/>
    <MarkAsRead setNotificationCount={setNotificationCount}/>
  </header>
    {data !== null ? data.map(el => <Notification key={el.id} username={el.username} date={el.date} perfilImage={el.perfilImage} notificationContent={el.notificationContent} post={el.post} notificationGroup={el.notificationGroup} notificationMessage={el.notificationMessage} message={el.message} notificationPicture={el.notificationPicture} notificationPictureUrl={el.notificationPictureUrl} newNotification={el.new} notificationCount={notificationCount}/>): <p>Loading Notifications...</p>}
    </div>
</main>
  </>
  )
}

export default App;

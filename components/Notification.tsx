import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NotificationComponent = () => {
  const notify = () => toast('Wow so easy!')

  return (
    <div className="bg-red-400">
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  )
}

export default NotificationComponent

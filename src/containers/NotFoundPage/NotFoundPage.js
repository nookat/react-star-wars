import { useLocation } from 'react-router-dom'

import img from './img/404.png'

import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  let location = useLocation()

  return (
    <>
      <img className={styles.img} src={img} alt="404. Not Found"/>
      <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </>
  )
}

export default NotFoundPage
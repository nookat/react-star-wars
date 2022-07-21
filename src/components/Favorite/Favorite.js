import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import icon from './img/bookmark.svg'
import styles from './Favorite.module.css'

const Favorite = () => {
  const [count, setCount] = useState(0)
  const storeData = useSelector(state => state.favoriteReducer)
  const storeDataLength = Object.keys(storeData).length

  useEffect(() => {
    if (storeDataLength.toString().length > 2) {
      setCount('...')
    } else {
      setCount(storeDataLength)
    }
  }, [storeDataLength])

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img
          className={styles.icon}
          src={icon}
          alt="Favorites"
        />
      </Link>
    </div>
  )
}

export default Favorite
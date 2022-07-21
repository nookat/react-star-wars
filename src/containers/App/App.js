import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '@components/Header'
import routesConfig from '@routes/routesConfig'

import styles from './App.module.css'

const App = () => {
  return (
    <>
      <Router>
        <div className={styles.wrapper}>
          <Header/>

          <Switch>
            {
              routesConfig.map(({ path, exact, component }, idx) => (
                <Route
                  key={idx}
                  path={path}
                  exact={exact}
                  component={component}
                />
              ))
            }
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App

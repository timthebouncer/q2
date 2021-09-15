import './App.css';
import React,{useState} from 'react'
import { createContext } from 'use-context-selector';
import router from "./route/route";
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
const authContext = createContext(null)

function App() {

  const AuthProvider =({children})=>{
    const [userData, setUserData] = useState(null)
    return(
      <authContext.Provider value={{userData, setUserData}}>
        {children}
      </authContext.Provider>
    )
  }


  return (

    <Router>
      <div className='app-wrapper'>
        <Switch>
          <AuthProvider>
            {router.map((item, i) => {
              return <Route key={i} {...item} exact={item.exact} />
            })
            }
          </AuthProvider>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
export {authContext}

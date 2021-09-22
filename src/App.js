import './App.css';
import React,{useState, Suspense} from 'react'
import { createContext } from 'use-context-selector';
import routes from "./route/route";
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'



const authContext = createContext(null)
function App() {

  const AuthProvider =({children})=>{
    const [userData, setUserData] = useState(null)
    const [token, setToken] = useState(null)
    return(
      <authContext.Provider value={{userData, setUserData, token,setToken}}>
        {children}
      </authContext.Provider>
    )
  }


  return (

    <Router>
      <div className='app-wrapper'>
        <Suspense fallback={"Loading..."}>
          <AuthProvider>
        <Switch>
            {routes.map((item, i) => {
              return(
                <Route key={i} {...item} path={item.path} exact={item.exact} component={item.routes? ()=>{
                  return item.routes.map((route,idx)=>{
                    return(
                      <Switch>
                        <Route key={idx} path={route.path} component={route.component} />
                      </Switch>
                    )
                  })
                }:item.component} />
              )
            })}
        </Switch>
          </AuthProvider>
        </Suspense>
      </div>
    </Router>

  );
}

export default App;
export {authContext}

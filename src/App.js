import './App.css';
import React,{useState, Suspense} from 'react'
import { createContext } from 'use-context-selector';
import routes from "./route/route";
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
    <AuthProvider>
    <Router>
      <div className='app-wrapper'>
        <Suspense fallback={"Loading..."}>
        <Switch>
            {routes.map((item, i) => {
              return(
                <Route key={i} {...item} path={item.path} exact={item.exact} />
              )
            })}
        </Switch>
        </Suspense>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
export {authContext}

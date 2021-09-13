import './App.css';
import React,{useState,createContext} from 'react'
import router from "./route/route";
import {Switch, Route, Link, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Layout from '../src/component/Layout/layout'


const AuthToken = createContext(null)
function App() {

  const[auth, setAuth] = useState(false)
  const [userInfo, setUserInfo]=useState(null)

  let token =localStorage.getItem('token')


  let providerValue={
    setAuth,
    setUserInfo
  }

  return (

    <Router>
      <div className='app-wrapper'>
        <Switch>
          {router.map((item, i) => {
            return <Route exact={item.exact} path={item.path} key={i} render={(props)=>{
              if(!item.auth){
                return(
                <AuthToken.Provider value={providerValue}>
                <item.component/>
                </AuthToken.Provider>
                )
              }else if(token){
                return (
                  <AuthToken.Provider value={providerValue}>
                      <Layout>
                          <item.component/>
                      </Layout>
                  </AuthToken.Provider>
                )
              }
                return <Redirect to={'/404'} />
            }} />
          })
          }

        </Switch>
      </div>
    </Router>

  );
}

export default App;
export {AuthToken}

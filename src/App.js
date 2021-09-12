import './App.css';
import React,{useState,createContext, useEffect} from 'react'
import router from "./route/route";
import {Switch, Route, Link, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Service from './api/api'
import Layout from '../src/component/Layout/layout'
import axios from "axios";

// const AuthToken = createContext(null)
const GetUserInfo = createContext(null)
function App() {
        const [userInfo, setUserInfo]=useState('')
  // const[auth, setAuth] = useState(false)
    let token =localStorage.getItem('token')
    useEffect(()=>{
        let config={
           headers: {"Authorization" : `Bearer ${token}`}
        }
       Service.Auth.userAuth(config)
           .then((res)=>{
               console.log(res)
               setUserInfo(res.data.data)
           })
    },[])


  return (

    <Router>
      <div className='app-wrapper'>
        <Switch>
          {router.map((item, i) => {
            return <Route exact={item.exact} path={item.path} key={i} render={(props)=>{
              if(!item.auth){
                return(
                //<AuthToken.Provider value={setAuth}>
                <item.component/>
                //</AuthToken.Provider>
                )
              }else if(true){
                return (
                    <GetUserInfo.Provider value={userInfo}>
                        <Layout>
                            <item.component/>
                        </Layout>
                    </GetUserInfo.Provider>
                )
              }else {
                return <Redirect to={'/404'} />
              }
            }} />
          })
          }

        </Switch>
      </div>
    </Router>

  );
}

export default App;
// export {AuthToken}
export {GetUserInfo};

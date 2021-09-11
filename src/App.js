import './App.css';
import React,{useState,createContext, useEffect} from 'react'
import router from "./route/route";
import {Switch, Route, Link, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Service from './api/api'
import Layout from '../src/component/Layout/layout'
import axios from "axios";

const AuthToken = createContext(null)
function App() {

  const[auth, setAuth] = useState('')
  let token = localStorage.getItem('token')

    // useEffect(()=>{
    //     let config={
    //         headers: {
    //             'Authorization': token
    //         },
    //     }
    //    Service.Auth.userAuth(config)
    //        .then((res)=>{
    //            console.log(res)
    //        })
    //
    // },[token])


  return (

    <Router>
      <div className='app-wrapper'>
        <Switch>
          {/*{router.map((route, index) => (*/}
          {/*   <Route*/}
          {/*    key={index}*/}
          {/*    path={route.path}*/}
          {/*    component={route.component}*/}
          {/*    exact={route.exact || true}*/}
          {/*  />*/}
          {/*))}*/}

          {router.map((item, i) => {
            return <Route exact={item.exact} path={item.path} key={i} render={(props)=>{
              if(!item.auth){
                return(
                <AuthToken.Provider value={setAuth}>
                <item.component/>
                </AuthToken.Provider>
                )
              }else if(token){
                return (
                  <Layout>
                    <item.component/>
                  </Layout>
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
export {AuthToken}

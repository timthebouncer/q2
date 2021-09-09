import './App.css';
import React from 'react'
import router from "./route/route";
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Service from './api/api'

function App() {

  // const tryApi=()=>{
  //   const body = {
  //     username: 'aa@aa.aa', // {string} 帳號
  //     password: 'a00a', // {string} 密碼
  //   }
  //   Service.Login.userLogin(body)
  //     .then((res)=>{
  //       console.log(res)
  //     })
  //
  // }

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
              return <item.component/>
              // if(auth){
              //   return
              // }
            }} />
          })
          }
        </Switch>
      </div>
    </Router>

  );
}

export default App;

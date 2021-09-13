import React,{useEffect,useState,createContext} from 'react'
import Service from '../../../api/api'
import modal from '../../../component/modal/modal'


const IndexPage=()=>{



    let token =localStorage.getItem('token')
    useEffect(async ()=>{

            let config={
                headers: {"Authorization" : `Bearer ${token}`}
            }
          await Service.Auth.userAuth(config)
                .then((res)=>{
                    if(!res.data.data.name){
                        modal.show()
                    }
                })
    },[token])

  return(
      <div className="index-wrapper">
        首頁
      </div>

  )

}

export default IndexPage

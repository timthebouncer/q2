import React from 'react'

const UserDetail=({props})=>{
  const {history} = props
  return(
    <div>
      <h1>會員詳情</h1>
      <button onClick={()=>history.goBack()}>返回</button>
    </div>
  )
}

export default UserDetail

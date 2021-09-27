import React from 'react'

const Pagination=({totalPage})=>{

  let total = 0;

  if(totalPage.length%10 !== 0){
    total = totalPage/10 + 1
  }else {
    total = totalPage/10
  }

  return(
    <div>
      <button>{'<'}</button>
      {/*{*/}
      {/*  total.map((item,index)=>{*/}
      {/*    return(*/}
      {/*      <li>{index+1}</li>*/}
      {/*    )*/}
      {/*  })*/}
      {/*}*/}
      <a>1</a>
      <a>2</a>
      <a>3</a>
      <button>{'>'}</button>
    </div>
  )
}

export default Pagination

import React from 'react'
import './header.css'

const Header=()=>{
  return(
    <div>
      <div className='header-wrapper'>
        <div className="left-section">
          <div>LOGO</div>
          <div className="collapse-icon">收合</div>
        </div>
        <div className="right-section">
          <div className="bell-icon">鈴鐺</div>
          <div className="avatar">頭像</div>
          <div className="user-info">AA君</div>
          <div className="logout-btn">
            <button>登出</button>
          </div>
        </div>
      </div>
      <hr />
    </div>

  )

}

export default Header

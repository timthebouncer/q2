import React from 'react'
import ReactDOM from 'react-dom'


const ToolTip=({name})=>{
    return(
        <div id={'tooltipId'} className='border-2 border-white shadow-md w-28 absolute top-20 left-12 bg-white'>
            {name}
        </div>
    )
}

const showToolTip=(type,name)=>{

    if(type === "mouseenter"){
        let div = document.createElement('div')
        document.body.appendChild(div)
        ReactDOM.render(<ToolTip name={name} />, div)
    }else {
      let getTooltip =  document.getElementById('tooltipId')
        document.body.removeChild(getTooltip.parentNode)
    }
        // document.body.removeChild(div)


}

export default {
 toolTip:(type,name)=>showToolTip(type,name)
}

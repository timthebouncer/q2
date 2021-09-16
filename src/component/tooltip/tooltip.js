import React from 'react'
import ReactDOM from 'react-dom'


const ToolTip=({name,position})=>{
    // console.log(position)
    return(
        <div id={'tooltipId'} className={`border-2 border-white shadow-md w-28 bg-white fixed left${-position.left} top${-position.top}`}>
            {name}
        </div>
    )
}

const showToolTip=(type,name,e)=>{
    let element = e.target.getBoundingClientRect()
    // console.log(element)
    // console.log(e.clientY,1)
    // console.log(e.scrollTop,2)
    let left = element.left
    let top = Math.floor(e.clientY - element.top)

    if(type === "mouseenter"){
        let div = document.createElement('div')
        document.body.appendChild(div)
        ReactDOM.render(<ToolTip name={name} position={{left,top}} />, div)
    }else {
      let getTooltip =  document.getElementById('tooltipId')
        document.body.removeChild(getTooltip.parentNode)
    }
        // document.body.removeChild(div)


}

export default {
 toolTip:(type,name,e)=>showToolTip(type,name,e)
}

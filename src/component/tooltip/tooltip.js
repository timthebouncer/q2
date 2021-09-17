import React,{useState, useRef} from 'react'
import ReactDOM from 'react-dom'
import Portal from "@/component/tooltip/portal";
import styled from 'styled-components'


const StyleToolTip = styled.span`
  position: fixed;
  top: ${(p) => p.posRef.current.y}px;
  left: ${(p) => p.posRef.current.x}px;
  background: white;
  border: 1px white;
  z-index:9999;
  opacity:${(p)=>p.show}

`;

const getPoint=(el, tt, placement, space)=>{
  const pt={x:0, y:0}
  const elRect = el.getBoundingClientRect()
  switch (placement) {
    default:
      pt.x = elRect.right + space;
      pt.y = elRect.top + (el.offsetHeight  - tt.offsetHeight) / 2;
      break;
  }
  return pt
}

const ToolTip=({text, placement='right', space=10, children, ...props})=>{
  const posRef = useRef({x:0,y:0})
  const tooltipRef = useRef();
  const [show, setShow] = useState(0)
  const handleOver=(e)=> {
    setShow(1)
    posRef.current = getPoint(e.currentTarget, tooltipRef.current, placement, space)
  }
  const handleOut=()=> setShow(0)
  return <>
    {
      React.cloneElement(children,{
        onMouseOver:handleOver,
        onMouseOut: handleOut
      })
    }
    <Portal>
      <StyleToolTip ref={tooltipRef} posRef={posRef} show={show}>{text}</StyleToolTip>
    </Portal>
  </>


    // console.log(position)
    // return(
    //     <div id={'tooltipId'} className={`border-2 border-white shadow-md w-28 bg-white fixed left${-position.left} top${-position.top}`}>
    //         {name}
    //     </div>
    // )
}



// const showToolTip=(type,name,e)=>{
//     let element = e.target.getBoundingClientRect()
//     console.log(element)
//     console.log(e.target.offsetTop)
//     // console.log(e.scrollTop,2)
//     let left = element.left
//     // let top = element.bottom + 5;
//     let top = Math.floor(e.clientY - element.top)
//
//
//     if(type === "mouseenter"){
//         let div = document.createElement('div')
//         document.body.appendChild(div)
//         ReactDOM.render(<ToolTip name={name} position={{left,top}} />, div)
//     }
//
//
// }

export default ToolTip
// {
//  toolTip:(type,name,e)=>showToolTip(type,name,e)
// }

import React from "react";
import { Button} from "reactstrap";
const MODALS_STYLES={
    position:'fixed',
    top:'50%',
    left:'50%',
    width:'450px',
    height:'350px',
    transition:'3ms',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#FFF',
    zIndex:1000,
    justifyContent:'space-between'

}
const OVERLAY_STYLES={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,0.7)',
    zIndex:100
}
const BUTTON={
    cursor:'pointer'
}
export default function MayModal({open,children,onClose}) {
    if(!open)return null
    
  return (
    <>
    <div style={OVERLAY_STYLES}>
    <div style={MODALS_STYLES}>
    {children}
  <Button style={BUTTON}  outline onClick={onClose}><span className="fa fa-sign-in fa-lg"></span> Close</Button>       
       
        </div>
        </div>
        </>
  )
}

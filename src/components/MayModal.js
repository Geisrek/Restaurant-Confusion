
import React from "react";
const MODALS_STYLES={
    position:'fixed',
    top:'50%',
    left:'50%',
    width:'450px',
    height:'350px',
    transition:'0.6s',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#FFF',
    zIndex:1000,
    justifyContent:'space-between',
    padding:"5px",
    alighnContent:'center',
    animationDelay:'0.6s',
    boxSizing: 'content-box'


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
  position:'absolute',
    cursor:'pointer',
    right:0,
    top:0,
    backgroundColor:'rgb(255,255,255)',
    color:'#777777',
    fontSize:'14px',
    fontFamily:'Arial',
    outline:'white',
    boxShadow:'none',
    borderStyle:'none',
    borderRadius:'5px'
}
const Container={
 position:'absolute',
 right:'80%',
 bottom:0,
 
}
export default function MayModal({open,children,onClose}) {
    if(!open)return null
    
  return (
    <>
    <div style={OVERLAY_STYLES}>
    <div style={MODALS_STYLES}>
    <button style={BUTTON}  outline onClick={onClose}><span className="fa fa-close fa-lg" >   </span></button>       
    {children}

 
  
        </div>
        </div>
        </>
  )
}

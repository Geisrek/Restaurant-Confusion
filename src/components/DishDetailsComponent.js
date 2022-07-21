import React from "react";
import { ReactDOM } from "react";
import {Media , Card,CardBody,CardImg,CardText,CardTitle} from'reactstrap'


    
        
       
        function RenderComment({dish}){
            if(dish!= undefined){
                const diash =dish.map((item)=>{
                    
                    return(
                     
                        
                        <Media key={item.id} >
                                <Media body>
                                <p className=''>{item.comment}</p>
                                <Media heading>--{item.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))} </Media>
                                </Media>
                            </Media>
                            
                           
                    ) 
                })
              return(diash)
            }
            
        }
        function RendrDish({dish}){
            return(
            <div className='col-md-5 col-12'>
        <Card >
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
            

        </Card>
        </div>
            )
        }
    
        const  DishDetail = (props) =>{
      if(props.dish !=null){
          
   return(<div className="row">
    <RendrDish dish={props.dish}/>
    <di className="col-md-5 col-12"><RenderComment dish={props.dish.comments}/></di></div>)    
            
      }
    
   
    
}

export default DishDetail;
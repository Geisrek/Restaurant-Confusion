import React from "react";
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem,Media} from'reactstrap'
import { Link } from 'react-router-dom';
    
        
       
        function RenderComment({comments}){
            if(comments!= null){
                
                const Comment= comments.map((items)=>{
                    return(
                        <Media key={items.id} >
                                <Media body>
                                <p className=''>{items.comment}</p>
                                <Media heading>--{items.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(items.date)))} </Media>
                                </Media>
                            </Media>
                    ) 
                })
              return Comment
            }
            
        }
        function RendrDish({dish}){
            return(
            <div >
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
          
   return(
     <div className="container">
   <div className="row">
       <Breadcrumb>
           <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
           <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
       </Breadcrumb>
       <div className="col-12">
           <h3>{props.dish.name}</h3>
           <hr />
       </div>                
   </div>
   <div className="row">
       <div className="col-12 col-md-5 m-1">
           <RendrDish dish={props.dish} />
       </div>
       <div className="col-12 col-md-5 m-1">
           <RenderComment comments={props.comments} />
       </div>
   </div>
   </div>)    
            
      }
    
   
    
}

export default DishDetail;
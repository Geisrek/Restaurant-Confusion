import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem,Media, Col, Label, Button, Row,Input} from'reactstrap'
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';    
import MayModal from "./MayModal";
import { Loading } from '../redux/LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
class RenderRate extends Component{
    constructor(props){
        super(props)
        this.state={
            isOpen:false
        }
        this.toggleRate = this.toggleRate.bind(this);
       this.handleToggle=this.handleToggle.bind(this)
       
    }
    toggleRate() {
        this.setState({
          isOpen:!this.state.isOpen
        });
       
    }
    
    handleToggle(Values){
        alert(Values.firstname)
        this.toggleRate()
          //this.props.addComment(this.props.dishId, Values.rating, Values.author, Values.comment);

          this.props.postComment(this.props.dishId, Values.rating, Values.author, Values.comment);
    }
    
    render() {
   const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
  
    return(
       <div className="Modal-Sellect">
         <Stagger in>
                            <Fade in>
           <Button className="Rate" onClick={this.toggleRate}><Label className="fa fa-pencil">
            </Label>Rate Dish</Button>
                              <MayModal open={this.state.isOpen} onClose={this.toggleRate}  >
                              <LocalForm onSubmit={(Values) => this.handleToggle(Values)}>
                               < Label><h3>Submit Comment</h3></Label>
                                <Row className="fom-group">
                                    <Col md={12}>
                                <Label htmlFor="rating">Rating</Label>
                            </Col>
                            <Col>
                                <Input type="number" />
                                </Col>
                                </Row>
                               
                                <Label htmlFor="author"  >Your Name</Label>
                                <Control.text model=".author" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                               
                               
                                <Label htmlFor="comment" md={2}>Comment</Label>
                              
                                    <Control.textarea model=".comment" id="message" name="message"
                                        rows="2"
                                        className="form-control" />
                                 <Button type="submit" color="primary">Submit</Button>
                                </LocalForm>
                              </MayModal>
                              </Fade>
                              </Stagger>
                           
   </div>
    )}
}
        function RenderComment({comments, postComment, dishId}){
          
            if(comments!= null){
               
                const Comment= comments.map((items)=>{
                    return(
                        <Stagger in>
                            <Fade in>
                        <Media key={items.id} >
                                <Media body>
                               
                                <Media heading>--{items.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(items.date)))} </Media>
                                <p className=''>{items.comment}</p>
                                </Media>
                                </Media>
                                </Fade>
                                </Stagger>
                    ) 
                    
                })

              return Comment
            }
            
        }
        function RendrDish({dish}){
            return(
                <div>
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        </div>
            )
        }
    
        const  DishDetail = (props) =>{
            if (props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.errMess) {
                return(
                    <div className="container">
                        <div className="row">            
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
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
           <RenderComment comments={props.comments}
        postComment={props.postComment}
        dishId={props.dish.id} />
           <RenderRate comments={props.comments}
       postComment={props.postComment}
        dishId={props.dish.id}
        />
       </div>
   </div>
   </div>)    
            
      }
    
   
    
}

export default DishDetail;
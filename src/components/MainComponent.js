import React, { Component } from 'react';
import Header from './HeaderComponent';
import { ReactDOM } from 'react-dom/client';
import Menu from './MenuComponent';
import {DISHES}from'../sheared/dishes'
import DishDetail from'./DishDetailsComponent'
import Footer from './FooterCompnent';
class Main extends Component{
  constructor(props){
    super(props)
    this.state={
      dishes:DISHES,
      selectedDish: null
    }
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }
  



    render() {
const f=this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]

        return (
          <div >
            <Header/>
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
            <DishDetail dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]}/>
            <Footer/>
          </div>
        );
      }

}
export default Main;

import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Modal from './components/Modal';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details  from './components/Details';   
import Cart from './components/Cart/Cart';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList} ></Route>
          <Route exact path="/products" component={Products} ></Route>
          <Route exact path="/details" component={Details} ></Route>
          <Route exact path="/cart" component={Cart} ></Route>
          <Route component={Default} ></Route>
      </Switch>
      <Modal></Modal>
      </React.Fragment>
    );
  }
}

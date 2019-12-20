import React,{Component} from 'react';
import Title from './Title';
import {ProductConsumer} from '../context';
import {storeProducts} from '../data'
import Products from './Products'
export default class ProductList extends Component{
    state={
        products:storeProducts
    }
    render(){
        console.log(this.state.products)
        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products"/>
                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                    return value.products.map( product =>{
                                        return <Products  key={product.id} product={product}/>;
                                    })
                                }}
                            </ProductConsumer>


                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }
}


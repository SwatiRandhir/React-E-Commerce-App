import React from 'react'
import styled from 'styled-components'
export default function CartItem({item,value}) {
    const {id,title,img,price,total,count}=item;
    const {increment,decrement,removeItem}=value;

    // console.log(item,value);
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:"5rem"}} className="img-fluid" alt=" "></img>

            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg">
                    {title}
                </span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg">
                    ${price}
                </span>                

            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-fluid">
                <div>
                    <button className="btn btn-black mx-auto " style={{border:"1px solid black"}} onClick={()=>decrement(id)}>-
                    </button>
                    <span className=" mx-2 ">
                        {count}
                    </span>
                    <button className="btn btn-black mx-auto " style={{border:"1px solid black"}} onClick={()=>increment(id)}>+
                    </button>
                </div>    
            </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" style={{color:"red"}} onClick={()=>removeItem(id)} >
                <i className="fas fa-trash"></i>
            </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <strong>item total:${total}</strong></div>    

        </div>
    )
}



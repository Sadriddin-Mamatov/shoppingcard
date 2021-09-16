import React from 'react';
import {useCart} from "react-use-cart";



const Itemcard = ({title, desc, price, img,item}) => {
    const {addItem} =useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={img} alt="haha" className="card-img-top img-fluid"/>
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">$ {price}</h5>
                    <p className="card-text">{desc}</p>
                    <button className="btn btn-success" onClick={() => addItem(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Itemcard;
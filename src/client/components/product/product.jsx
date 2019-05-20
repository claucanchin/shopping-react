import React from 'react';

import styles from './style.scss';

import Cart from '../cart/cart';

class Product extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    addToCart(e) {
        console.log(Math.random());
    }

    render() {
        let product = this.props.clickedItem.map((item, index) => {

            return  <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <button type="button" className="btn btn-outline-success" onClick={()=>{this.addToCart()}}>Add to cart</button>
                    </div>
        });

        return (
            <div>
                {product}
            </div>
        );
    }
}

export default Product;
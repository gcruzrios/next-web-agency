import React from 'react'

function SliderCart() {
  return (
    <div>
        
        {/* <!--slidercart canvas--> */}
    <div className="offcanvas offcanvas-end slide_cart_ortency" tabindex="-1" id="ortencySlideCartCanvas" aria-labelledby="ortencySlideCartCanvas">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title">Shopping Cart <span className="badge">4</span></h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
        <div className="offcanvas-body">
            <div className="ortency-shopping-cart-slide">
                <div className="single-items-cart d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <div className="imgs">
                            <img src="img/shop/products9.png" alt=""/>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <h4><a href="product-details.html">Affinity Queen Poster Bed</a></h4>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="quantity d-flex align-items-center justify-content-center">
                                <span className="quantity-remove quantity-button"><i className="bx bx-minus"></i> </span>
                                <input type="number" step="1" min="1" value="1" className=""/>
                                <span className="quantity-add quantity-button"><i className="bx bx-plus"></i> </span>
                            </div>
                            <p>1x $570</p>
                        </div>
                    </div>
                    <a href="#" className="remote-item-cart"><img src="img/icons/times.svg" alt=""/></a>
                </div>
                {/* <!--/.single-items-cart--> */}
                <div className="single-items-cart d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <div className="imgs">
                            <img src="img/shop/products2.png" alt=""/>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <h4><a href="product-details.html">Affinity Queen Poster Bed</a></h4>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="quantity d-flex align-items-center justify-content-center">
                                <span className="quantity-remove quantity-button"><i className="bx bx-minus"></i> </span>
                                <input type="number" step="1" min="1" value="1" className=""/>
                                <span className="quantity-add quantity-button"><i className="bx bx-plus"></i> </span>
                            </div>
                            <p>1x $570</p>
                        </div>
                    </div>
                    <a href="#" className="remote-item-cart"><img src="img/icons/times.svg" alt=""/></a>
                </div>
                {/* <!--/.single-items-cart--> */}
                <div className="single-items-cart d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <div className="imgs">
                            <img src="img/shop/products4.png" alt=""/>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <h4><a href="product-details.html">Affinity Queen Poster Bed</a></h4>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="quantity d-flex align-items-center justify-content-center">
                                <span className="quantity-remove quantity-button"><i className="bx bx-minus"></i> </span>
                                <input type="number" step="1" min="1" value="1" className=""/>
                                <span className="quantity-add quantity-button"><i className="bx bx-plus"></i> </span>
                            </div>
                            <p>1x $570</p>
                        </div>
                    </div>
                    <a href="#" className="remote-item-cart"><img src="img/icons/times.svg" alt=""/></a>
                </div>
                {/* <!--/.single-items-cart--> */}
            </div>
            {/* <!--/.ortency-shopping-cart-slide--> */}
            <div className="ortency-cart-subtotal">
                <div className="d-flex justify-content-between">
                    <h4>Subtotal</h4>
                    <h4 className="price">$920.00</h4>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <div className="btns">
                    <a href="cart.html" className="btn view_ct">View Cart</a>
                    <a href="#" className="btn ">Add To Cart</a>
                </div>
                <div className="free_shipping_cart">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src="img/icons/shipping-icon.svg" alt=""/>
                        <h5>Spend $ 499.00 to Free Shipping</h5>
                    </div>
                </div>
            </div>
            {/* <!--/.ortency-cart-subtotal--> */}
        </div>
    </div>
    

    </div>
  )
}

export default SliderCart
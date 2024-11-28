import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import './NavBar.css'

const NavBar = () => {
    let count = 0;
    const cart = useSelector(state => state.CartReducer.cart);

    cart.forEach(item => count += item.quantity);
	return (
		<nav>
			<h2 className='left'>My Carts</h2>
			<div className='right'>
				<div className='cart-layout'>
					<CiShoppingCart />
					<h3>{count}</h3>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

import React, { useEffect } from 'react';
import './ProductList.css';
import Product from '../product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/slices/ProductSlice';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.ProductReducer.products);
    const status = useSelector(state => state.ProductReducer.status);
    const error = useSelector(state => state.ProductReducer.error);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    if (status === 'loading') {
        return (
            <Spin
                className="spinner theme"
                indicator={<LoadingOutlined spin />}
                size="large"
            />
        )
    }

    if (status === 'failed') {
        return (
            <>
                <h3 className='spinner'>
                    Uh oh :&#40; <br /> <span>Something went wrong</span>
                    <p className="red">"{error}"</p>
                </h3>
            </>
        )
    }
	return (
		<div className='productList'>
			{products.map((item) => (
				<Product key={item.id} product={item} />
			))}
		</div>
	);
};

export default ProductList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import ProductCarousel from '../components/ProductCarousel';

const Home = () => {
    const params = useParams();
    const keyword = params.keyword;
    const pageNumber = params.pageNumber || 1;
    const dispatch = useDispatch();

    // productList from the store.js reducer
    const productList = useSelector(state => state.productList);
    const { loading, error, products, page, pages } = productList;

    // Get state
    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])
    
    return (
        <>
        <Meta />
        {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>Go Back</Link>}
            <h1>Latest Products</h1>
            {loading ? <Loader />: error ? <Message variant='danger'>{error}</Message> : 
                <>
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4}>
                                <Product product={product}/>
                            </Col>
                        ))}    
                    </Row>
                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                </>
            }
        </>
    )
}

export default Home

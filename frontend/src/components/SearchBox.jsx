import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        if (keyword.trim()) {
            navigate(`/search/${keyword}`);
        }
        else {
            navigate('/');
        }
    }

    return (
        <Form onSubmit={submitHandler} inline>
            <Container>
                <Row>
                    <Col xs={8}>
                        <Form.Control type='text' name='q' onChange={((e) => setKeyword(e.target.value))} placeholder='Search products...' className='mr-sm-2 ml-sm-5'></Form.Control>
                    </Col>
                    <Col>
                        <Button type='submit' variant='outline-success'>Search</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}

export default SearchBox
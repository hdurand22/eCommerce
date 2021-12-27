import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions';

const ShippingScreen = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState('');
    const [address, setAddress] = useState('');
    const [address, setAddress] = useState('');
    const [address, setAddress] = useState('');
    return (
        <div>
            Shipping
        </div>
    )
}

export default ShippingScreen

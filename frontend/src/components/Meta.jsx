import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to Small Kine Art',
    description: 'Beautiful, handmade ceramics and cool-ass t-shirts',
    keywords: 'ceramics, art, t-shirts, buy ceramics, buy art, buy t-shirts'
}

export default Meta
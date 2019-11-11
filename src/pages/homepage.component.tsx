import React from 'react';
import PortfolioItem from '../components/portfolioItem/portfolioItem.component'

import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepageContainer'>
        <PortfolioItem bgcolor='white' />
        <PortfolioItem bgcolor='grey' />
        <PortfolioItem bgcolor='white' />
    </div>
);

export default HomePage;
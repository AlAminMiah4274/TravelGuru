import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div style={{
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/Img/Rectangle 1.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            marginTop: '-20px'
        }}>
            <Header></Header>
        </div>
    );
};

export default Home;
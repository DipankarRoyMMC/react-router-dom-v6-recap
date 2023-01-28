import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Services></Services> */}
        </div>
    );
};

export default Main;
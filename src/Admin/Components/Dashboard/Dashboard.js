import React, { useContext, useEffect } from 'react';
import Header from '../../../Components/Header/Header';
import { PhotoFusionContext } from '../../../contexts/PhotoFusionContext';
export let admin;

const Dashboard = () => {
    const { isAdmin, setIsAdmin } = useContext(PhotoFusionContext)

    useEffect(() => {
        sessionStorage.setItem("show", false);
        // admin = true;
        // setIsAdmin(true);
    }, []);
    console.log("isAdmin...", admin);

    return (
        <div>
            <Header />
        </div>
    )
}

export default Dashboard;
// Dashboard.js
import React from 'react';
import Chart from 'react-apexcharts';
import SideNav from './SideNav';

const Dashboard = () => {
    // Example data for the charts
    const productData = {
        options: {
            chart: {
                id: 'products-chart',
            },
            xaxis: {
                categories: ['January', 'February', 'March', 'April', 'May', 'June'],
            },
        },
        series: [
            {
                name: 'Products Sold',
                data: [12, 19, 3, 5, 2, 3],
            },
        ],
    };

    const orderData = {
        options: {
            chart: {
                id: 'orders-chart',
            },
            xaxis: {
                categories: ['January', 'February', 'March', 'April', 'May', 'June'],
            },
        },
        series: [
            {
                name: 'Orders Received',
                data: [10, 15, 8, 20, 12, 18],
            },
        ],
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <SideNav />
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
            <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Products</h2>
                    <Chart options={productData.options} series={productData.series} type="bar" height={350} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Orders</h2>
                    <Chart options={orderData.options} series={orderData.series} type="bar" height={350} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

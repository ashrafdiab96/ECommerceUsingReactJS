import React, { useEffect, useState } from 'react'
import { Col, Tooltip } from 'react-bootstrap';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

const DashboardSalesChart = () => {
    const [width, setWidth] = useState(window.innerWidth)
  
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => { 
            window.removeEventListener("resize", handleResize);
        }
    }, [setWidth]);

    const chartWidth = width > 767 ? 690 : 400;
    
    const data = [
        { name: '0', uv: 0, },
        { name: 'Jan', uv: 1000, },
        { name: 'Feb', uv: 300, },
        { name: 'Mar', uv: 280, },
        { name: 'Apr', uv: 189, },
        { name: 'May', uv: 100, },
        { name: 'Jun', uv: 678, },
        { name: 'Jul', uv: 889, },
        { name: 'Aug', uv: 719, },
        { name: 'Sep', uv: 950, },
        { name: 'Oct', uv: 700, },
        { name: 'Nov', uv: 1103, },
        { name: 'Dec', uv: 384, },
    ];

    return (
        <div className='cusom-card-container my-3'>
            <Col xs={12} lg={12}>
                <div className='card custom-card'>
                    <div className='card-body'>
                        <div className='card-item custom-card-item'>
                            <div className='card-item-content'>
                                <div>
                                    <h5>رسم بياني لتوضيح الإيرادات خلال العم</h5>
                                </div>
                            </div>
                        </div>
                        <LineChart
                            width={chartWidth}
                            height={400}
                            data={data}
                            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <CartesianGrid stroke="#272a88" />
                            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                        </LineChart>
                    </div>
                </div>
            </Col>
        </div>
    );
}

export default DashboardSalesChart;

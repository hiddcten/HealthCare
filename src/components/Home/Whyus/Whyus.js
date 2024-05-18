import React, { useState, useEffect } from 'react';

const Whyus = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost/healthcare-main/api/services.php');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setServices(data);
        } catch (error) {
            setError(error.message);
            console.error('Lỗi khi lấy dữ liệu dịch vụ:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2>Why Choose Us</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {services.map(service => (
                        <li key={service.id}>{service.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Whyus;

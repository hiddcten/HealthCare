import React, { useState, useEffect } from 'react';

const OurExperts = () => {
    const [experts, setExperts] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost/healthcare-main/api/experts.php');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setExperts(data);
        } catch (error) {
            setError(error.message);
            console.error('Lỗi khi lấy dữ liệu chuyên gia:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2>Our Experts</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {experts.map(expert => (
                        <li key={expert.id}>{expert.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OurExperts;

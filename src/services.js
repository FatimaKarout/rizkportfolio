import React from  'react';
import { useEffect,useState } from 'react'; 
const Services=() => {
    const [data,setData]=useState([]);
    const [api, setApi] = useState('http://localhost:5000/service/getServices');
    const serviceData = async () => {
        try {
            const response = await fetch(api, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                setData(data.data);
                console.log('Fetched data:', data);
            } else {
                console.error('Failed to fetch data from the API.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        serviceData();
    }, []);

   return (<div></div>);};
export default Services
import { useState, useEffect } from 'react';

const useFetchData = (link) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const resp = await fetch(link);
                if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
                const jsonData = await resp.json();
                setData(jsonData);
            } catch (err) {
                console.error('Error in fetching:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [link]); // 👈 include link as dependency

    return { data, loading, error };
};

export default useFetchData;

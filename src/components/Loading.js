import React, { useState, useEffect } from 'react';

function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ?
                <div className="loading">
                    <div class="loader">
                        <div class="load-inner load-one"></div>
                        <div class="load-inner load-two"></div>
                        <div class="load-inner load-three"></div>
                        <span class="text">Loading...</span>
                    </div>
                </div> : <></>}
        </>
    )
}

export default Loading
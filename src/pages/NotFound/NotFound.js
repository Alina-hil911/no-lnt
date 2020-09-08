import React from 'react';
import { useHistory } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
    let history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    };

    return <div className="not-found">
        <h2>OOPS! YOU WENT TO THE WRONG PAGE</h2>
        <button onClick={handleGoBack} className="not-found__button">GO BACK</button>
    </div>
};

export default NotFound;
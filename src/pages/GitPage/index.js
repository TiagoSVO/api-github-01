import React from 'react';
import { useParams } from 'react-router-dom';

const GitPage = () => {
    const { login } = useParams()
    return(
        <h1>{login}'s Git Page</h1>
    )
}

export default GitPage
import React from 'react';
import { Link } from 'react-router-dom';

const RepoItem = (repoItem) => {
    const { name, description, deployments_url } = repoItem;

    return (
        <div className="card text-center">
            <div className="card-header">
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={deployments_url} target="_blank" rel="noreferrer">
                    <button className="btn btn-dark">View on Github</button>
                </Link>
            </div>
        </div>
    );
}

export default RepoItem;
import React from 'react';
import RePoItem from './RepoItem';

const Repos = ({ repos }) => {
    return (
        <div className="card-group">
            {repos.map((repo) => (
                <RePoItem key={repo.id} name={repo.name} description={repo.description} deployments_url={repo.deployments_url} />
            ))}
        </div>
    );
}

export default Repos;
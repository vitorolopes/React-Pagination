import React from 'react'

const Follower = ({avatar_url, login, html_url}) => {

    return (
    <div className="card">
        <img src={avatar_url} alt={login} />
        <h4>{login}</h4>
        <a className='btn' href={html_url}>view profile</a>
    </div>
    )
}

export default Follower




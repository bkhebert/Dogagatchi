import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'



const Home = () => {
    const [user, setUser] = useState('')

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        console.log('user', user)
        setUser(user.username)
    }, [])

    return (
        <div className='home'>
            <h1>DOGAGATCHI</h1>
            <img src='https://i.ibb.co/B6bJ359/1699386580-trimmy-sweeticon-removebg-preview-1.png' />
            <h1>{`Welcome, ${user}!`}</h1>
      <span>
            <Link to='/quiz'>
            <Button className='boot-button'>Quiz</Button>
            </Link>
            <Link to='/user'>
            <Button className='boot-button'>User Profile</Button>
            </Link>
            <Link to='/restaurant'>
            <Button className='boot-button'>Restaurant</Button>
            </Link>
            <Link to='/leaderboard'>
            <Button className='boot-button'>Leaderboard</Button>
            </Link>
            <Link to='/about'>
            <Button className='boot-button'>How To Play</Button>
            </Link>
        </span>
        </div>

    )
}

export default Home
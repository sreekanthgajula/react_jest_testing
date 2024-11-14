import React, { useEffect, useState } from 'react'
import "./FollowersList.css"
import axios from "axios"
import { Link } from 'react-router-dom';

export default function FollowersList() {

    const [followers, setFollowers] = useState([]);

    useEffect(() => {

        const fetchFollowers = async () => {
            try {
                const { response } = await axios.get("https://randomuser.me/api/?results=5");
                setFollowers(response.data.results)
                
            } catch (error) {
                console.error("Error fetching data: of followers", error);
            }

            
        }

        fetchFollowers()
    }, []);



    return (
        <div className="followerslist-container">
            <div>
                {followers.map((follower, index) => (
                    <div className="follower-item" role="status">
                        <img src={follower.picture.large}/>
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}

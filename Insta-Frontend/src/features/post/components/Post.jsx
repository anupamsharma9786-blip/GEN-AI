import React from 'react'

const Post = ({user, post}) => {
    return (
        <div className="post">
            <div className="user">
                <img src={user.profileImage} alt="" />
                <p>{user.username}</p>
            </div>
            <img className="post-image" src={post.imgUrl} alt="" />
            <div className="icons">
                <div className="left">
                    <button><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={post.isLiked?"rgb(255, 0, 85)":"rgba(255,255,255,1)" }><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3Z"></path></svg></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z"></path></svg></button>
                </div>
                <div className="right">
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z"></path></svg></button>
                </div>
            </div>
            <div className="bottom">
                <p className="caption">{post.caption}</p>
            </div>
        </div>
    )
}

export default Post
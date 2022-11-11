import React from 'react';


const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder="Find a user"/>
        </div>
        <div className="userChat">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
        </div>
  )
}

export default Search
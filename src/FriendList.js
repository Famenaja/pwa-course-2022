import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "Kuroro", position: "center"},
    {user: "user2", displayName: "Kirua"},
    {user: "user3", displayName: "Gon"},
    {user: "user4", displayName: "Palm"},
  ]);

  return(
    <App>
      <div className="friend-list">
        
       {friends.map(x =>
       <div className='friend-list-item'>
         <div>{friends.user}</div>
            <Avatar name={x.user}/>
            {x.Avatar}   {x.displayName}
          
         </div>
         
       )
       }
      </div>
    </App>
  )
}

export default FriendList;
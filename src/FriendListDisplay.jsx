import React from "react";
import { Button } from "./Button";

export const FriendListDisplay = ({
 onSetSelectFriend,
  initFriendList}) => {
  return (
    <ul>
      {initFriendList.map((friend) => (
        <Friend
          onSetSelectFriend = {onSetSelectFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

const Friend = ({ friend , onSetSelectFriend }) => {
  
  return (
    <li>
      <div className="innerContent">
        <img className="friend-img" src={friend.image}></img>
        <h3>{friend.name}</h3>
      </div>
      <div className="inner-btn-div">
        <Button onClick={()=>onSetSelectFriend(friend)}>Select</Button>
      </div>
    </li>
  );
};

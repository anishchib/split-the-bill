import React from "react";
import { Button } from "./Button";

export const FriendListDisplay = ({
  selectFriend,
 onSetSelectFriend,
  initFriendList}) => {
  return (
    <ul>
      {initFriendList.map((friend) => (
        <Friend
        selectFriend = {selectFriend}
          onSetSelectFriend = {onSetSelectFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

const Friend = ({ selectFriend, friend , onSetSelectFriend }) => {
  
  return (
    <li>
      <div className="innerContent">
        <img className="friend-img" src={friend.image}></img>
        <h3>{friend.name}</h3>
      </div>
      <div className="inner-btn-div">
        <Button onClick={()=>onSetSelectFriend(friend)}>{(selectFriend?.id === friend.id) ? 'close' : 'select'}</Button>
      </div>
    </li>
  );
};

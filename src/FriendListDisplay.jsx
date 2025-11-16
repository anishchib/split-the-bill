import React from "react";
import { Button } from "./Button";

export const FriendListDisplay = ({
 
  initFriendList
}) => {
  return (
    <ul>
      {initFriendList.map((friend) => (
        <Friend
          
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

const Friend = ({ friend }) => {
  return (
    <li>
      <div className="innerContent">
        <img className="friend-img" src={friend.image}></img>
        <h3>{friend.name}</h3>
      </div>
      <div className="inner-btn-div">
        <Button>Select</Button>
      </div>
    </li>
  );
};

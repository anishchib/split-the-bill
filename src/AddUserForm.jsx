import React, { useState } from "react";
import { Button } from "./Button";

export const AddUserForm = ({onHandleSetFriendList}) => {

  const[name,setFriendname] = useState("");
  const[image,setImageURL] = useState("https://i.pravatar.cc/57")


  
  const handleSetFriendname = (e)=>
  {
    setFriendname(e.target.value);
  }
  const handleSetImageURL = (e)=>
  {
    setImageURL(e.target.value);
  }

  const handleFormSubmit = (evt) => {

    evt.preventDefault(); // Prevents page reload
   if(!name || !image){ return }
    const id = crypto.randomUUID();

    const newFriend = {
        id,name,image:`${image}?u=${id}`,balance:0
      
    }
    onHandleSetFriendList(newFriend)
    // console.log(newFriend)
    setFriendname("");
    setImageURL("https://i.pravatar.cc/57");
  };;
  return (
    <>
      <form className="add-user-form" onSubmit={handleFormSubmit}>
        <div className="form-inner-div">
          <label >Enter Friend Name</label>
          <input type="text" value={name} onChange={handleSetFriendname}/>
        </div>
        <div className="form-inner-div">
          <label>Enter image Path</label>
          <input type="text" value = {image} onChange={handleSetImageURL}/>
        </div>
        <div className="add-user-form-btn">
          <Button>Add Friend</Button>
        </div>
      </form>
    </>
  );
};

export default AddUserForm;

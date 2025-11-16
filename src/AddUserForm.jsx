import React from "react";
import { Button } from "./Button";

export const AddUserForm = () => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault(); // Prevents page reload
  };
  return (
    <>
      <form className="add-user-form" onSubmit={handleFormSubmit}>
        <div className="form-inner-div">
          <label htmlFor="">Enter Friend Name</label>
          <input type="text"></input>
        </div>
        <div className="form-inner-div">
          <label htmlFor="">Enter image Path</label>
          <input type="text"></input>
        </div>
        <div className="add-user-form-btn">
          <Button>Add Friend</Button>
        </div>
      </form>
    </>
  );
};

export default AddUserForm;

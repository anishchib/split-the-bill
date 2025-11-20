import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Button } from "./Button.jsx";
import { FriendListDisplay } from "./FriendListDisplay.jsx";
import AddUserForm from "./AddUserForm.jsx";
import SplitBillForm from "./SplitBillForm.jsx";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [displayForm, setDisplayForm] = useState(false);

  const [friendList,setFriendList] = useState(initialFriends)
  const[selectFriend,setSelectfriend] = useState(null)


  const handleSetDisplay = () => {
    setDisplayForm(!displayForm);
  };
  const handleSetFriendList = (newfriend)=>
  {
    setFriendList(friends => [...friends,newfriend])
  }
  const handleSetSelectFriend = (friend)=>{
    setSelectfriend((cur) => (cur?.id === friend.id)?null:friend);
  }
  return (
    <>
      <div className="main-div">
        <Header />
        <div className="body-sub-div">
          <div className="half-div1">
            <FriendListDisplay selectFriend = {selectFriend} initFriendList={friendList} onSetSelectFriend = {handleSetSelectFriend}  />

            {displayForm && <AddUserForm onHandleSetFriendList = { handleSetFriendList }/>}
                  <div className="friend-add-btn">
                    <Button onClick={handleSetDisplay}>
                      {displayForm ? "Close" : "Add a Friend"}
                    </Button>
                  </div>
           
          </div>
         {selectFriend && <SplitBillForm selectedFriend={selectFriend}/>}  



        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;

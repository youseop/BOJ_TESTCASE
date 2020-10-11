import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Nweet from "../components/Nweet";
import { authService, dbService } from "../fbase";

const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [profileNweets, setprofileNweets] = useState([]);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
    refreshUser();
  };

  const getMyNweets = async () => {
    //Filtering!!
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();

    const nweetArray = nweets.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setprofileNweets(nweetArray);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <><div>
      <div>{userObj.displayName}</div>
      <form onSubmit={onSubmit}>
        <input
          value={newDisplayName}
          onChange={onChange}
          type="text"
          placeholder="Display name"
          maxLength={20}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
      <div>
        {profileNweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
    </>
  );
};
export default Profile;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AddTestCase from "../components/AddTestCase";
import TESTCASE from "../components/TESTCASE";
import { authService, dbService } from "../fbase";

const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [profileTestCases, setprofileTestCases] = useState([]);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
    refreshUser();
  };

  const getMyTestCases = async () => {
    //Filtering!!
    const TestCases = await dbService
      .collection("TestCase")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();

    const TestCaseArray = TestCases.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setprofileTestCases(TestCaseArray);
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
    getMyTestCases();
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
        <input 
        type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
      <AddTestCase userObj={userObj} />
      <div>
        {profileTestCases.map((testcase) => (
          <TESTCASE
            key={testcase.id}
            TestCaseObj={testcase}
            isOwner={testcase.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
    </>
  );
};
export default Profile;
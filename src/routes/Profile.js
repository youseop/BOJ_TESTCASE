import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AddTestCase from "../components/AddTestCase";
import TESTCASE from "../components/TESTCASE";
import { authService, dbService } from "../fbase";
import { faPlus, faSignOutAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
  
  const [WannaAdd, setWannaAdd] = useState(false);
  const toggleWannaAdd = () => setWannaAdd((prev) => !prev);
  const [WannaEorD, setWannaEorD] = useState(false);
  const toggleWannaEorD = () => setWannaEorD((prev) => !prev);
  return (
    <><div className="home">
      
      {WannaAdd ? (
            <>
            <button className="testcase_button" onClick={toggleWannaAdd}><FontAwesomeIcon icon={faTimesCircle} /></button>
            <AddTestCase userObj={userObj} />
            </>
          ):(
            <>
            <div className="Name">{userObj.displayName}</div>
      <form className="changenameform" onSubmit={onSubmit}>
        <input
         className="ChangeName"
          value={newDisplayName}
          onChange={onChange}
          type="text"
          placeholder="Display name"
          maxLength={20}
        />
        <input className="testcase_button"
        type="submit" value="Update Display Name" />
      </form>
            <button className="testcase_button ADDTESTCASE" onClick={toggleWannaAdd}><FontAwesomeIcon icon={faPlus} />&nbsp;Add Test Case&nbsp;<FontAwesomeIcon icon={faPlus} /></button>
            </>
          )}
      


      <div>
      {WannaEorD ? (
            <>
            <button className="testcase_button" onClick={toggleWannaEorD}>Done</button>
            {profileTestCases.map((testcase) => (
            <TESTCASE
            key={testcase.id}
            TestCaseObj={testcase}
            isOwner={testcase.creatorId === userObj.uid}
            />
            ))}
            
            </>
          ):(
            <>
            <button className="testcase_button logout" onClick={toggleWannaEorD}>Manage your Test Cases - Edit or Delete</button>
            </>
          )}
        
      </div>
      <button className="testcase_button logout" onClick={onLogOutClick}><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;Log Out</button>
    </div>
    </>
  );
};
export default Profile;
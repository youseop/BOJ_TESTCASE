import { faPlus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import AddTestCase from "../components/AddTestCase";
import TESTCASE from "../components/TESTCASE";
import { dbService } from "../fbase";

const Home = ({ userObj,isLoggedIn }) => {
  const [TestCases, setTestCases] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    dbService.collection("TestCase").onSnapshot((snapshot) => {
      let TestCaseArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      TestCaseArray = TestCaseArray.filter((testcase) => {
        const bool =testcase.ProblemNum ===search;
        return bool;
      });
      setTestCases(TestCaseArray);
    });
  });
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setsearch(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    setsearch("");
  }
  const [WannaAdd, setWannaAdd] = useState(false);
  const toggleWannaAdd = () => setWannaAdd((prev) => !prev);


  return (
    <div className="homecontainer">
      {/* <div>
        {isLoggedIn && (<AddTestCase userObj={userObj} />) }
        
      </div> */}
      {WannaAdd ? (
            <>
            <button className="testcase_button" onClick={toggleWannaAdd}><FontAwesomeIcon icon={faTimesCircle} /></button>
            <AddTestCase userObj={userObj} />
            </>
          ):(
            <button className="testcase_button HOMEADDTESTCASE" onClick={toggleWannaAdd}><FontAwesomeIcon icon={faPlus} />&nbsp;Add Test Case&nbsp;<FontAwesomeIcon icon={faPlus} /></button>
          )}

      <div className="home">
        {isLoggedIn & userObj ? (
          <>
          <form className="Search_form" onSubmit={onSubmit}>
            <input
          value={search}
          onChange={onChange}
          type="text"
          placeholder="Search Test Case"
          maxLength={20}
        />
        </form>
          <div className="showingTestcase">
            {TestCases.map((TestCase) => (
            <TESTCASE
              key={TestCase.id}
              TestCaseObj={TestCase}
              isOwner={TestCase.creatorId === userObj.uid}
            />
          ))}
          </div>
          
          </>
        ):(
          <>
          <form onSubmit={onSubmit}>
            <input
            className="Search"
          value={search}
          onChange={onChange}
          type="text"
          placeholder="Search Test Case"
          maxLength={20}
        />
        </form>
          {TestCases.map((TestCase) => (
            <TESTCASE
              key={TestCase.id}
              TestCaseObj={TestCase}
              isOwner={false}
            />
          ))}
          </>
        )}
        
      </div>
    </div>
  );
};
export default Home;

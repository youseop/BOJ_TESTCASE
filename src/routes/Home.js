import React, { useEffect, useState } from "react";
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


  return (
    <div>
      {/* <div>
        {isLoggedIn && (<AddTestCase userObj={userObj} />) }
        
      </div> */}

      <div>
        {isLoggedIn & userObj ? (
          <>
          <form onSubmit={onSubmit}>
            <input
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
              isOwner={TestCase.creatorId === userObj.uid}
            />
          ))}
          </>
        ):(
          <>
          <form onSubmit={onSubmit}>
            <input
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

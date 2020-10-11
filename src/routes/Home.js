import React, { useEffect, useState } from "react";
import TESTCASE from "../components/TESTCASE";
import AddTestCase from "../components/AddTestCase";
import { dbService } from "../fbase";

const Home = ({ userObj,isLoggedIn }) => {
  const [TestCases, setTestCases] = useState([]);
  useEffect(() => {
    dbService.collection("TestCase").onSnapshot((snapshot) => {
      const TestCaseArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTestCases(TestCaseArray);
    });
  }, []);

  return (
    <div>
      <div>
        {isLoggedIn && (<AddTestCase userObj={userObj} />) }
        
      </div>

      <div>
        {isLoggedIn & userObj ? (
          <>
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

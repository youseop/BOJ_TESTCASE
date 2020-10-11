import React, { useState } from "react";
import { dbService, storageService } from "../fbase";

const TESTCASE = ({ TestCaseObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTestCase, setNewTestCase] = useState(TestCaseObj.text);
  const [newProblemNum, setnewProblemNum] = useState(TestCaseObj.ProblemNum);
  const [newResult, setnewResult] = useState(TestCaseObj.result);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure?");
    console.log(ok);
    if (ok) {
      await dbService.doc(`TestCase/${TestCaseObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`TestCase/${TestCaseObj.id}`).update({
      text: newTestCase,
      ProblemNum: newProblemNum,
      result: newResult,
    });
    setEditing(false);
  };
  const onChange_newTestCase = (event) => {
    const {
      target: { value },
    } = event;
    setNewTestCase(value);
  };
  const onChange_newProblemNum = (event) => {
    const {
      target: { value },
    } = event;
    setnewProblemNum(value);
  };
  const onChange_newResult = (event) => {
    const {
      target: { value },
    } = event;
    setnewResult(value);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text"  value={newProblemNum} onChange={onChange_newProblemNum} required />
            <input type="text"  value={newTestCase} onChange={onChange_newTestCase} required />
            <input type="text"  value={newResult} onChange={onChange_newResult} required />
            <input type="submit" value="Update"/>
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          
          <h4>Test Case#{TestCaseObj.ProblemNum}</h4>
          <h4>{TestCaseObj.text}</h4>
          <h4>{TestCaseObj.result}</h4>
          <h6>{TestCaseObj.name}</h6>
         
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>
                Delete
              </button>
              <button onClick={toggleEditing}>
                Edit
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TESTCASE;

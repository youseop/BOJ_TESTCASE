import React, { useState } from "react";
import { dbService, storageService } from "../fbase";
import AddReport from "./Report";

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
  // Reporting
  const [Reporting, setReporting] = useState(false);
  const toggleReporting = () => setReporting((prev) => !prev);
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
          
          <h4>Test Case #{TestCaseObj.ProblemNum}</h4>
          <h6>{TestCaseObj.name}</h6>
          <div className="wrap">
          <textarea>{TestCaseObj.text}</textarea>
          <textarea>{TestCaseObj.result}</textarea>
          </div>
          {isOwner ? (
            <>
              <button onClick={onDeleteClick}>
                Delete
              </button>
              <button onClick={toggleEditing}>
                Edit
              </button>
            </>
          ):(
          <>
          {Reporting ? (
            <>
            <AddReport ProblemNum={TestCaseObj.ProblemNum} name={TestCaseObj.name} text={TestCaseObj.text} result={TestCaseObj.result}/>
            <button onClick={toggleReporting}>Cancel</button>
            </>
          ):(
            <>
            <button onClick={toggleReporting}>Report</button>
            </>
          )}
          </>
          )}
        </>
      )}
    </div>
  );
};

export default TESTCASE;

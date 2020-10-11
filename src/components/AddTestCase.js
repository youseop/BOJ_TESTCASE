import React, { useState } from "react";
import { FormControl } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, InputGroup } from 'reactstrap';
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../fbase";

const AddTestCase = ({ userObj }) => {
  const [TestCase, setTestCase] = useState("");
  const [ProblemNum, setProblemNum] = useState("");
  const [Result, setResult] = useState("");
  const [attachment, setAttachment] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const testObj = {
      createdAt: Date.now(),
      ProblemNum: ProblemNum,
      text: TestCase,
      result: Result,
      name: userObj.displayName,
      creatorId: userObj.uid,
      attachmentUrl,
    };
    console.log(userObj.uid);
    await dbService.collection("TestCase").add(testObj);
    setTestCase("");
    setAttachment("");
    setProblemNum("");
    setResult("");
  };

  const onChange_text = (event) => {
    const {
      target: { value },
    } = event;
    setTestCase(value);
  };
  const onChange_problem = (event) => {
    const {
      target: { value },
    } = event;
    setProblemNum(value);
  };
  const onChange_Result = (event) => {
    const {
      target: { value },
    } = event;
    setResult(value);
  };
  


  return (
    
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <InputGroup>
            <FormControl id="exampleText" value={TestCase} onChange={onChange_text} />
          </InputGroup>
        </FormGroup>
      </Form>
      
      <form onSubmit={onSubmit}>
        <input
          value={ProblemNum}
          onChange={onChange_problem}
          type="text"
          placeholder="problem number"
          maxLength={15}
        />
        <input
          value={TestCase}
          onChange={onChange_text}
          type="text"
          placeholder="Add test case"
          maxLength={120}
        />
        <input
          value={Result}
          onChange={onChange_Result}
          type="text"
          placeholder="Result"
          maxLength={120}
        />
        <input type="submit" value="Add" />
        
      </form>
    </div>
  );
};

export default AddTestCase;

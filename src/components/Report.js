import React, { useState } from "react";
import { dbService } from "../fbase";

const AddReport = ({ ProblemNum, name,text,result }) => {
  const [Report, setReport] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const testObj = {
      createdAt: Date.now(),
      ProblemNum: ProblemNum,
      text: text,
      result: result,
      name: name,
      Report:Report,
    };
    if (Report===""){
      alert("Text invalid");
    }
    else{
      await dbService.collection("Report").add(testObj);
      setReport("");
      alert("Problem Reported");
    }
    
  };

  const onChange_text = (event) => {
    const {
      target: { value },
    } = event;
    setReport(value);
  };
  


  return (
    
    <div className="report_container">
      
      <form onSubmit={onSubmit} className="report_form">
        <div className="wrap">
        <textarea
          value={Report}
          onChange={onChange_text}
          type="text"
          placeholder="Report the problem"
          maxLength={2000}
        />
        </div>
        <input className="testcase_button report" type="submit" value="Report" />
        
      </form>
    </div>
  );
};

export default AddReport;

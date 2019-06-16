import React from "react";
import {Link} from 'react-router-dom';

import { geturl } from "../subjectList";

const Subject = props => {
  const id = props.match.params.subjectId;
  let typeOfPaper = 'Major';

  return (
    <div className="subject">
      <h1 className="subject_name">{id} </h1>
      {Object.keys(props.subjects[id]).map(year => {
        return (
          <div className="subject_year">
            <h2 className="subject_year_name">{`20${year}`}</h2>
            <ul className="subject_list">
              {props.subjects[id][year].map(paper => {
                if(paper===1){typeOfPaper='Minor 1'} else if(paper===2) {typeOfPaper='Minor 2'} else {typeOfPaper='Major'}
                return(
                <li className="subject_paper">
                  <span>{typeOfPaper}</span>
                  <Link to={`${geturl(id,year,paper)}`} >
                  <img src={`/exambaba/${geturl(id,year,paper)}`} alt="" className="subject_thumbnail"/></Link>
                </li>
              )})}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Subject;
//Object.keys(x.subjects["dbms"]).map(year => console.log(x.subjects["dbms"][year]));
// onClick={handleClick(geturl(id,year, paper), hist)}
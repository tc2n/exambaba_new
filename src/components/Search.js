import React from "react";
import subjectList, { shorten } from "../subjectList";
import { ReactComponent as ReactLogo } from "../css/SVG/search.svg";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "cse",
      subject: ""
    };
    this.handleListChange = this.handleListChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.goToSubject = this.goToSubject.bind(this);
  }

  handleListChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }
  handleSubjectChange(e) {
    e.preventDefault();
    this.setState({ subject: e.target.value });
  }

  goToSubject(e) {
    e.preventDefault();
    const shortName = shorten(this.state.value, this.state.subject);
    if (shortName === -1) {
      alert("Enter valid subject name");
    } else {
      this.props.history.push(`/subject/${shortName}`);
    }
  }

  render() {
    const branch = this.state.value;
    return (
      <>
      <div className="search">
        <p className="search_details">
          <u>Welcome to Ex@mbaba</u> <br/><br /> Exambaba is created to help the student of
          SMVDU for getting previous year papers for all the three branches
          (C.S.E, M.E, E.C.E).<br/>Just search your subject.
        </p>
        <form onSubmit={this.goToSubject} className="search_form">
          <select
            className="search_select"
            name="branch"
            id="branch"
            value={this.state.value}
            onChange={this.handleListChange}
          >
            <option value="cse">CSE</option>
            <option value="me">ME</option>
            <option value="ece">ECE</option>
          </select>
          <input
            type="text"
            placeholder="Search Subject"
            list="subjects"
            onChange={this.handleSubjectChange}
            value={this.state.subject}
            className="search_area"
          />

          <datalist id="subjects">
            {subjectList[branch].map(subject => (
              <option defaultValue={subject} value={subject} />
            ))}
          </datalist>

          <button type="submit" className="search_button">
            <ReactLogo className="search_logo" alt="logo" />
          </button>
        </form>
      </div>
      <div className="footer"><span>Original idea by <a href="http://github.com/mbj36">Mohit Kumar Bajoria</a>.&ensp;&ensp; <a href="http://github.com/tc2n/exambaba">Github Repo</a></span></div></>
    );
  }
}
export default Search;

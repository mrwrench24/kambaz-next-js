export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={30} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your submission. Be sure to follow all of the instructions or you will
        lose a LOT of points.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" type="number" defaultValue={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Assignment Group</label>
          </td>
          <td>
            <select id="assignment-group">
              <option value="ASSIGNMENTS">Assignments</option>
              <option value="EXAMS">Exams</option>
              <option value="QUIZZES">Quizzes</option>
              <option value="PROJECTS">Projects</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Display Grade as</label>
          </td>
          <td>
            <select id="display-grade-as">
              <option value="POINTS">Points</option>
              <option value="PERCENTAGE">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Submission Type</label>
          </td>
          <td>
            <select id="submission-type">
              <option value="ONLINE">Online</option>
              <option value="IN-PERSON">In-Person</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            Online Entry Options
            <br></br>
            <input type="checkbox" name="check-genre" id="oe-text-entry" />
            <label htmlFor="oe-text-entry"> Text Entry</label>
            <br></br>
            <input type="checkbox" name="check-genre" id="oe-website-url" />
            <label htmlFor="oe-website-url"> Website URL</label>
            <br></br>
            <input
              type="checkbox"
              name="check-genre"
              id="oe-media-recordings"
            />
            <label htmlFor="oe-media-recordings"> Media Recordings</label>
            <br></br>
            <input
              type="checkbox"
              name="check-genre"
              id="oe-student-annotation"
            />
            <label htmlFor="oe-student-annotation"> Student Annotation</label>
            <br></br>
            <input type="checkbox" name="check-genre" id="oe-file-upload" />
            <label htmlFor="oe-file-upload"> File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Assign</label>
          </td>
          <td>Assign to</td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <input placeholder="Students..." id="assign-to-input"></input>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>Due</td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <input type="date" defaultValue="2026-01-20" id="ae-due-date" />
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>Available From</td>
          <td>Until</td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <input
              type="date"
              defaultValue="2026-01-20"
              id="ae-available-date"
            />
          </td>
          <td>
            <input type="date" defaultValue="2026-01-21" id="ae-until-date" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

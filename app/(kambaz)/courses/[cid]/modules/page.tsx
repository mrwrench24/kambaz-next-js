export default function Modules() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select id="wd-select-modules-kambaz">
        <option value="P-ALL"> Publish All </option>
        <option value="P-SOME">Publish Some</option>
      </select>
      <button>+ Module</button>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Course Introduction</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Go over syllabus and expectations
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">HTML</span>
              <ul className="wd-content">
                <li className="wd-content-item">History of Web Development</li>
                <li className="wd-content-item">Basic HTML</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Advanced HTML & JSX</span>
              <ul className="wd-content">
                <li className="wd-content-item">More HTML practice</li>
                <li className="wd-content-item">What is JSX</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Advanced HTML & JSX</span>
              <ul className="wd-content">
                <li className="wd-content-item">More HTML practice</li>
                <li className="wd-content-item">Components</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">CSS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Styling webpages</li>
                <li className="wd-content-item">Working with CSS</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 4</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">React</span>
              <ul className="wd-content">
                <li className="wd-content-item">What is React</li>
                <li className="wd-content-item">Using State</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">React (cont.)</span>
              <ul className="wd-content">
                <li className="wd-content-item">More on State</li>
                <li className="wd-content-item">Hooks and Effects</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

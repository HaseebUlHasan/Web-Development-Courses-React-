import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Sass = () => {
  const [readMore, setreadMore] = useState(false);
  const [readMore2, setreadMore2] = useState(false);
  const [readMore3, setreadMore3] = useState(false);
  const [readMore4, setreadMore4] = useState(false);
  const [readMore5, setreadMore5] = useState(false);
  const [readMore6, setreadMore6] = useState(false);

  const firstRow = (
    <div>
      <p className="extra-content">
        Variables aid code maintainability by creating a single location for
        information to be stored and updated.
      </p>
    </div>
  );
  const firstLink = readMore ? "Read Less << " : "Read More >> ";

  const secondRow = (
    <div>
      <p className="extra-content">
        Keep SASS files small and focused. Use the technical breakdown to
        determine which modules are on the site and breakdown the SASS files in
        the same way. Ideally there should be one SASS file for each module.
      </p>
    </div>
  );
  const secondLink = readMore2 ? "Read Less << " : "Read More >> ";

  const thirdRow = (
    <div>
      <p className="extra-content">
        Mixins allow commonly used snippets to be stored in a central location
        and then used throughout the code as needed.
      </p>
      <p style={{ color: "red" }}>
        {" "}
        <strong> WARNING:</strong> Mixin code get repeated every time you use
        them, so the same code will be in multiple places, blowing up the file
        size. Sometimes it makes more sense to just make a class. Only create a
        mixin if you need a global style that has to be highly customizable.
      </p>
    </div>
  );
  const thirdLink = readMore3 ? "Read Less << " : "Read More >> ";

  const fourRow = (
    <div>
      <p className="extra-content">
        Placeholders are very similar to class selectors, but instead of using a
        period (.) at the start, the percent character (%) is used. Placeholder
        selectors have the additional property that they will not show up in the
        generated CSS, only the selectors that extend them will be included in
        the output.
      </p>
    </div>
  );
  const fourLink = readMore4 ? "Read Less << " : "Read More >> ";

  const fiveRow = (
    <div>
      <p className="extra-content">
        Sass makes it very easy to nest elements and generate overlay complex
        selectors. Evaluate whether such deep nesting is needed. By assigning
        descriptive classes you may be able to remove some nested elements, and
        make the code more reusable at the same time.
      </p>
      <p>
        A good rule is to never nest more than 4 levels deep, but always strive
        to keep rules as shallow as possible.
      </p>
    </div>
  );
  const fiveLink = readMore5 ? "Read Less << " : "Read More >> ";

  const sixRow = (
    <div>
      <p className="extra-content">
      While the following allows you to write less code, it results in code that is harder to read and work with.
      </p> <br/>
      <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                 
                  <Typography>
                    <code> .class &#123; </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp; &__element &#123; </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp;&#125;</code>
                    <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp; &nbsp; &nbsp; &--modifier &#123;{" "}
                    </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp;&#125;</code>
                    <br />
                    <code>&#125;</code>
                    <br />
                  </Typography>
                </CardContent>
              </Card>
              <br />
      <p>It is impossible to search for the class of .class__element since it appears only in the compiled code. searching for just __element could return many results if similar elements, like a header or description are used across many modules.</p>
      <p>You also introduce unnecessary nesting.</p>
    </div>
  );
  const sixLink = readMore6 ? "Read Less << " : "Read More >> ";

  return (
    <div className="Container">
      <div className="Link">
        <ul>
          <h1>SCSS/SASS</h1>
          <li>
            <a href="#1">Use SASS variables</a>
          </li>
          <li>
            <a href="#2">Most often stored in _variables.scss</a>
          </li>
          <li>
            <a href="#3">
              Create separate SASS files for each widget/module/component
            </a>
          </li>
          <li>
            <a href="#4">Use mixins</a>
          </li>
          <li>
            <a href="#5">Use placeholders</a>
          </li>
          <li>
            <a href="#6">Minimize nesting</a>
          </li>
          <li>
            <a href="#7">Avoid Concatenation with &</a>
          </li>
        </ul>
      </div>{" "}
      <br /> <br />
      
      <div className="table">
        <table>
          <tr id = "1">
            <td>
              Use SASS variables
              <ul>
                <li>
                  <strong>Most often stored in _variables.scss </strong>
                </li>
                <li>
                  Commonly used values, such as colors, should be stored as
                  variables.
                </li>
              </ul>
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore(!readMore);
                }}
              >
                <p>{firstLink}</p>
              </a>
              {readMore && firstRow}
            </td>
            <td></td>
          </tr>

          <tr id = "2">
            <td>Create separate SASS files for each widget/module/component
            <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore2(!readMore2);
                }}
              >
                <p>{secondLink}</p>
              </a>
              {readMore2 && secondRow}
            </td>
            <td></td>
          </tr>

          <tr id = "3">
            <td>Use mixins
            <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore3(!readMore3);
                }}
              >
                <p>{thirdLink}</p>
              </a>
              {readMore3 && thirdRow}
            </td>
            <td></td>
          </tr>

          <tr id = "4">
            <td> Use placeholders
            <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore4(!readMore4);
                }}
              >
                <p>{fourLink}</p>
              </a>
              {readMore4 && fourRow}
            </td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3> SASS </h3>
                  </Typography>
                  <Typography>
                    <code>// Placeholder </code> <br />
                    <code> %icon &#123;</code>
                    <br />
                    <code> &nbsp; transition: background-color ease .2s;</code>
                    <br />
                    <code> &nbsp; margin: 0 .5em;</code>
                    <br />
                    <code> &#125;</code>
                    <br />
                    <br />
                    <code>.error-icon &#123;</code> <br />
                    <code> @extend %icon;</code>
                    <br />
                    <code> /* error specific styles... */</code>
                    <br />
                    <code> &#125;</code>
                    <br />
                    <br />
                    <code>.info-icon &#123;</code> <br />
                    <code> @extend %icon;</code>
                    <br />
                    <code> /* info specific styles... */</code>
                    <br />
                    <code> &#125;</code>
                    <br />
                  </Typography>
                </CardContent>
              </Card>
              <br />
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3> Generated code </h3>
                  </Typography>
                  <Typography>
                    <code> .error-icon, .info-icon &#123; </code> <br />
                    <code> transition: background-color ease .2s; </code> <br />
                    <code> &nbsp; margin: 0 .5em;</code>
                    <br />
                    <code> &#125;</code>
                    <br />
                    <br />
                    <code>.error-icon &#123;</code> <br />
                    <code> /* error specific styles... */</code>
                    <br />
                    <code> &#125;</code>
                    <br />
                    <br />
                    <code>.info-icon &#123;</code> <br />
                    <code> /* info specific styles... */</code>
                    <br />
                    <code> &#125;</code>
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="5">
            <td>Minimize nesting
            <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore5(!readMore5);
                }}
              >
                <p>{fiveLink}</p>
              </a>
              {readMore5 && fiveRow}
            </td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3> Not Great </h3>
                  </Typography>
                  <Typography>
                    <code> .header &#123;</code>
                    <br />
                    <code> &nbsp; .nav &#123;</code>
                    <br />
                    <code> &nbsp; &nbsp; .nav-link &#123;</code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; .nav-icon &#123;</code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &#125;</code> <br />
                    <code> &nbsp; &nbsp; &nbsp; .nav-title &#123;</code>
                    <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp; &nbsp; &nbsp;.nav-subtitle &#123;
                    </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp; &#125;</code> <br />
                    <code> &nbsp; &nbsp; &nbsp; &#125;</code> <br />
                    <code> &nbsp; &nbsp; &#125;</code> <br />
                    <code> &nbsp; &#125;</code> <br />
                    <code> &#125;</code> <br />
                  </Typography>
                </CardContent>
              </Card>
              <br />
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3> Better </h3>
                  </Typography>
                  <Typography>
                    <code> .header &#123;</code>
                    <br />
                    <code> &#125;</code> <br />
                    <code> &nbsp; .nav &#123;</code>
                    <br />
                    <code> &nbsp; &nbsp; .nav-link &#123;</code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; .nav-icon &#123;</code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &#125;</code> <br />
                    <code> &nbsp; &nbsp; &nbsp; .nav-title &#123;</code>
                    <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp; &nbsp; &nbsp;.nav-subtitle &#123;
                    </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &#125;</code> <br />
                    <code> &nbsp; &nbsp; &#125;</code> <br />
                    <code> &nbsp; &#125;</code> <br />
                    <code> &#125;</code> <br />
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3> Even Better </h3>
                  </Typography>
                  <Typography>
                    <code> .header &#123;</code>
                    <br />
                    <code> &#125;</code> <br />
                    <code> &nbsp; .nav &#123;</code>
                    <br />
                    <code> &#125;</code> <br />
                    <code> .nav-link &#123;</code>
                    <br />
                    <code> &#125;</code> <br />
                    <code> .nav-icon &#123;</code>
                    <br />
                    <code> &#125;</code> <br />
                    <code> .nav-title &#123;</code>
                    <br />
                    <code> &#125;</code> <br />
                    <code> .nav-subtitle &#123;</code>
                    <br />
                    <code> &#125;</code> <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id ="6">
            <td>
              Avoid Concatenation with &
              <ul>
                <li> Avoid concatenating class names with &.</li>
                <li>
                  Use & only when appending to full class names or
                  pseudo-selectors.
                </li>
              </ul>
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore6(!readMore6);
                }}
              >
                <p>{sixLink}</p>
              </a>
              {readMore6 && sixRow}
            </td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code> .class &#123; </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp; &__element &#123; </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp;&#125;</code>
                    <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp; &nbsp; &nbsp; &--modifier &#123;{" "}
                    </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp;&#125;</code>
                    <br />
                    <code>&#125;</code>
                    <br />
                  </Typography>
                </CardContent>
              </Card>
              <br />
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3> correct </h3>
                  </Typography>
                  <Typography>
                    <code> .class &#123;</code>
                    <br />
                    <code> &#125;</code> <br /> <br />
                    <code> .class__element &#123;</code>
                    <br />
                    <code> &#125;</code> <br /> <br />
                    <code> .class--modifier &#123;</code>
                    <br />
                    <code> &#125;</code> <br />
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3> correct </h3>
                  </Typography>
                  <Typography>
                    <code> .class &#123; </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp;&:hover &#123; </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp;&#125;</code>
                    <br /> <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp; &nbsp; &nbsp; &.dynamically-applied-class
                      &#123;{" "}
                    </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp;&#125;</code>
                    <br />
                    <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp; &nbsp; &nbsp;.parent-selector & &#123;{" "}
                    </code>
                    <br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp;&#125;</code>
                    <br />
                    <code>&#125;</code>
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Sass;

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CSS = () => {
  const [readMore, setreadMore] = useState(false);
  const [readMore2, setreadMore2] = useState(false);
  const [readMore4, setreadMore4] = useState(false);
  const [readMore5, setreadMore5] = useState(false);
  const [readMore7, setreadMore7] = useState(false);
  const [readMore8, setreadMore8] = useState(false);
  const [readMore9, setreadMore9] = useState(false);
  const [readMore10, setreadMore10] = useState(false);
  const [readMore11, setreadMore11] = useState(false);
  const [readMore12, setreadMore12] = useState(false);
  const [readMore13, setreadMore13] = useState(false);
  const [readMore14, setreadMore14] = useState(false);
  const [readMore16, setreadMore16] = useState(false);
  const [readMore17, setreadMore17] = useState(false);
  const [readMore18, setreadMore18] = useState(false);

  const firstRow = (
    <div>
      <p className="extra-content">
        There are tools that can compress code, remove comments, and do other
        wonderful things. Worry about writing maintainable, easy to read code
        and leave the dirty work to our tools.
      </p>
    </div>
  );
  const firstLink = readMore ? "Read Less << " : "Read More >> ";

  const SecondRow = (
    <div>
      <p className="extra-content">
        <h5> Block </h5>
        <p> Standalone entity that is meaningful on its own.</p>
        <p> Examples: header, container, menu, checkbox, input</p>
        <h5> Element </h5>
        <p>
          A part of a block that has no standalone meaning and is semantically
          tied to its block.
        </p>
        <p>Examples: menu item, list item, checkbox caption, header title</p>
        <h5> Modifier</h5>
        <p>
          A flag on a block or element. Use them to change appearance or
          behavior.{" "}
        </p>
        <p>
          {" "}
          Examples: disabled, highlighted, checked, fixed, size big, color{" "}
        </p>
      </p>
    </div>
  );
  const secondLink = readMore2 ? "Read Less << " : "Read More >> ";

  const fourRow = (
    <div>
      <p className="extra-content">
        Well named classes make it easier to developers to parse the code and
        figure out how the pieces fit together, but don't go overboard. A super
        long class name takes more time to write and takes up precious bytes. If
        you find yourself with a long class name, perhaps its time to break up
        your code blocks. Check out the BEM naming conventions below.
      </p>
    </div>
  );
  const fourLink = readMore4 ? "Read Less << " : "Read More >> ";

  const fiveRow = (
    <div>
      <p className="extra-content">
        The validators are often more strict than reality allows, but make sure
        if your page is invalid that you can justify why.
      </p>
    </div>
  );
  const fiveLink = readMore5 ? "Read Less << " : "Read More >> ";

  const sevenRow = (
    <div>
      <p className="extra-content">
        Even if it would immediately fix a bug, it's worth taking the time to
        update the CSS properly, otherwise the next developer to fix a bug may
        add another !important and before long the CSS is near impossible to
        maintain.
      </p>
    </div>
  );
  const sevenLink = readMore7 ? "Read Less << " : "Read More >> ";

  const eightRow = (
    <div>
      <p className="extra-content">
        Element selectors reduce the re-usability of CSS rules by linking them
        directly to an element. By using class selectors we can easily swap the
        class to a different element and maintain styling. Think of applying the
        same class to a button or a tag and achieving the same style.
      </p>
    </div>
  );
  const eightLink = readMore8 ? "Read Less << " : "Read More >> ";
  const nineRow = (
    <div>
      <p className="extra-content">This aids in readability.</p>
    </div>
  );
  const nineLink = readMore9 ? "Read Less << " : "Read More >> ";
  const tenRow = (
    <div>
      <p className="extra-content">This aids in readability.</p>
    </div>
  );
  const tenLink = readMore10 ? "Read Less << " : "Read More >> ";

  const elevenRow = (
    <div>
      <p className="extra-content">This aids in readability.</p>
    </div>
  );
  const elevenLink = readMore11 ? "Read Less << " : "Read More >> ";

  const twelveRow = (
    <div>
      <p className="extra-content">This aids in readability.</p>
    </div>
  );
  const twelveLink = readMore12 ? "Read Less << " : "Read More >> ";

  const thirteenRow = (
    <div>
      <p className="extra-content">This aids in readability.</p>
    </div>
  );
  const thirteenLink = readMore13 ? "Read Less << " : "Read More >> ";

  const fourteenRow = (
    <div>
      <p className="extra-content">This aids in readability.</p>
    </div>
  );
  const fourteenLink = readMore14 ? "Read Less << " : "Read More >> ";

  const sixteenRow = (
    <div>
      <p className="extra-content">
        When you use line height without a unit it tells the browser to multiply
        the font-size by the line height. This ensures that the line-height and
        font-size are always relative to one another.
      </p>
    </div>
  );
  const sixteenLink = readMore16 ? "Read Less << " : "Read More >> ";

  const seventeenRow = (
    <div>
      <p className="extra-content">
        It takes the content out of normal document flow and can cause layout
        issues, especially with responsive.
      </p>
    </div>
  );
  const seventeenLink = readMore17 ? "Read Less << " : "Read More >> ";

  const eighteenRow = (
    <div>
      <p className="extra-content">
        All text must be content managed so that it can be easily changed and so
        that it can support multilingual sites. Have the text be provided in
        HTML by the CSS, or as a data-attribute and pulled in via JS. Text
        should not appear in the CSS.
      </p>
    </div>
  );
  const eighteenLink = readMore18 ? "Read Less << " : "Read More >> ";

  return (
    <div className="Container">
      <div className="Link">
        <ul>
          <h1> Css</h1>
          
          <p> Created by Haseeb Ul Hasan on April 7 , 2022</p>
          <li>
            <a href="#1">
              In source code, always favor maintainability and human readability
              over file size.
            </a>
          </li>
          <li>
            <a href="#2">Use Block Element Modifier (BEM) pattern</a>
          </li>
          <li>
            <a href="#3">
              Use // for single line comments and /* */ for multi-line comments
            </a>
          </li>
          <li>
            <a href="#4">
              Make class names as human friendly as possible, within reason.
            </a>
          </li>
          <li>
            <a href="#5">Validate your CSS.</a>
          </li>
          <li>
            <a href="#6">
              CSS properties should be sorted and grouped following the Verndale
              rules outlined in the respective lint files for each project.
            </a>
          </li>
          <li>
            <a href="#7">Avoid !important if you can</a>
          </li>
          <li>
            <a href="#8">Avoid using element selectors.</a>
          </li>
          <li>
            <a href="#9">Selectors should be on their own line</a>
          </li>
          <li>
            <a href="#10">The closing bracket should be on its own line.</a>
          </li>
          <li>
            <a href="#11">Place multiple selectors on separate lines.</a>
          </li>
          <li>
            <a href="#12">Each property should be on its own line.</a>
          </li>
          <li>
            <a href="#13">Indent properties 2 spaces.</a>
          </li>
          <li>
            <a href="#14">There should be a line break between selectors.</a>
          </li>
          <li>
            <a href="#15">Use CSS shorthand wherever possible.</a>
          </li>
          <li>
            <a href="#16">Use unitless line height.</a>
          </li>
          <li>
            <a href="#17">Minimize use of position: absolute.</a>
          </li>
          <li>
            <a href="#18">
              If using the content property, do not hardcode text.
            </a>
          </li>
        </ul>
      </div>
      <br /> <br />

      <div className="table">
        <table>
          <tr>
            <td id="1">
              {" "}
              In source code, always favor maintainability and human readability
              over file size.{" "}
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
            <td> </td>
          </tr>

          <tr>
            <td id="2">
              {" "}
              Use Block Element Modifier (BEM) pattern
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore2(!readMore2);
                }}
              >
                <p>{secondLink}</p>
              </a>
              {readMore2 && SecondRow}
            </td>
            <td>
              {" "}
              <br />
              <Card sx={{ border: 1 }}>
                <CardContent>
                  <Typography>
                    <code style={{ color: "green" }}> // Block component </code>{" "}
                    <br />
                    <code> .btn &#123;&#125; </code> <br />
                    <code style={{ color: "green" }}>
                      {" "}
                      // Element that depends upon the block{" "}
                    </code>
                    <br />
                    <code> .btn__price &#123;&#125; </code>
                    <br />
                    <code style={{ color: "green" }}>
                      {" "}
                      // Modifier that changes the style of the block{" "}
                    </code>
                    <br />
                    <code> .btn--orange &#123;&#125;</code>
                    <br />
                    <code> .btn--big &#123;&#125;</code>
                    <br />
                  </Typography>
                </CardContent>
              </Card>
              <h3> The markup will look something like this: </h3>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography>
                    <code>
                      {" "}
                      &#60;a class="btn btn--big btn--orange" href="#"&#62;{" "}
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      &#60;span class="btn__price" &#62;$9.99 &#60;/span&#62;{" "}
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      &#60;span class="btn__text" &#62; Subscribe &#60;/span
                      &#62;{" "}
                    </code>
                    <code> &#60;/a &#62;</code>
                  </Typography>
                </CardContent>
              </Card>
              <br />
            </td>
          </tr>

          <tr>
            <td id="3">
              Use // for single line comments and /* */ for multi-line comments
            </td>
            <td>
              <h4> Single-line Comments </h4>
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
                    <code> /* Primary button */</code>
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
                    <code> // Primary button </code>
                  </Typography>
                </CardContent>
              </Card>
              <h4> Multi-line Comments </h4>
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
                    <code> // Import all global style </code> <br />
                    <code>// Import all modules </code>
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
                    <code> /* </code> <br />
                    <code> Import all global style </code> <br />
                    <code>Import all modules </code> <br />
                    <code> */ </code> <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="4">
            <td>
              Make class names as human friendly as possible, within reason.
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
                    <h3> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code> .c1w &#123;&#125; </code>
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
                    <code>.column-one--wide &#123;&#125; </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>
          <tr>
            <td id="5">
              Validate your CSS.
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
            <td></td>
          </tr>
          <tr>
            <td id="6">
              CSS properties should be sorted and grouped following the Verndale
              rules outlined in the respective lint files for each project.
            </td>

            <td></td>
          </tr>
          <tr>
            <td id="7">
              Avoid !important if you can
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore7(!readMore7);
                }}
              >
                <p>{sevenLink}</p>
              </a>
              {readMore7 && sevenRow}
            </td>
            <td></td>
          </tr>
          <tr>
            <td id="8">
              {" "}
              Avoid using element selectors.
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore8(!readMore8);
                }}
              >
                <p>{eightLink}</p>
              </a>
              {readMore8 && eightRow}
            </td>
            <td>
              <p>Example 1 </p>
              <p>
                {" "}
                Are you really sure you want every h1 in the site to use those
                styles? If so, go ahead, but don't set values on an element
                level and then override them later when you need a different
                style. Element styles should be something that applies to every
                instance of an element, otherwise use a class.
              </p>
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
                    <code> h1 &#123; </code> <br />
                    <code> color: #000; </code> <br />
                    <code> font-size: 12px; </code> <br />
                    <code> &#125; </code> <br />
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
                    <code> .hero__header &#123; </code> <br />
                    <code> color: #000; </code> <br />
                    <code> font-size: 12px; </code> <br />
                    <code> &#125; </code> <br />
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
              <p> Example 2</p>
              <p>
                The first selector is more specific, and therefore slower(ever
                so slightly) for a browser to render. It also prevents you from
                re-using that class or id on a different element.
              </p>
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
                    <code> ul.nav &#123; &#125; </code> <br />
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
                    <code> .nav &#123;&#125; </code> <br />
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
              <p> Exception </p>
              <p>
                {" "}
                A common exception is RTF fields. In RTF fields we want to
                minimize the amount a content author must do to achieve the
                design, this requires keeping HTML code as simple and class free
                as possible. See more details: RTF Fields
              </p>
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
                    <code> .rtf &#123; </code> <br />
                    <code> &#125; </code> <br />
                    <code> .rtf ul &#123; </code> <br />
                    <code> &#125; </code> <br />
                    <code>.rtf li &#123; </code> <br />
                    <code> &#125; </code> <br />
                    <code> .rtf p &#123; </code> <br />
                    <code> &#125; </code> <br />
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
            </td>
          </tr>

          <tr>
            <td id="9">
              Selectors should be on their own line
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore9(!readMore9);
                }}
              >
                <p>{nineLink}</p>
              </a>
              {readMore9 && nineRow}
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
                    <code> .nav &#123; margin: 0;&#125; </code>
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
                    <code>.nav &#123; </code> <br />
                    <code>margin: 0;</code> <br />
                    <code> &#125; </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr>
            <td id="10">
              The closing bracket should be on its own line.
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore10(!readMore10);
                }}
              >
                <p>{tenLink}</p>
              </a>
              {readMore10 && tenRow}
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
                    <code> .nav &#123; </code> <br />
                    <code> margin: 0;&#125;</code>
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
                    <code>.nav &#123; </code> <br />
                    <code>margin: 0;</code> <br />
                    <code> &#125; </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr>
            <td id="11">
              Place multiple selectors on separate lines.
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore11(!readMore11);
                }}
              >
                <p>{elevenLink}</p>
              </a>
              {readMore11 && elevenRow}
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
                    <code> .teaser, .highlight&#123; </code> <br />
                    <code> background: red; </code> <br />
                    <code> &#125;</code>
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
                    <code> .teaser, </code> <br />
                    <code> .highlight&#123; </code> <br />
                    <code> background: red; </code> <br />
                    <code> &#125;</code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr>
            <td id="12">
              Each property should be on its own line.
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore12(!readMore12);
                }}
              >
                <p>{twelveLink}</p>
              </a>
              {readMore12 && twelveRow}
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
                    <code> .nav &#123; </code> <br />
                    <code> margin: 0; padding: 0;</code> <br />
                    <code> &#125;</code>
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
                    <code> .nav &#123; </code> <br />
                    <code> margin: 0; </code> <br />
                    <code> padding: 0;</code> <br />
                    <code> &#125;</code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>
          <tr>
            <td id="13">
              Indent properties 2 spaces.
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore13(!readMore13);
                }}
              >
                <p>{thirteenLink}</p>
              </a>
              {readMore13 && thirteenRow}
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
                    <code> .nav &#123; </code> <br />
                    <code> margin: 0; </code> <br />
                    <code> padding: 0;</code> <br />
                    <code> &#125;</code>
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
                    <code> .nav &#123; </code> <br />
                    <code> margin: 0; </code> <br />
                    <code> padding: 0;</code> <br />
                    <code> &#125;</code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>
          <tr>
            <td id="14">
              There should be a line break between selectors.
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore14(!readMore14);
                }}
              >
                <p>{fourteenLink}</p>
              </a>
              {readMore14 && fourteenRow}
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
                    <code> .nav &#123; </code> <br />
                    <code> &#125;</code> <br />
                    <code> .box &#123; </code> <br />
                    <code> &#125;</code>
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
                    <Typography>
                      <code> .nav &#123; </code> <br />
                      <code> &#125;</code> <br /> <br />
                      <code> .box &#123; </code> <br />
                      <code> &#125;</code>
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr>
            <td id="15">
              Use CSS shorthand wherever possible.
              <p>
                {" "}
                An exception is when some of the properties may be inherited
                from elsewhere.
              </p>
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
                    <code> margin-left: 12px; </code> <br />
                    <code> margin-right: 10px;</code>
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
                    <code> margin: 0 10px 12px; </code> <br />
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
                    <h3> Exception </h3>
                  </Typography>

                  <Typography>
                    <code> &#60; p class="teaser highlight" &#62; </code> <br />
                    <code> .teaser &#123;</code> <br />
                    <code> margin: 10px; </code> <br /> <br />
                    <code> &#125;</code> <br />
                    <code> .highlight &#123;</code> <br />
                    <code> margin-left: 15px; </code> <br />
                    <code> margin-right: 15px; </code> <br />
                    <code> &#125;</code> <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>
          <tr>
            <td id="16">
              Use unitless line height.
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore16(!readMore16);
                }}
              >
                <p>{sixteenLink}</p>
              </a>
              {readMore16 && sixteenRow}
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
                    <code> font-size: 12px; </code> <br />
                    <code> line-height: 18px; </code>
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
                    <code> font-size: 12px; </code> <br />
                    <code> line-height: 1.5px; </code>
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
            </td>
          </tr>
          <tr>
            <td id="17">
              {" "}
              Minimize use of position: absolute.
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore17(!readMore17);
                }}
              >
                <p>{seventeenLink}</p>
              </a>
              {readMore17 && seventeenRow}
            </td>
            <td></td>
          </tr>
          <tr>
            <td id="18">
              If using the content property, do not hardcode text.
              <a
                className="read-more-link"
                style={{ color: "blue" }}
                onClick={() => {
                  setreadMore18(!readMore18);
                }}
              >
                <p>{eighteenLink}</p>
              </a>
              {readMore18 && eighteenRow}
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
                    <code> .button:before &#123; </code> <br /> <br />
                    <code> content: "click here"; </code> <br />
                    <code> &#125;</code>
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
                    <code> .button:before &#123; </code> <br /> <br />
                    <code> content: "&#62;"; </code> <br />
                    <code> &#125; </code>
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CSS;

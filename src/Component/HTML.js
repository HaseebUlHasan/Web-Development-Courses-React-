import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Flowchart from "../flowchart.png";

const HTML = () => {
  const [readMore, setreadMore] = useState(false);
  const [readMore2, setreadMore2] = useState(false);
  const [readMore3, setreadMore3] = useState(false);
  const [readMore6, setreadMore6] = useState(false);
  const [readMore10, setreadMore10] = useState(false);
  const [readMore11, setreadMore11] = useState(false);
  const [readMore12, setreadMore12] = useState(false);

  const firstRow = (
    <div>
      <p className="extra-content">
        The best way to test this is to disable CSS and JavaScript. How much of
        your page is still left? Does it make sense and is it usable as is? Keep
        in mind progressive enhancement and/or graceful degradation.
      </p>
    </div>
  );
  const firstLink = readMore ? "Read Less << " : "Read More >> ";

  const secondRow = (
    <div>
      <p className="extra-content">
        There are tools that can compress code, remove comments, and do other
        wonderful things. Worry about writing maintainable, easy to read code
        and leave the dirty work to our tools.
      </p>
    </div>
  );
  const secondLink = readMore2 ? "Read Less << " : "Read More >> ";

  const thirdRow = (
    <div>
      <p className="extra-content">
        The validators are often more strict than reality allows, but make sure
        if your page is invalid that you can justify why.
      </p>
    </div>
  );
  const thirdLink = readMore3 ? "Read Less << " : "Read More >> ";

  const sixRow = (
    <div>
      <p className="extra-content">
        In many cases classes are a better option as they offer increased
        flexibility and reuse down the road.
      </p>
    </div>
  );
  const sixLink = readMore6 ? "Read Less << " : "Read More >> ";

  const tenRow = (
    <div>
      <p className="extra-content">
        There is a place for these elements, but if you have a lot of nested
        divs, you should evaluate whether or not they are really needed.
      </p>
    </div>
  );
  const tenLink = readMore10 ? "Read Less << " : "Read More >> ";

  const elevenRow = (
    <div>
      <p className="extra-content">
        The more elements the slower the page load and the slower JavaScript can
        work with the DOM. If you find yourself wrapping elements in multiple
        containers, stop and evaluate the code and whether it is really
        necessary.
      </p>
    </div>
  );
  const elevenLink = readMore11 ? "Read Less << " : "Read More >> ";

  const twelveRow = (
    <div>
      <p className="extra-content">
        This denotes which form field a label applies to and improves
        accessibility.
      </p>
    </div>
  );
  const twelveLink = readMore12 ? "Read Less << " : "Read More >> ";

  return (
    <div className="Container">
      <div className="Link">
        <ul>
          <h1> HTML5</h1>
          <li>
            <a href="#1">All content should be accessible</a>
          </li>
          <li>
            <a href="#2">
              In source code, always favor maintainability and human readability
              over file size.
            </a>
          </li>
          <li>
            <a href="#3">Validate your HTML.</a>
          </li>
          <li>
            <a href="#4">All tags and attribute should be lower case</a>
          </li>
          <li>
            <a href="#5">Use double quotes for all attributes</a>
          </li>
          <li>
            <a href="#6">Think carefully before using IDs</a>
          </li>
          <li>
            <a href="#7">
              Only include CSS using a &#60;link &#62; element. Do not use
              @import, &#60;style &#62;, or inline CSS
            </a>
          </li>
          <li>
            <a href="#8">Including JavaScript</a>
          </li>
          <li>
            <a href="#9">Use semantically correct markup.</a>
          </li>
          <li>
            <a href="#10">
              Minimize the use of semantically empty elements such as div and
              span.
            </a>
          </li>
          <li>
            <a href="#11">Minimize the number of DOM elements.</a>
          </li>
          <li>
            <a href="#12">Always use the for attribute with a label.</a>
          </li>
          <li>
            <a href="#13">
              Never use a label without an associated form element
            </a>
          </li>
          <li>
            <a href="#14">
              Try to use meaningful rather than presentational names.
            </a>
          </li>
          <li>
            <a href="#15">
              Classes and IDs should follow BEM naming conventions
            </a>
          </li>
        </ul>
      </div>
      <br /> <br />
      <div className="table">
        <table>
          <tr id="1">
            <td>
              {" "}
              All content should be accessible
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

          <tr id="2">
            <td>
              {" "}
              In source code, always favor maintainability and human readability
              over file size.
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
            <td> </td>
          </tr>

          <tr id="3">
            <td>
              {" "}
              Validate your HTML.
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
            <td> </td>
          </tr>
          <tr id="4">
            <td> All tags and attribute should be lower case </td>
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
                    <code> &#60;DIV class="test"&#62;... &#60;/DIV&#62; </code>
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
                    <code> &#60;div class="test"&#62;...&#60;/div&#62; </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="5">
            <td> Use double quotes for all attributes </td>
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
                    <code> &#60;div class='test'&#62;... &#60;/div&#62; </code>
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
                    <code> &#60;div class="test"&#62;...&#60;/div&#62; </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="6">
            <td>
              Think carefully before using IDs
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
            <td></td>
          </tr>

          <tr id="7">
            <td>
              {" "}
              Only include CSS using a &#60;link &#62; element. Do not use
              @import, &#60;style &#62;, or inline CSS
            </td>
            <td></td>
          </tr>

          <tr id="8">
            <td>
              Including JavaScript
              <ul>
                <li>
                  {" "}
                  Try to include all JavaScript files at the end of the page.
                </li>
                <li>
                  {" "}
                  Only put JavaScript that is absolutely necessary in the
                  header.
                </li>
                <li>Avoid script tags elsewhere in the body.</li>
                <li>Do not use inline JavaScript.</li>
              </ul>
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
                    <code>
                      {" "}
                      &#60;a href="#" onclick="showMore();"&#62; &#60;/a&#62;
                    </code>
                  </Typography>
                </CardContent>
              </Card>
              <br />
              <p>
                {" "}
                In the below example, you would have JavaScript find elements
                with a class of more-button and add a click event.
              </p>
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
                    <code> &#60;a href="#" class="more-button"&#62; </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="9">
            <td>
              Use semantically correct markup.
              <p>
                {" "}
                When in doubt, follow this handy flowchart: (click to enlarge){" "}
              </p>
              <img src={Flowchart} style={{ width: "100%" }} />
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
                    <code>
                      {" "}
                      &#60;div class='heading-2'&#62; ... &#60;/div&#62;
                    </code>{" "}
                    <br />
                    <code> &#60;div class="text"&#62; ... &#60;/div&#62;</code>
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
                    <code> &#60;h2&#62; </code> <br />
                    <code> &#60;p&#62; </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="10">
            <td>
              {" "}
              Minimize the use of semantically empty elements such as div and
              span.
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
            <td> </td>
          </tr>

          <tr id="11">
            <td>
              Minimize the number of DOM elements.
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
            <td> </td>
          </tr>

          <tr id="12">
            <td>
              Always use the for attribute with a label.
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
                    <code> &#60;label&#62;Name&#60;/label&#62;</code> <br />
                    <code> &#60;input type="text" id="name"&#62; </code>
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
                    <h3> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code> &#60;label&#62;Name</code> <br />
                    <code> &#60;input type="text" id="name"&#62; </code> <br />
                    <code>&#60;/label&#62;</code>
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
                    <code> &#60;label for="name"&#62;Name&#60;/label&#62;</code>{" "}
                    <br />
                    <code> &#60;input type="text" id="name"&#62; </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="13">
            <td> Never use a label without an associated form element</td>
            <td> </td>
          </tr>

          <tr id="14">
            <td> Try to use meaningful rather than presentational names. </td>
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
                    <code>.red-box</code> <br />
                    <code> .yellow-box</code>
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
                    <code>.alert </code> <br />
                    <code> .warning </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="15">
            <td> Classes and IDs should follow BEM naming conventions</td>
            <td>
              <p>
                {" "}
                A <strong>block</strong> should have words seprated by{" "}
                <strong>dashes</strong>
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
                    <code>.globalNav</code> <br />
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
                    <code>.global-nav </code> <br />
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
              <p>
                {" "}
                An <strong>element</strong> should be appended to a block with{" "}
                <strong>double underscores</strong>
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
                    <code>.global-nav-link</code> <br />
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
                    <code>..global-nav__link </code> <br />
                  </Typography>
                </CardContent>
              </Card>
              <p>
                {" "}
                An <strong>modifier</strong> should be appended to a block or
                element with <strong>double dashes</strong>
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
                    <code>.global-nav__link-primary</code> <br />
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
                    <code>.global-nav__link--primary </code> <br />
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

export default HTML;

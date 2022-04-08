import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const JavaScript = () => {
  const [readMore, setreadMore] = useState(false);
  const [readMore2, setreadMore2] = useState(false);
  const [readMore5, setreadMore5] = useState(false);
  const [readMore6, setreadMore6] = useState(false);
  const [readMore7, setreadMore7] = useState(false);
  const [readMore10, setreadMore10] = useState(false);
  const [readMore11, setreadMore11] = useState(false);
  const [readMore12, setreadMore12] = useState(false);
  const [readMore18, setreadMore18] = useState(false);

  const firstRow = (
    <div>
      <p className="extra-content">
        Please see the differences in these definitions:
      </p>
      <a
        href="https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75"
        target="_blank"
      >
        https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75
      </a>
    </div>
  );
  const firstLink = readMore ? "Read Less << " : "Read More >> ";

  const secondRow = (
    <div>
      <p className="extra-content">
        ESLint is used to catch this and will give you a warning, to get
        realtime linting warnings,
        <a
          href="https://confluence.verndale.com/login.action?os_destination=%2Fpages%2Fviewpage.action%3FspaceKey%3D%7EJoe.Fusco%26title%3DESLint&permissionViolation=true"
          target="_blank"
        >
          {" "}
          click here
        </a>{" "}
        to find out how to set it up in your IDE.
      </p>
    </div>
  );
  const secondLink = readMore2 ? "Read Less << " : "Read More >> ";

  const fiveRow = (
    <div>
      <p className="extra-content">
        <p className="extra-content">
          ESLint is used to catch this and will give you a warning, to get
          realtime linting warnings,
          <a
            href="https://confluence.verndale.com/login.action?os_destination=%2Fpages%2Fviewpage.action%3FspaceKey%3D%7EJoe.Fusco%26title%3DESLint&permissionViolation=true"
            target="_blank"
          >
            {" "}
            click here
          </a>{" "}
          to find out how to set it up in your IDE.
        </p>
      </p>
    </div>
  );
  const fiveLink = readMore5 ? "Read Less << " : "Read More >> ";

  const sixRow = (
    <div>
      <p className="extra-content">
        <p className="extra-content">
          ESLint is used to catch this and will give you a warning, to get
          realtime linting warnings,
          <a href="https://confluence.verndale.com/login.action?os_destination=%2Fpages%2Fviewpage.action%3FspaceKey%3D%7EJoe.Fusco%26title%3DESLint&permissionViolation=true" target="_blank">
            click here
          </a>{" "}
          to find out how to set it up in your IDE.
        </p>
      </p>
    </div>
  );
  const sixLink = readMore6 ? "Read Less << " : "Read More >> ";

  const sevenRow = (
    <div>
      <p className="extra-content">
        Make sure to add some whitespace between groups of variables or
        functionality to improve readability.
      </p>
    </div>
  );
  const sevenLink = readMore7 ? "Read Less << " : "Read More >> ";

  const tenRow = (
    <div>
      <p className="extra-content">
        Any time you select an element, jQuery or not, depending on the method
        you use, you are traversing the document object model to find the
        element you requested. This requires a relatively long execution time to
        select a single element.
      </p>
    </div>
  );
  const tenLink = readMore10 ? "Read Less << " : "Read More >> ";

  const elevenRow = (
    <div>
      <p className="extra-content">
        This is especially true when looping over data and rendering items.
      </p>
    </div>
  );
  const elevenLink = readMore11 ? "Read Less << " : "Read More >> ";

  const twelveRow = (
    <div>
      <p className="extra-content">
        Default parameter documentation: <br />
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters" target="_blank">
          {" "}
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
        </a>
      </p>
    </div>
  );
  const twelveLink = readMore12 ? "Read Less << " : "Read More >> ";

  const eighteenRow = (
    <div>
      <p className="extra-content">
        Inheriting or extending a single "class" is fine. However, if you find
        that you need to extend more than once, use composition as it's easier
        to track down errors and is more flexible.
      </p>
      <br />
      <p>There are numerous articles to read that go in to more detail:</p>
      <ul>
        <li>
          {" "}
          <a href="https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3" target="_blank">
            {" "}
            The Two Pillars of JavaScript
          </a>
        </li>
        <li>
          {" "}
          <a href="https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4" target="_blank">
            {" "}
            Why I use Tape Instead of Mocha & So Should You
          </a>
        </li>
        <li>
          {" "}
          <a href="https://medium.com/javascript-scene/a-simple-challenge-to-classical-inheritance-fans-e78c2cf5eead" target="_blank">
            A Simple Challenge to Classical Inheritance Fans
          </a>
        </li>
        <li>
          {" "}
          <a href="https://medium.com/javascript-scene/assessing-employee-performance-1a8bdee45c1a" target="_blank">
            {" "}
            Assessing Employee Performance
          </a>
        </li>
        <li>
          {" "}
          <a href="https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4" target="_blank">
            {" "}
            How to Use Classes and Sleep at Night
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/joshburgess/not-awesome-es6-classes/" target="_blank">
            A curated list of resources on why ES6 (aka ES2015) classes are NOT
            awesome
          </a>
        </li>
        <li>
          {" "}
          <a href="https://rjzaworski.com/2013/03/composition-in-javascript" target="_blank">
            {" "}
            Composition in Javascript
          </a>
        </li>
        <li>
          <a href="https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750" target="_blank">
            {" "}
            Mixins Are Dead. Long Live Composition
          </a>
        </li>
        <li>
          {" "}
          <a href="https://stackoverflow.com/questions/8696695/composition-inheritance-and-aggregation-in-javascript" target="_blank">
            Composition, Inheritance, and Aggregation in JavaScript
          </a>
        </li>
      </ul>
    </div>
  );
  const eighteenLink = readMore18 ? "Read Less << " : "Read More >> ";

  return (
    <div className="Container">
      <div className="Link">
        <ul>
          <h1> JS </h1>
          <li>
            <a href="#1">Use 'let' and 'const' instead of 'var'</a>
          </li>
          <li>
            <a href="#2">
              ALWAYS combine let definitions when you can; NEVER combine const
              definitions
            </a>
          </li>
          <li>
            <a href="#3">
              Use camel case for all variable definitions and function names
            </a>
          </li>
          <li>
            <a href="#4">
              Use camel case for all variable definitions and function names
            </a>
          </li>
          <li>
            <a href="#5">
              Use single quotes for defining string values and double quotes for
              HTML attributes
            </a>
          </li>
          <li>
            <a href="#6">Use ES6 template literals</a>
          </li>
          <li>
            <a href="#7">Use proper whitespace</a>
          </li>
          <li>
            <a href="#8">
              Remove console logs before submitting a pull request
            </a>
          </li>
          <li>
            <a href="#9">When using jQuery, use chaining where applicable</a>
          </li>
          <li>
            <a href="#10">Cache elements when possible.</a>
          </li>
          <li>
            <a href="#11">
              Don't manipulate the DOM until you absolutely need to.
            </a>
          </li>
          <li>
            <a href="#12">
              Take advantage of default value capabilities in ES6
            </a>
          </li>
          <li>
            <a href="#13">Use pascal case for class names</a>
          </li>
          <li>
            <a href="#14">Use "bind" when registering listeners</a>
          </li>
          <li>
            <a href="#15">Prefix event listeners with "handle"</a>
          </li>
          <li>
            <a href="#16">
              All registered listeners should go at the bottom of your file
            </a>
          </li>
          <li>
            <a href="#17">
              Chain your functions by returning 'this' when you can
            </a>
          </li>
          <li>
            <a href="#18">Prefer composition over inheritance</a>
          </li>
        </ul>
      </div>
      <br /> <br />
      <div className="table">
        <table>
          <tr id="1">
            <td>
              Use 'let' and 'const' instead of 'var'
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

          <tr id="2">
            <td>
              {" "}
              ALWAYS combine let definitions when you can; NEVER combine const
              definitions
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
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>let currentPage = 0;</code> <br />
                    <code>let index = 0; </code> <br />
                    <code> let currentClass = '';</code>
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>let currentPage = 0,</code> <br />
                    <code>index = 0, </code> <br />
                    <code> currentClass = '';</code>
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
              <br />
              <br />
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>const openClass = 'module--open',</code> <br />
                    <code> closeClass = 'module--close'; </code> <br />
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>const openClass = 'module--open';</code> <br />
                    <code>const closeClass = 'module--close'; </code> <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="3">
            <td>
              {" "}
              Use camel case for all variable definitions and function names
            </td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>let CurrentPage = 0;</code> <br />
                    <code> const Loadmore = page =&#62; &#123;&#125;; </code>
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>let currentPage = 0;</code> <br />
                    <code>
                      {" "}
                      const loadMore = page =&#62; &#123;&#125;;{" "}
                    </code>{" "}
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="4">
            <td>
              {" "}
              Use all caps and underscores for global constant definitions
            </td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>
                      {" "}
                      export const GOOGLE_API_KEY = 'arf234f-23f23f-243fr5';
                    </code>{" "}
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="5">
            <td>
              {" "}
              Use single quotes for defining string values and double quotes for
              HTML attributes
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
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>const name = "Bob";</code> <br />
                    <code>
                      {" "}
                      const template = "&#60;div
                      class='module'&#62;&#60;/div&#62;";{" "}
                    </code>
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>const name ='Bob';</code> <br />
                    <code>
                      {" "}
                      const template = '&#60;div
                      class="module"&#62;&#60;/div&#62;';{" "}
                    </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="6">
            <td>
              Use ES6 template literals
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
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>const firstName = 'Bob';</code> <br />
                    <code> const lastName = 'Bobberson'; </code>
                    <br />
                    <code>
                      {" "}
                      const fullName = firstName + ' ' + lastName + ' was here';
                    </code>
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>const firstName = 'Bob';</code> <br />
                    <code> const lastName = 'Bobberson'; </code>
                    <br />
                    <code>
                      {" "}
                      const fullName = `$&#123;firstName&#125;
                      $&#123;lastName&#125; was here`;
                    </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="7">
            <td>
              {" "}
              Use proper whitespace
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
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>onLoadDataByFilter(e) &#123; </code> <br />
                    <code> e.preventDefault(); </code>
                    <br />
                    <code> const $target = $(e.currentTarget);</code> <br />
                    <code> const filter = $target.data('filter');</code> <br />
                    <code>
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$filter.removeClass(
                      <span style={{ color: "#336699" }}>this</span>
                      .cssClasses.activeTab);{" "}
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      $target.addClass(
                      <span style={{ color: "#336699" }}>this</span>
                      .cssClasses.activeTab);
                    </code>{" "}
                    <br />
                    <code> &#125; </code>
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>onLoadDataByFilter(e) &#123; </code> <br />
                    <code> e.preventDefault(); </code>
                    <br /> <br />
                    <code> const $target = $(e.currentTarget);</code> <br />
                    <code> const filter = $target.data('filter');</code> <br />
                    <br />
                    <code>
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$filter.removeClass(
                      <span style={{ color: "#336699" }}>this</span>
                      .cssClasses.activeTab);{" "}
                    </code>{" "}
                    <br />
                    <br />
                    <code>
                      {" "}
                      $target.addClass(
                      <span style={{ color: "#336699" }}>this</span>
                      .cssClasses.activeTab);
                    </code>{" "}
                    <br />
                    <code> &#125; </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="8">
            <td> Remove console logs before submitting a pull request</td>
            <td> </td>
          </tr>

          <tr id="9">
            <td>When using jQuery, use chaining where applicable</td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$cta.html($optSelected.data('cta-title'));{" "}
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$cta.attr('href', $optSelected.data('cta-link'));{" "}
                    </code>
                    <br />
                    <code>
                      {" "}
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$cta.removeClass('btn--disabled');
                    </code>{" "}
                    <br />
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>
                      <span style={{ color: "#336699" }}>this</span>.dom.$cta{" "}
                    </code>{" "}
                    <br />
                    <code> &nbsp;.html($optSelected.data('cta-title')) </code>
                    <br />
                    <code>
                      {" "}
                      &nbsp;.attr('href', $optSelected.data('cta-link'))
                    </code>{" "}
                    <br />
                    <code> &nbsp;.removeClass('btn--disabled');</code> <br />
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="10">
            <td>
              {" "}
              Cache elements when possible
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
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>toggle()&#123; </code> <br />
                    <code>
                      {" "}
                      <span style={{ color: "#336699" }}>if</span> (
                      <span style={{ color: "#336699" }}>this</span>
                      .$el.hasClass('expanded'))&#123;{" "}
                    </code>
                    <br />
                    <code>
                      {" "}
                      &nbsp; $('.toggle').text(
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$toggle.data('show-more'))
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      &nbsp;
                      .removeClass('btn--readless').addClass('btn--readmore');
                    </code>
                    <br />
                    <code>
                      {" "}
                      &#125; <span style={{ color: "#336699" }}>else</span>{" "}
                      &#123;
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      &nbsp; $('.toggle').text(
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$toggle.data('show-less'))
                    </code>
                    <br />
                    <code>
                      {" "}
                      &nbsp;
                      .removeClass('btn--readmore').addClass('btn--readless');
                    </code>
                    <br />
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>
                      {" "}
                      <span style={{ color: "#336699" }}>this</span>.dom =
                      &#123;
                    </code>
                    <br />
                    <code> $toggle : $ ('.toggle')</code> <br />
                    <code> &#125; </code> <br /> <br />
                    <code>toggle()&#123; </code> <br />
                    <code>
                      {" "}
                      <span style={{ color: "#336699" }}>if</span> (
                      <span style={{ color: "#336699" }}>this</span>
                      .$el.hasClass('expanded'))&#123;{" "}
                    </code>
                    <br />
                    <code>
                      {" "}
                      &nbsp;
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$('.toggle').text(
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$toggle.data('show-more'))
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      &nbsp;
                      .removeClass('btn--readless').addClass('btn--readmore');
                    </code>
                    <br />
                    <code> &#125; else &#123;</code> <br />
                    <code>
                      {" "}
                      &nbsp;
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$('.toggle').text(
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$toggle.data('show-less'))
                    </code>
                    <br />
                    <code>
                      {" "}
                      &nbsp;
                      .removeClass('btn--readmore').addClass('btn--readless');
                    </code>
                    <br />
                    <code> &nbsp; &#125;</code> <br />
                    <code> &#125;</code> <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="11">
            <td>
              Don't manipulate the DOM until you absolutely need to
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
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>
                      BioPredictiveSearchList.forEach(data =&#62; &#123;{" "}
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$results.append(_template(predictiveTmpl)(data));{" "}
                    </code>
                    <br />
                    <code> &#125;);</code> <br />
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>let items = ''; </code> <br /> <br />
                    <code>
                      BioPredictiveSearchList.forEach(data =&#62; &#123;{" "}
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$results.append(_template(predictiveTmpl)(data));{" "}
                    </code>
                    <br />
                    <code> &#125;);</code> <br /> <br />
                    <code>
                      {" "}
                      <span style={{ color: "#336699" }}>this</span>
                      .dom.$results.html(items);
                    </code>
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="12">
            <td>
              {" "}
              Take advantage of default value capabilities in ES6
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
            <td></td>
          </tr>

          <tr id="13">
            <td> Use pascal case for class names</td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>class homeHero &#123; </code> <br /> <br />
                    <code> &#125;;</code> <br />
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>class HomeHero &#123; </code> <br /> <br />
                    <code> &#125;;</code> <br />
                  </Typography>
                </CardContent>
              </Card>
            </td>
          </tr>

          <tr id="14">
            <td>
              {" "}
              Use "bind" when registering listenersUse pascal case for class
              names
            </td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>class Foo &#123; </code> <br />
                    <code> &nbsp;constructor()&#123;</code> <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp;
                      <span style={{ color: "#336699" }}>this</span>
                      .addListeners();
                    </code>{" "}
                    <br />
                    <code> &#125;;</code> <br /> <br />
                    <code>addListeners()&#123;</code> <br />
                    <code>
                      {" "}
                      $('foo').on('click',{" "}
                      <span style={{ color: "#336699" }}>this</span>
                      .handleClick.bind(
                      <span style={{ color: "#336699" }}>this</span>));
                    </code>{" "}
                    <br />
                    <code> &#125;</code> <br />
                    <code> handleClick(e)&#123;</code>
                    <code style={{ color: "green" }}> //...</code>
                    <code> &nbsp; &#125;</code> <br />
                    <code> &#125;</code> <br />
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
            </td>
          </tr>

          <tr id="15">
            <td> Prefix event listeners with "handle"</td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>class Foo &#123; </code> <br />
                    <code> &nbsp;constructor()&#123;</code> <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp;
                      <span style={{ color: "#336699" }}>this</span>
                      .addListeners();
                    </code>{" "}
                    <br />
                    <code> &#125;;</code> <br /> <br />
                    <code>addListeners()&#123;</code> <br />
                    <code>
                      {" "}
                      $('foo').on('click',{" "}
                      <span style={{ color: "#336699" }}>this</span>
                      .handleClick.bind(
                      <span style={{ color: "#336699" }}>this</span>));
                    </code>{" "}
                    <br />
                    <code> &#125;</code> <br />
                    <code> handleClick(e)&#123;</code>
                    <code style={{ color: "green" }}> //...</code>
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>class Foo &#123; </code> <br />
                    <code> &nbsp;constructor()&#123;</code> <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp;
                      <span style={{ color: "#336699" }}>this</span>
                      .addListeners();
                    </code>{" "}
                    <br />
                    <code> &#125;;</code> <br /> <br />
                    <code>addListeners()&#123;</code> <br />
                    <code>
                      {" "}
                      $('foo').on('click',{" "}
                      <span style={{ color: "#336699" }}>this</span>
                      .handleClick.bind(
                      <span style={{ color: "#336699" }}>this</span>));
                    </code>{" "}
                    <br />
                    <code> &#125;</code> <br />
                    <code> handleClick(e)&#123;</code>
                    <code style={{ color: "green" }}> //...</code>
                    <code> &nbsp; &#125;</code> <br />
                    <code> &#125;</code> <br />
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
            </td>
          </tr>

          <tr id="16">
            <td>
              {" "}
              All registered listeners should go at the bottom of your file
            </td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>class Foo &#123; </code> <br />
                    <code> &nbsp;constructor()&#123;</code> <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp;
                      <span style={{ color: "#336699" }}>this</span>
                      .addListeners();
                    </code>{" "}
                    <br />
                    <code> &#125;;</code> <br /> <br />
                    <code> onClick(e) &#123;</code> <br />
                    <code style={{ color: "green" }}> //...</code> <br />
                    <code> &#125;</code> <br /> <br />
                    <code style={{ color: "green" }}> //other functions </code>
                    <br />
                    <code>addListeners()&#123;</code> <br />
                    <code>
                      {" "}
                      $('foo').on('click',{" "}
                      <span style={{ color: "#336699" }}>this</span>
                      .handleClick.bind(
                      <span style={{ color: "#336699" }}>this</span>));
                    </code>{" "}
                    <br />
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>class Foo &#123; </code> <br />
                    <code> &nbsp;constructor()&#123;</code> <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp;
                      <span style={{ color: "#336699" }}>this</span>
                      .addListeners();
                    </code>{" "}
                    <br />
                    <code> &#125;;</code> <br /> <br />
                    <code>addListeners()&#123;</code> <br />
                    <code>
                      {" "}
                      $('foo').on('click',{" "}
                      <span style={{ color: "#336699" }}>this</span>
                      .handleClick.bind(
                      <span style={{ color: "#336699" }}>this</span>));
                    </code>{" "}
                    <br />
                    <code> &#125;</code> <br /> <br />
                    <code style={{ color: "green" }}> //other functions </code>
                    <br /> <br />
                    <code> handleClick(e)&#123;</code>
                    <code style={{ color: "green" }}> //...</code> <br />
                    <code> &nbsp; &#125;</code> <br />
                    <code> &#125;</code> <br />
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
            </td>
          </tr>

          <tr id="17">
            <td> Chain your functions by returning 'this' when you can</td>
            <td>
              <Card sx={{ minWidth: 275, border: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3 className="wrong"> Incorrect </h3>
                  </Typography>
                  <Typography>
                    <code>class Foo &#123; </code> <br />
                    <code> &nbsp;constructor()&#123;</code> <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp;
                      <span style={{ color: "#336699" }}>this</span>
                      .initSelect();
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp;
                      <span style={{ color: "#336699" }}>this</span>
                      .initValidation();
                    </code>{" "}
                    <br /> <br />
                    <code> &#125;;</code> <br /> <br />
                    <code>initSelect() &#123;</code> <br />
                    <code style={{ color: "green" }}> //...</code> <br />
                    <code> &#125;</code> <br /> <br />
                    <code> initValidation() &#123;</code> <br />
                    <code style={{ color: "green" }}> //...</code> <br />
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
                    <h3 className="correct"> Correct </h3>
                  </Typography>
                  <Typography>
                    <code>class Foo &#123; </code> <br />
                    <code> &nbsp;constructor()&#123;</code> <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp;
                      <span style={{ color: "#336699" }}>this</span>
                      .initSelect();
                    </code>{" "}
                    <br />
                    <code>
                      {" "}
                      &nbsp; &nbsp; &nbsp; &nbsp;.initValidation();
                    </code>{" "}
                    <br /> <br />
                    <code> &#125;;</code> <br /> <br />
                    <code>initSelect() &#123;</code> <br />
                    <code style={{ color: "green" }}> //...</code> <br />
                    <code style={{ color: "#336699" }}> return this;</code>
                    <br />
                    <code> &#125;</code> <br /> <br />
                    <code> initValidation() &#123;</code> <br />
                    <code style={{ color: "green" }}> //...</code> <br />
                    <code style={{ color: "#336699" }}> return this;</code>
                    <br />
                    <code> &nbsp; &#125;</code> <br />
                    <code> &#125;</code> <br />
                  </Typography>
                </CardContent>
              </Card>{" "}
              <br />
            </td>
          </tr>

          <tr id="18">
            <td>
              {" "}
              Prefer composition over inheritance
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
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default JavaScript;

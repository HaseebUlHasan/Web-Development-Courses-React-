import React , {useState} from "react";

const General = () => {
  const [readMore, setreadMore] = useState(false);
  const [readMore2, setreadMore2] = useState(false);
  const [readMore3, setreadMore3] = useState(false);

  const firstRow = (
    <div>
      <p className="extra-content">
        There is not an HTML element for every circumstance and some of the
        rules for elements can be a bit vague. Make the best choice possible and
        be sure that you can defend that choice when asked.
      </p>
    </div>
  );
  const firstLink = readMore ? "View Less << " : "View More >> ";

  const secondRow = (
    <div>
      <p className="extra-content">
        Hard coded text is not just about multilingual support, it's about
        giving content authors full control over the content on their site AND
        ensuring that simple changes do not require code modification.
      </p>
    </div>
  );
  const secondLink = readMore2 ? "View Less << " : "View More >> ";

  const thirdRow = (
    <div>
      <p className="extra-content">
        Similar to text, put URLs in data attributes so that the back end can
        update
      </p>
    </div>
  );
  const thirdLink = readMore3 ? "View Less << " : "View More >> ";
  return (
    <div className="Container">
      <div className="Link">
        <ul>
          <h1>General Standards and Best Practices</h1>
          <li>
            <a href="#1">General Knowledge</a>
          </li>
          <li>
            <a href="#2">Know all the HTML elements and their correct uses</a>
          </li>
          <li>
            <a href="#3">
              Never hard code text anywhere that it can't easily be replaced
              with content managed text
            </a>
          </li>
          <li>
            <a href="#4">Never hard code endpoint URLs</a>
          </li>
          <li>
            <a href="#5">Know when to use AJAX</a>
          </li>
          <li>
            <a href="#6">Know how to use AJAX</a>
          </li>
          <li>
            <a href="#7">Code Structure and Organization</a>
          </li>
        </ul>
      </div>

      <div className="table" id="1">
        <h2> General Knowledge</h2>
        <table>
          <tr id="2">
            <td>
              Know all the HTML elements and their correct uses
              <ul>
                <li>
                  {" "}
                  Know which elements must appear with other elements (LI with
                  UL, label with input, etc.)
                </li>
                <li>
                  Know when and how elements should be used (the address element
                  isn't supposed to be used for just any address, etc.)
                </li>
                <li>Be able to justify your decisions.</li>
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
          </tr>

          <tr id="3">
            <td>
              Never hard code text anywhere that it can't easily be replaced
              with content managed text
              <ul>
                <li>
                  {" "}
                  No text in JS files, store it in a data attribute or a JSON
                  response and pull into the JS as needed.
                </li>
                <li>
                  No text in CSS content properties. Special chars such as ">"
                  are generally acceptable.
                </li>
              </ul>
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
          </tr>

          <tr id="4">
            <td> Never hard code endpoint URLs
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
          </tr>

          <tr id="5">
            <td>
              Know when to use AJAX
              <div className="div">
                The following are GUIDELINES there is no way to predict every
                potential scenario. Developers must use their best judgement,
                informed by the following to determine the best implementation
                plan.
              </div>
              <p> Key metrics to consider when evaluating the use of AJAX:</p>
              <ul>
                <li>Performance</li>
                <li>Maintainability</li>
                <li>Complexity</li>
                <li>Budget</li>
              </ul>
              <p> Determine if communication with the server is needed:</p>
              <ul>
                <li>
                  Could the amount of data negatively impact page load time?
                </li>
                <li>
                  Is there filtering or calculations happening based on user
                  interaction? (pagination, search filters, mortgage calculator,
                  etc)
                </li>
                <li>
                  Is content displayed contextually based on user interaction or
                  other criteria? (popups, show/hide, confirmtionat/error
                  messages, etc)
                </li>
                <li>
                  Is authentication required? (user need permission to view
                  certain data or take certain action)
                </li>
              </ul>
            </td>
          </tr>

          <tr id="6">
            <td>
              Know how to use AJAX
              <ul>
                <li>COMING SOON! Link to API documentation when its ready.</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <br />

      <div style={{ width: "60%" }} id="7">
        <h2> Code Structure and Organization</h2>
        <table>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>

          <tr>
            <td> Components </td>
            <td>
              <p>The smallest parts of the site.</p>
              <p>Should be self contained and reusable.</p>
              <p>Components are intended to be placed inside of Modules.</p>
            </td>
            <td> </td>
          </tr>

          <tr>
            <td> Modules </td>
            <td>
              <p>Modules generally map to individual pages in Confluence.</p>
              <p>Modules can contain components, but not always.</p>
            </td>
            <td> </td>
          </tr>

          <tr>
            <td> Pages Template </td>
            <td>
              <p>Page Templates are composed of modules.</p> <br />
              <p>
                The only unique code that should existing with a Page Template
                is basic HTML markup for the structure of the page.
              </p>{" "}
              <br />
              <p>
                Page Templates generally map to individual designs created by
                XA/XD.
              </p>
            </td>
            <td> </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default General;

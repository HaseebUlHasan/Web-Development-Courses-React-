import React from "react";

const RTFFields = () => {
  return (
    <div className="Container">
       <div className="field">
      <h1> RTF Fields </h1>
      <p>
        {" "}
        Rich Text Fields allow content authors to add HTML markup to a page
        using a WYSIWYG editing interface. Because it is not expected that
        content authors will be editing the raw HTML source, we need to keep our
        code simple. This means a minimum amount of markup for any content
        inside of an RTF. Class names should be avoided wherever possible in
        favor of just plain HTML elements. Complex layout, such as columns,
        should not be handled inside of an RTF.
      </p>

      <p>
        {" "}
        At a minimum, the following HTML elements must have visual styles
        applied to them in all RTF fields unless specially called out otherwise
        in the specs. For details on what each element does see:
        <a href="http://html5doctor.com/element-index/" target="_blank">
          {" "}
          http://html5doctor.com/element-index/
        </a>
      </p>

      <ul>
        <li> a - hyperlink </li>
        <li> b - bold text</li>
        <li>blockquote</li>
        <li>br - line break</li>
        <li>em - emphasized (bold+conditions)</li>
        <li>
          h2–h6{" "}
          <span style={{ color: "#993300" }}>
            Note, H1 is NOT included in RTF fields. The H1 of the page is almost
            always a dedicated field separate from the RTF.
          </span>
        </li>
        <li> hr - horizontal rule</li>
        <li> i - italics</li>
        <li>iframe</li>
        <li>img</li>
        <li>li - List Item</li>
        <li> ol - Ordered List (Numbered)</li>
        <li> p - paragraph</li>
        <li>span</li>
        <li>strong</li>
        <li>table</li>
        <ul>
          <li>tbody</li>
          <li>td</li>
          <li>tfoot</li>
          <li>th</li>
          <li>thead</li>
          <li>tr</li>
        </ul>
        <li>ul - Unordered list (bullets/icon/etc.)</li>
      </ul>

      <h3> Considerations</h3>
      <ul>
        <li>Avoid classes in RTF whenever possible</li>
        <li>
          {" "}
          Create <strong> rtf.css</strong> file that will be used by Sitecore to
          style text in content edit mode of an RTF field.
        </li>
      </ul>
      </div>
    </div>
  );
};

export default RTFFields;

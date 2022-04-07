import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Sass = () => {
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
        </div> <br /> <br />
        <div className="table">
          <table>

            <tr>
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
              </td>
              <td></td>
            </tr>

            <tr>
              <td>
                Create separate SASS files for each widget/module/component
              </td>
              <td></td>
            </tr>

            <tr>
              <td>
              Use mixins
              </td>
              <td></td>
            </tr>

            <tr> 
                <td> Use placeholders</td>
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
                    <code> %icon &#123;</code><br />
                    <code> &nbsp; transition: background-color ease .2s;</code><br />
                    <code> &nbsp; margin: 0 .5em;</code><br />
                    <code> &#125;</code><br /><br />
                    <code>.error-icon &#123;</code> <br/>
                    <code> @extend %icon;</code><br/>
                    <code>   /* error specific styles... */</code><br/>
                    <code> &#125;</code><br /><br />
                    <code>.info-icon &#123;</code> <br/>
                    <code> @extend %icon;</code><br/>
                    <code>   /* info specific styles... */</code><br/>
                    <code> &#125;</code><br />
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
                    <code> .error-icon, .info-icon &#123; </code> <br/>
                    <code> transition: background-color ease .2s; </code> <br/>
                    <code> &nbsp; margin: 0 .5em;</code><br />
                    <code> &#125;</code><br /><br />
                    <code>.error-icon &#123;</code> <br/>
                    <code>   /* error specific styles... */</code><br/>
                    <code> &#125;</code><br /><br />
                    <code>.info-icon &#123;</code> <br/>
                    <code>   /* info specific styles... */</code><br/>
                    <code> &#125;</code><br />
                  </Typography>
                </CardContent>
              </Card>
                </td>
            </tr>

            <tr>
                <td>Minimize nesting</td>
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
                    
                    <code> .header &#123;</code><br />
                    <code> &nbsp; .nav &#123;</code><br />
                    <code> &nbsp; &nbsp; .nav-link &#123;</code><br />
                    <code> &nbsp; &nbsp; &nbsp; .nav-icon &#123;</code><br />
                    <code>  &nbsp; &nbsp; &nbsp; &#125;</code> <br/>
                    <code> &nbsp; &nbsp; &nbsp; .nav-title &#123;</code><br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp;.nav-subtitle &#123;</code><br />
                    <code>  &nbsp; &nbsp; &nbsp; &nbsp; &#125;</code> <br/>
                    <code>  &nbsp; &nbsp; &nbsp; &#125;</code> <br/>
                    <code>  &nbsp; &nbsp;  &#125;</code> <br/>
                    <code>  &nbsp;  &#125;</code> <br/>
                    <code> &#125;</code> <br/>
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
                  <code> .header &#123;</code><br />
                  <code>   &#125;</code> <br/>
                    <code> &nbsp; .nav &#123;</code><br />
                    <code> &nbsp; &nbsp; .nav-link &#123;</code><br />
                    <code> &nbsp; &nbsp; &nbsp; .nav-icon &#123;</code><br />
                    <code>  &nbsp; &nbsp; &nbsp; &#125;</code> <br/>
                    <code> &nbsp; &nbsp; &nbsp; .nav-title &#123;</code><br />
                    <code> &nbsp; &nbsp; &nbsp; &nbsp;.nav-subtitle &#123;</code><br />
                    <code>  &nbsp; &nbsp; &nbsp; &#125;</code> <br/>
                    <code>  &nbsp; &nbsp;  &#125;</code> <br/>
                    <code>  &nbsp;  &#125;</code> <br/>
                    <code> &#125;</code> <br/>
                  </Typography>
                </CardContent>
              </Card> <br/>
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
                  <code> .header &#123;</code><br />
                  <code>   &#125;</code> <br/>
                    <code> &nbsp; .nav &#123;</code><br />
                    <code>   &#125;</code> <br/>
                    <code>  .nav-link &#123;</code><br />
                    <code>   &#125;</code> <br/>
                    <code>  .nav-icon &#123;</code><br />
                     <code>   &#125;</code> <br/>
                    <code> .nav-title &#123;</code><br />
                    <code>   &#125;</code> <br/>
                    <code> .nav-subtitle &#123;</code><br />
                     <code>   &#125;</code> <br/>
                    
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

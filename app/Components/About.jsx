var React = require('react');



var About = (props) => {
  return (

    <div className="row">
      <div className= "columns medium-8 large-12 small-centered">
        <h1 className="text-center" fontWeight="bold">About</h1>
        <div class="callout secondary">
          <h4 className="text-center">A simple React application</h4>
          <p>It is a simple weather application which uses <a target="_blank" rel="noopener noreferrer" href="https://atom.io">Atom</a> for editing the code, <a target="_blank" rel="noopener noreferrer" href="https://github.com">git</a> for version control, and <a target="_blank" rel="noopener noreferrer" href="http://www.heroku.com/">Heroku</a> to deploy the application live to the internet. </p>

        </div>
      </div>
    </div>
    )
};

module.exports = About;

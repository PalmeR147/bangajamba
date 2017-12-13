import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ hgroup, body, author, imageSrc }) => (
  <div>
    <article>
      <header>
        {hgroup && (
          <hgroup>
            {...hgroup}
          </hgroup>
        )}
      </header>

      {typeof body === 'string' ? <p>{body}</p> : body}
      {/* 
        The above line is a shortand if-statement, it serves the purpose of
        rendering the "body" property inside a <p> tag if the "body" property is 
        just a plain string. However if the typeof body is NOT a string (IE,
        it is an HTML element), it will be rendered directly into the HTML.
        The non-shorthand version of the above expression could look like this:
                if(typeof body === 'string') {
                  return <p>body</p>;
                } else {
                  return body;
                }
      */}
      <footer>
        {author ?
          <p>{`Written by: ${author.FirstName ? author.FirstName : '---'} ${author.LastName ? author.LastName : '___'}.`}</p> :
          <p>Written by unknown.</p>
          // Another example of shorthand if's, if no author object at all, write Written by unkown
          // if there is an author object, write if exists author.FirstName, else write '---'
          // and secondly if exists author.LastName, else write '___'
        }
      </footer>
      {imageSrc && <img alt="temp" src={imageSrc} width={'100%'} />}
      {/* 
        Another way of conditional rendering (basically if exists with another technique)
        Here we use an expression like ('property' && (AND) <HTMLElement>), due to the way
        javascript works, when you have an && (AND) expression, since both sides of the &&
        must equal to true for the expression in it's whole to be true, javascript will
        stop evaluation if any condition it meets returns false, so having like we do
        'imageSrc' && <HTMLElement>, if 'imageSrc' is falsy (= false, undefined, null)
        javascript will not continue to evaluate (render) the <HTMLElement> on the right
        hand side of the && (AND) expression.
      */}
    </article>
  </div>
);

// PropTypes are just a way to specify what types of values parameters to a component can have
// For example, in this component (article) we have a parameter called "author", this is expected
// to be an object with the following structure: author: { FirstName: 'Kevin', LastName: 'Chabo'}
// If a user tried to use the article, sending in an invalid prop, say a string instead
// Author: 'Kevin Chabo', our rendering code would not be able to handle this and instead render
// nothing, or perhaps give an error. 
// With PropTypes this will instead return a warning in the console saying that you are trying 
// To send a string as a prop where the component expects an object with specified shape. 
Article.propTypes = {
  hgroup: PropTypes.shape(),
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  author: PropTypes.shape({
    FirstName: PropTypes.string,
    LastName: PropTypes.string,
  }),
  imageSrc: PropTypes.string,
};

// export default Article;

// "<article>" +
// "<header>" +
// "<hgroup>" +
// "<h1>Title of Article</h1>" +
// "<h2>Subtitle for Article</h2>" +
// "</hgroup>" +
// "</header>" +
// "<p>This is a article</p>" +
// "<footer>" +
// "<p>Written by Bangajamba</p>" +
// "</footer>" +
// "</article>" +
// "<img src=\"/images/whosPrettiest.PNG\" width=\"100%\"/>" +
// "<br><br/>"+ 
// "<article>" +
// "<h1>IoT Projects(Mirror, Camera, Car, Controller)</h1>" +
// "</article>"+
// "<img src=\"/images/IoTProjects.jpg\" width=\"100%\"/>" 

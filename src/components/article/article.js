import React from 'react';
// import PropTypes from 'prop-types';

const Article = ({ hgroup, body, author, imageSrc }) => (
  <div>
    <article>
      <header>
        {hgroup &&
          <hgroup>
            {/* {{ ...hgroup }} */}
          </hgroup>
        }
      </header>

      {typeof body === 'string' ? <p>{body}</p> : body}
      <footer>
        {author ?
          <p>{`Written by: ${author.FirstName ? author.FirstName : '---'} ${author.LastName ? author.LastName : '___'}.`}</p> :
          <p>Written by unknown.</p>}
      </footer>
      {imageSrc && <img alt="temp" src={imageSrc} width={'100%'} />}
    </article>
  </div>
);

// Article.propTypes = {
//   hgroup: PropTypes.shape(),
//   body: PropTypes.string,
//   author: PropTypes.shape({
//     FirstName: PropTypes.string,
//     LastName: PropTypes.string,
//   }),
//   imageSrc: PropTypes.string,
// };

export default Article;

import React from 'react';

const Article = ({title, subtitle, body, author, imageSrc}) => (
  <div>
  <article>
    <header>
      <hgroup>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        </hgroup>
        </header>
        <p>{body}</p>
        <footer>
          <p>{author}</p>
          </footer>
          <img src={imageSrc} width={"100%"} />
    </article>
    </div>
)

export default Article;

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
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Chatline(props) {
  let text = props.text;

  const [element, setElement] = useState(text);

  function transform(text) {
    if (text.startsWith("/link")) {
      setElement(<Link to={text}>{text}</Link>);
    }
    else if (text.startsWith("/embed")) {
      const html = text.split(" ").slice(1).join(" ");
      setElement(<div dangerouslySetInnerHTML={{ __html: html }}></div>);
    }
   /* else if (text.startsWith("/age")) {
      const [, name] = text.split(" ");
      fetch("https://api.agify.io/?name=" + name)
        .then(res => res.json())
        .then(data => setElement(data.age));
    }*/
    /*else if (text.startsWith("/gender")) {
      const [, name] = text.split(" ");
      fetch("https://api.genderize.io/?name=" + name)
        .then(res => res.json())
        .then(data => setElement(data.gender));
    }*/
    /*else if (text.startsWith("/nationalize")) {
      const [, ] = text.split(" ");
      fetch("https://api.nationalize.io/?name=")
          .then(res => res.json())
          .then(data => setElement(data.country))
          .catch(err => setElement("Crash"))
      //https://api.nationalize.io/?name=
    }*/
   /* else if (text.startsWith("/randomfact")) {
      // ex10-01 here: Implement randomfact using fetch & promise
      const [,] = text.split(" ");
        fetch(" ")
          .then(res => res.json())
          .then(data => setElement(data.randomfact));
      // https://uselessfacts.jsph.pl/random.json?language=en

    }*/
    else if (text.startsWith("/bored")) {
      // ex10-01 here: Implement randomfact using fetch & promise
      fetch("https://www.boredapi.com/api/activity")
          .then(res => res.json())
          .then(data => setElement(data.activity || "Data not found"))
          .catch(err => setElement("Crash"))
    }
  }

  useEffect(() => {
    transform(text);
  }, []);

  return (
    element
  )
}

export default Chatline;
import { useState } from "react";
import data from "./data";
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number >= data.length) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  function nextBtn() {
    setIndex((currIndex) => {
      const newIndex = currIndex + 1;
      return checkNumber(newIndex);
    });
  }

  function prevBtn() {
    setIndex((currIndex) => {
      const newIndex = currIndex - 1;
      return checkNumber(newIndex);
    });
  }

  function surprise() {
    let random = Math.floor(Math.random() * data.length);
    if (random === index) {
      random += 1;
    }
    setIndex(checkNumber(random));
  }

  const { name, image, text, job } = data[index];

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={prevBtn}>
            {<FaAngleLeft />}
          </button>
          <button className="next-btn" onClick={nextBtn}>
            {<FaAngleRight />}
          </button>
        </div>

        <button className="btn" onClick={surprise}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};
export default App;

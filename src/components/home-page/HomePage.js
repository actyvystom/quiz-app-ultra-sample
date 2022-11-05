import "./HomePage.css";

import { Card } from "../card/Card";

export default function HomePage(props) {
  const { cards, toggleBookmark } = props;
  return (
    <section
      className="page"
      id="home-page"
      data-js="page-home"
      style={{ display: props.page === "home" ? "block" : "none" }}
    >
      <div className="question-card">
        {cards.map(({ question, answer, tags, isBookmarked }, index) => {
          return (
            <Card
              key={index}
              question={question}
              answer={answer}
              tags={tags}
              isBookmarked={isBookmarked}
              handleClickBookmarkIcon={() => toggleBookmark(index)}
            />
          );
        })}
      </div>
    </section>
  );
}

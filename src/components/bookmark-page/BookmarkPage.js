import "../bookmark-page/BookmarkPage.css";

import { Card } from "../card/Card";
import React from "react";

export default function BookmarkPage(props) {
  const { cards, toggleBookmark } = props;

  return (
    <section
      className="page"
      id="bookmark-page"
      data-js="page-bookmarked"
      style={{ display: props.page === "bookmark" ? "block" : "none" }}
    >
      <h2>These are your bookmarked question cards:</h2>
      <>
        {cards.map((card, index) =>
          card.isBookmarked ? (
            <Card
              key={index}
              question={card.question}
              answer={card.answer}
              tags={card.tags}
              isBookmarked={card.isBookmarked}
              page={props.page}
              handleClickBookmarkIcon={() => toggleBookmark(index)}
              index={index}
            />
          ) : undefined
        )}
      </>
    </section>
  );
}

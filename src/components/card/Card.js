import React from "react";
// import AnswerButton from "../answer-button/AnswerButton";
import "./Card.css";
import { useState } from "react";
import { Tag } from "../tag/Tag";

export function Card({
  question,
  answer,
  tags,
  isBookmarked,
  page,
  index,
  handleClickBookmarkIcon,
}) {
  const [hide, setHide] = useState(true);

  return (
    <article
      className="Card-container"
      // style={{
      //   display:
      //     page === "bookmark" && bookmarked === isBookmarked
      //       ? "block"
      //       : page === "home"
      //       ? "block"
      //       : "none",
      // }}
    >
      <button
        className="top-right noborder"
        onClick={() => handleClickBookmarkIcon(index)}
      >
        <img
          src={
            isBookmarked
              ? "assets/bookmark-icon-fullblack.png"
              : "assets/bookmark-icon.png"
          }
          alt="bookmark icon"
          width="30px"
        ></img>
      </button>
      <p className="question">{question}</p>
      <button
        className="answer-button"
        onClick={() => {
          setHide(!hide);
        }}
      >
        {hide ? "Show Answer" : "Hide Answer"}
      </button>
      <p className={hide ? "hidden" : "answer"}>{answer}</p>
      <ul className="Card__taglist">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </ul>
    </article>
  );
}

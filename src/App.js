import "./App.css";
import Header from "./components/header/Header";
// import Card from "./components/card/Card";
import BookmarkPage from "./components/bookmark-page/BookmarkPage";
import CreatePage from "./components/create-page/CreatePage";
import Profile from "./components/profile/Profile";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home-page/HomePage";
import { useState, useEffect } from "react";
import { cards } from "./data/cards";
function App() {
  const [page, setPage] = useState("home");
  const handleClickPage = (pageName) => {
    setPage(pageName);
  };
  const [cardData, setCardData] = useState([]);
  const toggleBookmarkHandler = (cardIndex) => {
    setCardData(
      cards.map((card, index) => {
        if (index === cardIndex) {
          card.isBookmarked = !card.isBookmarked;
        }
        return card;
      })
    );
  };
  useEffect(() => {
    setCardData(cards);
  }, []);

  return (
    <div className="App">
      <main>
        <Header />
        <HomePage
          page={page}
          setPage={setPage}
          cards={cardData}
          toggleBookmark={toggleBookmarkHandler}
        />
        <BookmarkPage
          page={page}
          setPage={setPage}
          cards={cardData}
          toggleBookmark={toggleBookmarkHandler}
        />
        <CreatePage page={page} setPage={setPage} />
        <Profile page={page} setPage={setPage} />
      </main>
      <Navigation
        page={page}
        setPage={setPage}
        handleClickPage={handleClickPage}
      />
    </div>
  );
}

export default App;

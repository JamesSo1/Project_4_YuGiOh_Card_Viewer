import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [setName, setSetName] = useState("");
  const [type, setType] = useState("");
  const [rarity, setRarity] = useState("");
  const [bannedItems, setBannedItems] = useState([]);

  const callAPI = async () => {
    // const maxRetries = 3; // Maximum number of retries allowed
    // let retryCount = 0; // Initialize retry count
    try {
      let response = await fetch(
        "https://db.ygoprodeck.com/api/v7/randomcard.php"
      );
      let json = await response.json();
      let cardType = json.type;

      // Make sure the result contains a "card_sets" attribute
      if (!(json.hasOwnProperty("card_sets") && json.card_sets.length > 0)) {
        // Get another card via the API
        callAPI();
        return;
      }

      let cardRarity = json.card_sets[0].set_rarity;
      let cardSetName = json.card_sets[0].set_name;

      // Check if the card has any property that the user has banned
      if (
        bannedItems.includes(cardType) ||
        bannedItems.includes(cardRarity) ||
        bannedItems.includes(cardSetName)
      ) {
        // Get another card via the API
        callAPI();
        return;
      } else {
        setCurrentImage(json.card_images[0].image_url);
        setSetName(cardSetName);
        setType(cardType);
        setRarity(cardRarity);
      }
    } catch (error) {
      alert("Error fetching or processing API response:", error);
    }
  };

  const banItem = (e) => {
    if (bannedItems.length < 5) {
      const itemName = e.target.textContent;
      setBannedItems([...bannedItems, itemName]);
    } else {
      alert("You can only ban 5 properties at one time!");
    }
  };

  const unBanItem = (e) => {
    const itemName = e.target.textContent;
    setBannedItems(bannedItems.filter((item) => item !== itemName));
  };

  return (
    <div className="whole-page">
      <h1>YuGiOh Card Viewer</h1>

      {/* Ban list */}
      {currentImage && (
        <div className="ban-list">
          <h2>Your Ban List</h2>
          <ul>
            {bannedItems.map((item, index) => (
              <li key={index}>
                <button onClick={unBanItem}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Properties of current card */}
      {currentImage && (
        <div className="card-properties">
          <button onClick={banItem}>{type}</button>
          <button onClick={banItem}>{setName}</button>
          <button onClick={banItem}>{rarity}</button>
        </div>
      )}

      {/* Image of current card */}
      {currentImage && <img src={currentImage} className="card-img" />}

      {/* "Get card" button */}
      <button className="fetch-btn" onClick={callAPI}>
        Get a card!
      </button>
    </div>
  );
}

export default App;

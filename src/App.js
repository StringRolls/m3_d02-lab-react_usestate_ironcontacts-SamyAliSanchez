import "./App.css";
import contactsArray from "./contacts.json";
import { useState } from "react";

const firstFive = contactsArray.slice(5, 10);

function App() {
  const [contacts, setContacts] = useState(firstFive);

  const addContact = () => {
    let randomIndex = Math.floor(Math.random() * contactsArray.length);
    const random = contactsArray[randomIndex];
    if (contacts.includes(random)) {
    } else {
      setContacts(contacts.concat(random).reverse());
    }
  };

  const popularitySort = () => {
    const sortedContacts = contacts
      .sort((a, b) => b.popularity - a.popularity)
      .slice();
    setContacts(sortedContacts);
  };

  return (
    <div className="App">
      <h1>Ironcarts</h1>
      <div>
        <button onClick={addContact}>Add random contact</button>
        <button onClick={popularitySort}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt=""
                    className="table"
                    style={{ height: "250px", width: "auto" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

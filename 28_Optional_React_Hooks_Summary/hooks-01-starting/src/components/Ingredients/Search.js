import { memo, useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const { setIngredients } = props;

  const enteredFilterRef = useRef();

  console.log(enteredFilterRef.current.value);

  useEffect(() => {
    const query =
      enteredFilter.length === 0
        ? ""
        : `?orderBy="title"&equalTo="${enteredFilter}"`;
    fetch(
      `https://academind-react-summary-b17f9-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json${query}`,
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setIngredients(loadedIngredients);
      });
  }, [enteredFilter, setIngredients]);

  //------------------------------------------------------------

  // useEffect(() => {
  //   const query =
  //     enteredFilter.length === 0
  //       ? ""
  //       : `?orderBy="title"&equalTo="${enteredFilter}"`;
  //   fetch(
  //     `https://academind-react-summary-b17f9-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json${query}`,
  //   )
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }
  //       setIngredients(loadedIngredients);
  //     });
  // }, [enteredFilter, setIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredFilter}
            ref={enteredFilterRef}
            onChange={(e) => setEnteredFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;

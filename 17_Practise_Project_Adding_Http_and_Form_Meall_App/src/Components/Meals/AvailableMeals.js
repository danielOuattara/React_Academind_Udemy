import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
// import useHttp from "../../hooks/useHttp";

const url =
  "https://food-app-academind-udemy-default-rtdb.europe-west1.firebasedatabase.app/meals.json";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  /* Request made Locally From Built Function Scratch 
  -----------------------------------------------------*/

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsLoading(false);
          throw new Error(`${response.statusText} ${response.status} `);
        }
        const data = await response.json();
        if (!data) {
          throw new Error(
            ` Request status returned ${response.status} ${response.statusText} but nothing returned from fetch.\n
            Please check your <url>`,
          );
        }

        const loadedMeals = [];

        for (let key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(loadedMeals);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={styles["meals-loading"]}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles["meals-loading-error"]}>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => {
            return <MealItem key={meal.id} {...meal} />;
          })}
        </ul>
      </Card>
    </section>
  );
}

/* using a  general, multipurpose custom hook for fetching data 
  ---------------------------------------------------------------*/

// const { isLoading, error, sendRequest: fetchMeals } = useHttp();

// useEffect(() => {
//   const tasksTransformer = (data) => {
//     const loadedMeals = [];
//     for (const taskKey in data) {
//       loadedMeals.push({
//         id: taskKey,
//         description: data[taskKey].description,
//         price: data[taskKey].price,
//         name: data[taskKey].name,
//       });
//     }
//     setMeals(loadedMeals);
//   };

//   fetchMeals({ url }, tasksTransformer);
// }, [fetchMeals]);

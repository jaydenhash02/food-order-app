import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

// cannot have an async component: will cause error

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    async function fetchMeals() {
      const mealsResponse = await fetch(
        "https://react-http-ce805-default-rtdb.firebaseio.com/meals.json"
      );

      if (!mealsResponse.ok) {
        // we will store the string in the err within the catch block
        throw new Error("Something went wrong!");
      }

      const mealsJSON = await mealsResponse.json();
      const DUMMY_MEALS = [];
      Object.keys(mealsJSON).forEach((id) => {
        DUMMY_MEALS.push({
          id: id,
          name: mealsJSON[id].name,
          description: mealsJSON[id].description,
          price: mealsJSON[id].price,
        });
      });
      setMeals(DUMMY_MEALS);
      setIsLoading(false);
    }

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

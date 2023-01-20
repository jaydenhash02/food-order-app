import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our diverse menu and enjoy a delicious
        lunch or dinner wherever you are.
      </p>
      <p>
        All our meals are cooked fresh with high-quality ingredients by
        experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
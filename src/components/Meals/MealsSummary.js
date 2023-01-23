import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Cibi Deliziosi, Direttamente A Casa Tua</h2>
      <p>
        Scegli il tuo cibo preferito tra la selezione dei cibi disponibili e
        gustati un delizioso pranzo o una deliziosa cena a casa tua.
      </p>
      <p>
        Tutti i nostri cibi sono cucinati con ingredienti di alta qualita,
        freschi e ovviamente da chef con esperienza!
      </p>
    </section>
  );
};

export default MealsSummary;

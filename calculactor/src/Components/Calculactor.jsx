import React, { useState } from "react";
import styles from "./Calculactor.module.css";

function Calculactor() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>Calculactor</h1>

      <section>
        <div className={styles.calculactorCont}>
          <div>
            <input
              placeholder="Calculate"
              onChange={handleChange}
              value={query}
            />
          </div>

          <div>
            <button>C</button>
            <button>E</button>
            <button>%</button>
            <button>=</button>
          </div>

          <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
          </div>

          <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
          </div>

          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
          </div>

          <div>
            <button>00</button>
            <button>0</button>
            <button>.</button>
            <button>+</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Calculactor };

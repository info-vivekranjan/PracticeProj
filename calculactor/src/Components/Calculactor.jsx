import React, { useState } from "react";
import styles from "./Calculactor.module.css";

function Calculactor() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (e) => {
    setQuery(query.concat(e.target.name));
  };

  const handleCalculate = () => {
    setQuery(eval(query));
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      setQuery(eval(query));
    }
  };

  const handleClear = () => {
    setQuery("");
  };

  const calculatePer = () => {
    setQuery(eval(query / 100));
  };

  const eraseOne = () => {
    setQuery(query.slice(0, -1));
  };

  return (
    <div>
      <h1>Calculactor</h1>

      <section>
        <div className={styles.calculactorCont}>
          <div>
            <input
              onChange={handleChange}
              value={query}
              placeholder="00"
              onKeyPress={handleKeyPress}
            />
          </div>

          <div>
            <button onClick={handleClear} style={{ color: "#EF7624" }}>
              C
            </button>
            <button style={{ color: "#EF7624" }} onClick={eraseOne}>
              E
            </button>
            <button onClick={calculatePer} style={{ color: "#EF7624" }}>
              %
            </button>
            <button onClick={handleCalculate} className={styles.equalBtn}>
              =
            </button>
          </div>

          <div>
            <button onClick={handleClick} name="7">
              7
            </button>
            <button onClick={handleClick} name="8">
              8
            </button>
            <button onClick={handleClick} name="9">
              9
            </button>
            <button onClick={handleClick} name="/" style={{ color: "#EF7624" }}>
              /
            </button>
          </div>

          <div>
            <button onClick={handleClick} name="4">
              4
            </button>
            <button onClick={handleClick} name="5">
              5
            </button>
            <button onClick={handleClick} name="6">
              6
            </button>
            <button onClick={handleClick} name="*" style={{ color: "#EF7624" }}>
              *
            </button>
          </div>

          <div>
            <button onClick={handleClick} name="1">
              1
            </button>
            <button onClick={handleClick} name="2">
              2
            </button>
            <button onClick={handleClick} name="3">
              3
            </button>
            <button onClick={handleClick} name="-" style={{ color: "#EF7624" }}>
              -
            </button>
          </div>

          <div>
            <button onClick={handleClick} name="00">
              00
            </button>
            <button onClick={handleClick} name="0">
              0
            </button>
            <button onClick={handleClick} name=".">
              .
            </button>
            <button onClick={handleClick} name="+" style={{ color: "#EF7624" }}>
              +
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Calculactor };

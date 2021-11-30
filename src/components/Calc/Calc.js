import "./calc.css";

export default function Calc(props) {
  return (
    <form name="calc" className="calculator">
      <input type="text" placeholder="0" className="value" name="txt" />
      <span
        onClick={() =>
          (document.calc.txt.value = eval(
            document.calc.txt.value * (Math.PI / 180.0)
          ))
        }
      >
        Rad
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = eval(
            document.calc.txt.value * (180 / Math.PI)
          ))
        }
      >
        Deg
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = eval(
            props.myFunction(document.calc.txt.value)
          ))
        }
      >
        x!
      </span>
      <span onClick={() => (document.calc.txt.value += ")")}>)</span>
      <span onClick={() => (document.calc.txt.value += "(")}>(</span>
      <span
        className="rem"
        onClick={() =>
          (document.calc.txt.value = eval(
            Math.trunc(document.calc.txt.value / 10)
          ))
        }
      >
        CE
      </span>
      <span className="clear" onClick={() => (document.calc.txt.value = "")}>
        C
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = Math.asin(document.calc.txt.value))
        }
      >
        aSin
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = Math.acos(document.calc.txt.value))
        }
      >
        aCos
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = Math.atan(document.calc.txt.value))
        }
      >
        aTan
      </span>
      <span onClick={() => (document.calc.txt.value += "**")}>y^x</span>
      <span
        onClick={() =>
          (document.calc.txt.value = Math.log10(document.calc.txt.value))
        }
      >
        log10
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = eval(Math.log(document.calc.txt.value)))
        }
      >
        ln
      </span>
      <span onClick={() => (document.calc.txt.value += "*")}>*</span>
      <span
        onClick={() =>
          (document.calc.txt.value = Math.sin(document.calc.txt.value))
        }
      >
        Sin
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = Math.cos(document.calc.txt.value))
        }
      >
        Cos
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = Math.tan(document.calc.txt.value))
        }
      >
        Tan
      </span>
      <span onClick={() => (document.calc.txt.value += "7")}>7</span>
      <span onClick={() => (document.calc.txt.value += "8")}>8</span>
      <span onClick={() => (document.calc.txt.value += "9")}>9</span>
      <span onClick={() => (document.calc.txt.value += "/")}>/</span>
      <span onClick={() => (document.calc.txt.value = Math.PI)}>
        {"\u03C0"}
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = eval(1 / document.calc.txt.value))
        }
      >
        Inv
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = eval(Math.log(document.calc.txt.value)))
        }
      >
        ln
      </span>
      <span onClick={() => (document.calc.txt.value += "4")}>4</span>
      <span onClick={() => (document.calc.txt.value += "5")}>5</span>
      <span onClick={() => (document.calc.txt.value += "6")}>6</span>
      <span onClick={() => (document.calc.txt.value += "-")}>-</span>
      <span onClick={() => (document.calc.txt.value += eval(Math.exp(1)))}>
        e
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = eval(Math.sqrt(document.calc.txt.value)))
        }
      >
        {"\u221A"}
      </span>
      <span onClick={() => (document.calc.txt.value += ".")}>.</span>
      <span onClick={() => (document.calc.txt.value += "3")}>3</span>
      <span onClick={() => (document.calc.txt.value += "2")}>2</span>
      <span onClick={() => (document.calc.txt.value += "1")}>1</span>
      <span onClick={() => (document.calc.txt.value += "+")}>+</span>
      <span onClick={() => (document.calc.txt.value += "^")}>{"\u2227"}</span>
      <span onClick={() => (document.calc.txt.value += "x")}>x</span>
      <span
        onClick={() =>
          (document.calc.txt.value = eval(
            props.myFunction2(document.calc.txt.value)
          ))
        }
      >
        d/dx
      </span>
      <span
        onClick={() =>
          (document.calc.txt.value = eval(
            props.myFunction3(document.calc.txt.value)
          ))
        }
      >
        nth root
      </span>
      <span onClick={() => (document.calc.txt.value += ",")}>,</span>
      <span onClick={() => (document.calc.txt.value += "0")}>0</span>
      <span
        className="equal"
        onClick={() =>
          (document.calc.txt.value = eval(document.calc.txt.value))
        }
      >
        =
      </span>
    </form>
  );
}

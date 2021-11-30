import Calc from "./components/Calc/Calc";
import * as math from "mathjs";

export default function App() {
  const myFunction = (oper1) => {
    if (oper1 === 0) {
      return 1;
    } else {
      return oper1 * myFunction(oper1 - 1);
    }
  };

  const myFunction2 = (oper2) => {
    return math.derivative(oper2, "x");
  };

  const myFunction3 = (oper3) => {
    var b = oper3.split(",").map(function (item) {
      return parseInt(item, 10);
    });
    return math.nthRoots(b[0], b[1])[0];
  };
  return (
    <div>
      <Calc
        myFunction={myFunction}
        myFunction2={myFunction2}
        myFunction3={myFunction3}
      />
    </div>
  );
}

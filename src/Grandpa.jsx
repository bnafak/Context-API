import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./App.css";
import { createContext, useState } from "react";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const asset = "diamond";
  const [money, setMoney] = useState(1000);
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <h2>Net money : {money}</h2>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset="asset"></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./App.css";
import { createContext } from "react";

export const AssetContext = createContext("gold");

const Grandpa = () => {
  const asset = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <AssetContext.Provider value='gold'>
        <section className="flex">
          <Dad asset="asset"></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;

import { useContext, useState } from "react";
import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";
import { MoneyContext } from "./Grandpa";

const Dad = ({asset}) => {
  
  const [money, setMoney] = useContext(MoneyContext);
 
  return (
    <div>
      <h2>Dad</h2>
      <h3>{money}</h3>
      <section className="flex">
        <Myself asset="asset"></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;

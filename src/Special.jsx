import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Special = ({ name, asset }) => {

const gift = useContext(AssetContext);

  return (
    <div>
      <h2>Special</h2>
      <h3>{name}</h3>
   {asset && <Special> asset={asset} </Special>}
      <h3> {gift}</h3>
    </div>
  );
};

export default Special;

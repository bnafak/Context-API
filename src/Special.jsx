import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Special = ({ name, asset }) => {

const gift = useContext(AssetContext);

  return (
    <div>
      <h2>Special</h2>
      <h2>{name}</h2>
   {/* {asset && <Special> asset={asset} </Special>} */}
      <h1> {gift}</h1>
    </div>
  );
};

export default Special;

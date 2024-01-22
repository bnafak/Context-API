import { useContext } from "react";
import { AssetContext } from "./Grandpa";


const Brother = () => {
    
const rezi = useContext(AssetContext); 
    return (
        <div>
            <h2>Brother</h2>
            <h3>{rezi}</h3>
        </div>
    );
};

export default Brother;
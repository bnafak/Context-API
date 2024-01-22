import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";


const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name="Dipon"></Cousin>
                <Cousin name="Suvo"></Cousin>
            </section>
            <h1> {money}</h1>

            <button onClick={()=> setMoney(money + 1000)}>Add Money Tk. 1000/-</button>
        </div>
    );
};

export default Aunty;
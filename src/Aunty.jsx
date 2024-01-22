import Cousin from "./Cousin";


const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name="Dipon"></Cousin>
                <Cousin name="Suvo"></Cousin>

            </section>
        </div>
    );
};

export default Aunty;
import NavBar from "../../Shared/NavBar/NavBar";
import Adventure from "../Adventure/Adventure";
import Banner from "../Banner/Banner";
import BookNow from "../BookNow/BookNow";
import Destination from "../Destination/Destination";
import Discount from "../Discount/Discount";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>

            <Adventure></Adventure>
            <Destination></Destination>
            <Discount></Discount>
            <BookNow></BookNow>
        </div>
    );
};

export default Home;
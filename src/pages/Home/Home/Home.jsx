import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Adventure from "../Adventure/Adventure";
import Banner from "../Banner/Banner";
import BookNow from "../BookNow/BookNow";
import Destination from "../Destination/Destination";
import Discount from "../Discount/Discount";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>

            <Adventure></Adventure>
            <Destination></Destination>
            <Discount></Discount>
            <BookNow></BookNow>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;
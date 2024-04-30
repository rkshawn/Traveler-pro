import Banner from "../layouts/Banner";
import FeaturedDestination from "../layouts/FeaturedDestination";
import TouristsSpot from "../layouts/TouristsSpot";
import TravelGuides from "../layouts/TravelGuides";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <TouristsSpot></TouristsSpot>
            <FeaturedDestination></FeaturedDestination>
            <TravelGuides></TravelGuides>
        </div>
    );
};

export default Home;
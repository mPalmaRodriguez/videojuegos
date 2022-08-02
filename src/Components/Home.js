import "bootstrap/dist/css/bootstrap.css";
import NavbarApp from "./Navbar/Index";
import CarouselApp from "./Carousel/Index";
import TextoApp from "./Texto/Index";
import FooterApp from "./Footer/Index";
import CardsApp from "./Cards/Index";

function Home(){
    return (
        <div className="Home">
            <NavbarApp/>
            <CarouselApp/>
            <TextoApp/>
            <CardsApp/>
            <FooterApp/>
        </div>
    )
}
export default Home;

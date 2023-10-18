
import Footer from "../Footer/Footer";
import Header from "./Header";




const Home = () => {
    return (
        <>
        <Header/>
        <div className="lg:h-[500px] relative text-white lg:bg-cover text-center py-44" style={{backgroundImage: 'url(https://i.ibb.co/yYbhvRL/Blue-Teal-Geometric-Technology-Linkdln-Banner.png)'}}>
              <h2 className="lg:text-6xl font-bold">Big fastival Offers</h2>
              <p className="text-xl">Buy your favorite Gadgets</p>
              <button className="btn btn-group">Buy Now</button>
           
        </div>
        <h1 className="text-4xl font-bold text-center mt-4">Service</h1>
      <div className="grid lg:grid-cols-3 gap-4">
      </div>
     <Footer></Footer>
            
            </>
       
    );
};

export default Home;
const Hero = () =>{

    return(
    <main className="hero">
    <div className="hero-content">
    <h1>YOUR FEET 
DESERVE
THE BEST</h1>
<p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
    <div className="hero-btn">
    <button>Shop Now</button>
    <button className="secondary-btn">Category</button>
    </div>
    <div className="shooping">
        <p>Also Available On</p>
        <div className="bran-icon">
        <img src="/public/amazon.png" alt="amazon" />
        <img src="/public/flipkart.png" alt="Filpkart" />
        </div>
    </div>
    </div>
    <div className="hero-img">
    <img src="/public/shoe_image.png" alt="shoe" />
    </div>

    </main>
    );
};
export default Hero;
import React, { useState } from "react";
// import BgImg from "../asset/productbgimg.jpg";
import ProductCard from "../component/ProductCard";
import "../styles/Product.css";
import Productimg from "../asset/productoneimg.jpg";
import Productimgtwo from "../asset/producttwoimg.jpg";
import Productimgthree from "../asset/productthreeimg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const ProductSection = () => {
  const [moveCard, setMoveCard] = useState(0);

  const moveLeft = (val) => {
    if (moveCard !== 0) {
      const newVal = moveCard + Number(val);
      setMoveCard(newVal);
      // console.log(moveCard);
    }
  }

  const moveRight = (val) => {
    if(moveCard !== -1600){
      const newVal = moveCard - Number(val);
    setMoveCard(newVal);
    // console.log(moveCard);
    }
  }

  return (
    <div className="product-section" id="products">
      {/* <div className="bg-img-box">
        <img src={BgImg} alt="" className="img" />
      </div> */}
      <div className="product-wrapper">
        <div className="card-box">
          <ProductCard
            tranvalue={moveCard}
            img={Productimg}
            title="Universal eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgtwo}
            title="Brampoton eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgthree}
            title="Jungle eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgtwo}
            title="Conversional eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgthree}
            title="Militant eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimg}
            title="Rehab eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgthree}
            title="Zoominaly eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgtwo}
            title="Krastine eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgthree}
            title="Padding eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimg}
            title="Nowergian eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgtwo}
            title="Brampoton eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgthree}
            title="Additional eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgtwo}
            title="Brampoton eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgthree}
            title="Additional eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimg}
            title="Universal eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgthree}
            title="Additional eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgtwo}
            title="Brampoton eBike kit"
          />
          <ProductCard
            tranvalue={moveCard}
            img={Productimgthree}
            title="Additional eBike kit"
          />
        </div>
        <div className="btn-box">
          <div
            onClick={() => moveLeft("100")}
            className="btn"
            style={{
              backgroundColor: `${moveCard !== 0 ? "#FCB72B" : "#FFE8B9"}`,
            }}
          >
            <FaLongArrowAltLeft className="icon" />
          </div>
          <div
            className="btn"
            style={{
              backgroundColor: `${moveCard !== -1600 ? "#FCB72B" : "#FFE8B9"}`,
            }}
            onClick={() => moveRight("100")}
          >
            <FaLongArrowAltRight className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

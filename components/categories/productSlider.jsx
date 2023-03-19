import Link from "next/link";
import Slider from "react-slick";
import candidates from "../../data/candidates";

import shopItems from "../../data/shopItems";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/shop/shopSlice";

const  Productslider = () => {
    const dispatch = useDispatch();

    // add to cart
    const addToCart = (id) => {
        const item = shopItems?.find((item) => item.id === id);
        dispatch(addCart({ product: item }));
    };



  const settings = {
    dots: true,
    speed: 1400,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
      {shopItems.map((item) => (
                <div
                    className="product-block col-lg-3 col-md-6 col-sm-12"
                    key={item.id}
                >
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link href={`/shop/shop-single/${item.id}`}>
                                    <img src={item.img} alt="shop items" />
                                </Link>
                            </figure>
                        </div>
                        {/* End image-box */}
                        <div className="info">
                            <h3>{item.title}</h3>
                            <span className="price">${item.price}</span>
                            {/* <Link
                                href="/shop/cart"
                                className="theme-btn btn-style-one"
                            >
                                <i className="flaticon-shopping-bag"></i>Add to
                                Cart
                            </Link> */}
                            <button
                                onClick={() => addToCart(item.id)}
                                className="theme-btn btn-style-one  text-white  hover:font-semibold"
                            >
                                <i className="flaticon-shopping-bag"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
      </Slider>
    </>
  );
};

export default Productslider;

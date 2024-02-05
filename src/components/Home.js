import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import leftShoe from "../assets/img/banner.jpg";
import drago from "../assets/img/drago.jpg";
import rightShoe from "../assets/img/banner 2.jpg";
import gohan from "../assets/img/gohan.jpg";

function Home({ showThanksPopup, confirmationNumber }) {
  useEffect(() => {
    if (showThanksPopup) {
      window.scrollTo(0, 0);
    }
  }, [showThanksPopup]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex">
        {/*First half of page with 3 sections */}
        <section className="w-1/3 mb-9">
          <img src={leftShoe} alt="banner" />
        </section>

        <section className="w-1/3 mt-20">
          <img className="mt-7 pt-2" src={drago} alt="banner" />
          <Link
            to="/products"
            className=" bg-gray-800 text-xl text-white font-bold py-2 px-4 rounded flex items-center justify-center hover:bg-blue-500 hover:scale-105"
          >
            Go Shop
          </Link>
        </section>
        <section className="w-1/3 mb-9">
          <img src={rightShoe} alt="banner2" />
        </section>
      </div>
      <div className="flex-1 flex">
        {/*First half of page with 3 sections */}
        <section className="w-1/3 flex items-center justify-center mt-6 border-t-4 border-gray-300 bg-blue-500">
          <p className="title text-6xl text-red-500">Ani</p>
        </section>
        <section className="w-1/3 mt-20">
          <img className="" src={gohan} alt="gohan" />
        </section>
        <section className="w-1/3 flex items-center justify-center mt-6  border-t-4 border-gray-300 bg-blue-500">
          <p className="title text-6xl text-white ">Kickz</p>
        </section>
      </div>

      {showThanksPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-md text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Thanks for Purchasing!
            </h2>
            <p className="mb-4">
              Your confirmation number is {confirmationNumber}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

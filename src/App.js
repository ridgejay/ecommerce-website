import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Footer } from "./components/Footer";
import Notification from "./components/Notification";
import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails";
import Loading from "./components/Loading";
import shoeOne from "./assets/img/cement.png";
import shoeTwo from "./assets/img/concords.png";
import shoeThree from "./assets/img/ones.png";
import shoeFour from "./assets/img/seans.png";
import shoeFive from "./assets/img/sail.png";
import shoeSix from "./assets/img/prestos.png";
import shoeSeven from "./assets/img/volt.png";
import shoeEight from "./assets/img/white.png";
import shoeNine from "./assets/img/yeezy.png";
import shoeTen from "./assets/img/blue.png";
import shoeEleven from "./assets/img/blazers.png";
import shoeTwelve from "./assets/img/airmax.png";
import shoeThirteen from "./assets/img/black.png";
import shoeFourteen from "./assets/img/chunky.jpg";
import shoeFifteen from "./assets/img/yeezy2.jpg";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);
  const [showThanksPopup, setShowThanksPopup] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setLoading(false);
    };

    fetchData();
  }, []);
  

  const handleThanksPopup = (number) => {
    setConfirmationNumber(number);
    setShowThanksPopup(true);

    setTimeout(() => {
      setShowThanksPopup(false);
    }, 5000);
  };

  const [products] = useState([
    {
      id: 1,
      name: "Cement 4's",
      price: 500,
      image: shoeOne,
      description:
        "First released in 1989, the sneaker features the original White, Fire Red, Black, and Tech Grey colorway, with the speckled Cement Grey accents that give the sneaker its nickname.",
    },
    {
      id: 2,
      name: "Concord 11's",
      price: 450,
      image: shoeTwo,
      description:
        "The never-before-seen silhouette shined bright with patent leather atop a translucent sole, and featured MJ's number 45 at the heel.",
    },
    {
      id: 3,
      name: "Chicago Off-White's",
      price: 4550,
      image: shoeThree,
      description:
        "Classic Chicago colorway. Some of the half-finished characteristics of the sneaker include an OFF-WHITE zip tie on the collar, a Swoosh linked to the shoe with noticeable blue stitching, 'Air' printed on the midsole.",
    },
    {
      id: 4,
      name: "Sean Wotherspoon's",
      price: 998,
      image: shoeFour,
      description:
        "Combined with an Air Max 97 upper with an Air Max 1 outsole and midsole. The multicolor, corduroy upper was inspired by vintage Nike hats, as well as a brainstorm with close friends and confidants.",
    },
    {
      id: 5,
      name: "Sail 4's",
      price: 780,
      image: shoeFive,
      description:
        "The Air Jordan 4 Sail features full-grain leather uppers with hits of mesh and translucent materials on the toebox and heel of the shoe.",
    },
    {
      id: 6,
      name: "Presto Off-White's",
      price: 1850,
      image: shoeSix,
      description:
        "The Nike Air Presto Off White is crafted from synthetic fabrics, as well as leather and rubber, with a black and white color scheme. Available in a black and muslin colorway.",
    },
    {
      id: 7,
      name: "Nike Volt's",
      price: 575,
      image: shoeSeven,
      description:
        "The OFF-WHITE x Air Force 1 'Volt' goes a different direction from Virgil Abloh's Nike previous designs, emphasizing a neon hue from the Swoosh's custom palette that the designer had left untouched.",
    },
    {
      id: 8,
      name: "OG Off-White's",
      price: 5800,
      image: shoeEight,
      description:
        "This model of Air Jordan 1 is available in a white-on-white colorway. The sneaker's upper is constructed of white leather and mesh with Swoosh branding on either side and blue accents.",
    },
    {
      id: 9,
      name: "Yeezy 700's",
      price: 430,
      image: shoeNine,
      description:
        "The adidas Yeezy Boost 700 V2 Vanta features a muted, mesh, leather, and suede construction in a styling influenced by 1990s running shoes. At the base, a Boost-cushioned sole adds comfort and support.",
    },
    {
      id: 10,
      name: "UNC Off-White's",
      price: 1350,
      image: shoeTen,
      description:
        "The Virgil Abloh-designed Nike Air Jordan 1 Off-White Retro High OG 'UNC' was inspired by Michael Jordan's alma mater, the University of North Carolina. The high-top pair features the iconic UNC Tar Heels blue and white.",
    },
    {
      id: 11,
      name: "Nike Blazer's",
      price: 1300,
      image: shoeEleven,
      description:
        "Nike Off-White Blazer Mid features a white leather upper with an oversized black Nike Swoosh that descends into the midsole.",
    },
    {
      id: 12,
      name: "Off-White VaporMax",
      price: 2000,
      image: shoeTwelve,
      description:
        "It has an exposed-foam tongue with a black Nike logo and orange Swoosh. To complete the look, the medial side of the shoe displays Abloh's signature 'Off-White' for Nike lettering.",
    },
    {
      id: 13,
      name: "Black Airforce Low",
      price: 1150,
      image: shoeThirteen,
      description:
        "This AF1 comes with a black upper, white Nike 'Swoosh', black midsole, and a black sole. These sneakers were released December 2018",
    },
    {
      id: 14,
      name: "Ben & Jerry's SB Low",
      price: 3350,
      image: shoeFourteen,
      description:
        "This SB Dunk Low is composed of a cloudy blue sky and green meadow leather upper with faux cowhide on the overlays and tongues. Yellow Swooshes on the side",
    },
    {
      id: 15,
      name: "Yeezy 1 Blink",
      price: 13500,
      image: shoeFifteen,
      description:
        "The Nike Air Yeezy 'Blink' is a stylish and comfortable sneaker that is perfect for any outfit. The upper is made of a variety of materials and textures, including smooth suede and an all-over 'Y' print, while the lining and lace lock are bright pink for a pop of color.",
    },
    //add more products as needed
  ]);

  const addToCart = (product) => {
    //check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      //if the product is already in cart, update the quanity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      //if the product is not in the cart, add it with quanity 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }

    setNotification(`"${product.name}" has been added to the cart`);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar cartItems={cartItems} />
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                showThanksPopup={showThanksPopup}
                confirmationNumber={confirmationNumber}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                setCartItems={setCartItems}
                onThanksPopup={handleThanksPopup}
              />
            }
          />
          <Route
            path="/products"
            element={<Products products={products} addToCart={addToCart} />}
          />
          <Route
            path="/products/:id"
            element={<ProductsDetails products={products} />}
          />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;

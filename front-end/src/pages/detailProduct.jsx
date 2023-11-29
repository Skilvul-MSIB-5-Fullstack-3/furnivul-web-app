import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Modal } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, useNavigate, useParams, Link } from "react-router-dom"; // Import Link
import axios from "axios";
import { Button as FlowbiteButton } from "flowbite-react";
import Swal from "sweetalert2";

function DetailProduct() {
  const navigate = useNavigate(); // Use useNavigate here
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState("description");
  const [discusses, setDiscusses] = useState([]);
  const [addToCartSuccess, setAddToCartSuccess] = useState(false); // Track successful addition to cart

  const Avatar = JSON.parse(localStorage.getItem("image"));

  useEffect(() => {
    axios(
      `https://furnivul-web-app-production.up.railway.app/products/${productId}`
    )
      .then((result) => {
        setProductData(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });

    axios(`https://furnivul-web-app-production.up.railway.app/reviews`)
      .then((result) => {
        setReviews(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });

    axios(`https://furnivul-web-app-production.up.railway.app/discusses`)
      .then((result) => {
        setDiscusses(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [productId]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = (product) => {
    new Swal(
      "Success! add to cart",
      "your product has been add to cart.",
      "success",
      {
        timer: 3000,
      }
    );
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setAddToCartSuccess(true);
    setTimeout(() => {
      setAddToCartSuccess(false);
    }, 3000);
  };

  return (
    <>
      <Breadcrumb
        aria-label="Breadcrumb contoh dengan latar belakang solid"
        className="bg-gray-50 ml-3 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="/" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/category-product">Kategori</Breadcrumb.Item>
        <Breadcrumb.Item href="/category-product/list-product">
          Daftar Produk
        </Breadcrumb.Item>
        <Breadcrumb.Item>Detail Produk</Breadcrumb.Item>
      </Breadcrumb>
      <div className="mx-6">
        {productData ? (
          <div className="flex mt-6 mx-4">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold mb-4">
                {productData.product_name}
              </h1>
              <p className="mb-2 text-lg">Rate: {productData.product_rate}</p>
              <p className="mb-2 text-lg">sold: {productData.product_sold}</p>

              <p className="mb-4 text-2xl font-bold">
                Price: Rp {productData.product_price.toLocaleString()},-
              </p>
              <Link to={`/cart`}>
                {" "}
                <Button onClick={() => handleAddToCart(productData)}>
                  Add to cart &nbsp;
                  <FaCartShopping />
                </Button>
              </Link>

              {/* Button.Group and Buttons */}
              <div className="mt-6 w-full ">
                <Button.Group>
                  <Button
                    color={activeTab === "description" ? "blue" : "gray"}
                    onClick={() => handleTabChange("description")}
                  >
                    Deskripsi
                  </Button>
                  <Button
                    color={activeTab === "review" ? "blue" : "gray"}
                    onClick={() => handleTabChange("review")}
                  >
                    Ulasan
                  </Button>
                  <Button
                    color={activeTab === "discussion" ? "blue" : "gray"}
                    onClick={() => handleTabChange("discussion")}
                  >
                    Diskusi
                  </Button>
                </Button.Group>
              </div>
              {/* End of Button.Group and Buttons */}

              {/* Konten berdasarkan activeTab */}
              <div className="mt-4">
                {activeTab === "description" && (
                  <div className="">
                    <h1 className="mt-6 mb-2 font-bold ">
                      {productData.product_name}
                    </h1>
                    <div className="font-bold">Deskripsi :</div>
                    <p className="mt-1 mb-2">
                      {productData.product_description}
                    </p>
                    <div className="font-bold">Material:</div>
                    <p className=" mb-4">{productData.product_material}</p>
                  </div>
                )}

                {activeTab === "review" && (
                  <div>
                    <h1 className="mt-6 mb-2 font-bold">Ulasan</h1>
                    {/* Tampilkan ulasan di sini */}
                    {reviews.map((review) => (
                      <div key={review.id} className="mt-1 mb-2 space-y-2">
                        <div className="flex items-center gap-2">
                          {" "}
                          <img
                            src={Avatar}
                            className="w-10 h-10 rounded-full"
                          />
                          {review._userId.fullname}
                        </div>
                        <p>Rating: {review.rating}</p>
                        <p>Ulasan: {review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-2/3 mx-auto ">
                <img
                  src={productData.product_image}
                  alt={productData.product_name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        ) : (
          <p>Mengambil data...</p>
        )}
        {activeTab === "discussion" && (
          <div className="mx-4 mb-8">
            <h1 className=" mb-2  font-bold">Diskusi</h1>
            {}
            {discusses.map((discusses) => (
              <div key={discusses.id} className=" mb-2">
                <p>Anonim "{discusses.comment}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default DetailProduct;

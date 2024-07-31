  import React, { useState, useEffect } from "react";
  import "./Product.css";
  import ProductModal from "../../ProductModal/ProductModal";
  import { Link, Navigate } from "react-router-dom";
  import { LiaSearchSolid } from "react-icons/lia";
  import { MdMoreHoriz } from "react-icons/md";
  import { FaHeart, FaRegHeart } from "react-icons/fa";

  const Product = ({categoryId, productsPerPage = 12, showPagination = false }) => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(categoryId ? `/api/products/category/${categoryId}` : '/api/products');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchProducts();
    }, [categoryId, wishlist]);

    useEffect(() => {
      if (user.userId) {
        const fetchWishlist = async () => {
          try {
            const response = await fetch(`/api/wishlist/wishlist/${user.userId}`);
            const data = await response.json();
            if(response.status!==404){
            setWishList(data);
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchWishlist();
      }
    }, [user.userId]);

    const removeFromWishList = async (product) => {
      await fetch(`/api/wishlist/wishlist/remove/${user.userId}/${product._id}`, {
        method: "DELETE"
      });
      setWishList(wishlist.filter(x => x._id !== product._id));
    };

    const addToWishList = async (product) => {
      if (user.userId) {
        const response = await fetch(`/api/wishlist/wishlist/add/${user.userId}/${product._id}`, {
          method: "POST"
        });
        const data = await response.json();
        setWishList(prev => [...prev, product]);
      } else {
        Navigate("/reset/login");
      }
    };

    const handleSearchClick = (id) => {
      setSelectedId(id);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const totalPages = Math.ceil(products.length / productsPerPage);
    const paginatedProducts = products.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );
    


    return (
      <div className="container_products product">
        {paginatedProducts.map((product) => (
          <div className="product_item" key={product.id}>
            <div className="product_item_image">
              <img src={product.productPic} alt="product" />
              <div className="product_item_image_hover">
                <button>
                  <Link to={`/products/${product._id}`} className="product_icon">
                    <MdMoreHoriz />
                  </Link>
                </button>
                <button type="button" onClick={() => handleSearchClick(product.id)}>
                  <div className="product_icon">
                    <LiaSearchSolid />
                  </div>
                </button>
                <button>
                  {wishlist.length !== 0
                    ? wishlist.find((x) => x._id === product._id)
                      ? <FaHeart onClick={() => { removeFromWishList(product) }} className='heart heart-active' />
                      : <FaRegHeart onClick={() => addToWishList(product)} className='heart' />
                    : <FaRegHeart onClick={() => addToWishList(product)} className='heart' />}
                </button>
              </div>
            </div>
            <div className="product_item_body">
              <p>{product.title}</p>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
        {isModalOpen && (
          <ProductModal product={products.find((e) => e.id === selectedId)} onClose={handleCloseModal} />
        )}
        {showPagination && (
          <div className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <button
                style={{padding:"14px",background:"#961c2b",color:"white",marginLeft:"8px",border:"none"}}
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };
 export default Product  
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './PlpPage.css';
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

const PlpPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const handelClick = (productId: number) => {
    navigate("/checkout.jsp", { state: { productId } });
    window.location.reload(); // Force reload to ensure PlpPage reads the state
  }
  if (loading) return <div className="p-4">Loading products...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product Listing Page</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.images[0]}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                onClick={() => handelClick(product.id)}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlpPage;

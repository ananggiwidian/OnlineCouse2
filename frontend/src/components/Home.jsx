import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";

const Home = () => {
	const { items: products, status } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { data, isLoading } = useGetAllProductsQuery();
	console.log("Api", isLoading);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
		navigate("/cart");
	};

	return (
		<div className="home-container">
			<>
				<h2>Online Course Terlaris Bulan ini</h2>
				<div className="products">
					{data &&
						data?.map((product) => (
							<div key={product.id} className="product">
								<h3>{product.name}</h3>
								<img src={product.image} alt={product.name} />
								<div className="details">
									<span>{product.desc}</span>
								</div>
								<div className="price-container">
									<span className="price">${product.price}</span>
								</div>
								<button onClick={() => handleAddToCart(product)}>Add To Cart</button>
							</div>
						))}
				</div>
			</>
		</div>
	);
};

export default Home;

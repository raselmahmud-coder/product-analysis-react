import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import SignleProduct from "../SignleProduct/SignleProduct";

const Products = () => {
  const { id } = useParams();
  console.log("from use Params ", id);
  const [products] = useProducts();
  const exist = products.filter(pd => pd.category === id);
  console.log("from exist", exist);
  return (
    <div className="flex flex-wrap overflow-hidden">
      {exist.map((pd) => (
        <SignleProduct key={pd.id} pd={pd} />
      ))}
    </div>
  );
};

export default Products;

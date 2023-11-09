import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemList.css";
const ItemList = ({ products }) => {
  
  return (
    <div className="itemList">
      {products.map((prod) => (
        <div key={prod.id}>
          <Link className="notLinkStyle"  to={`/item/${prod.id}`} >
          <Item  {...prod} />
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default ItemList;

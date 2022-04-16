import dataCourses from "../../data/dataCourses";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {

  const course = dataCourses.find(item => item.id === cartItem.courseId);
  const dispatch = useDispatch();

  return (<div>
    <p>{course.name}</p>
    <p>{cartItem.quantity} прорций(я)</p>
    <p>Цена: {course.price * cartItem.quantity} ₽</p>
    <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} >
      <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/>
    </span>
  </div>);
}

export default CartItem;
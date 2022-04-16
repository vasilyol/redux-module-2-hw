import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";

const Course = ({course}) => {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (<div>
    <img src={`${course.img}.jpg`} alt="course"/>
    <h2>{course.name}</h2>
    <p>{course.price} ₽</p>
    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
    <button onClick={() => dispatch(addItemToCart({course, quantity}))} >Добавить в корзину</button>
  </div>);
}

export default Course;
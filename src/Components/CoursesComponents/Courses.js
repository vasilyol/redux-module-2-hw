import dataCourses from "../../data/dataCourses";
import Course from "./Course";
import { useSelector } from "react-redux"; 
import { getSelectedCategory } from  "../../redux/coursesSlice";

const Courses = () => {
  const selectedCategory = useSelector(getSelectedCategory);

  return (<div>
    {dataCourses
      .filter(course => {
        if (selectedCategory === "ВСЕ") return true;
        return selectedCategory === course.category;
      })
      .map(course => <Course course={course}/>)}
  </div>);
}

export default Courses;
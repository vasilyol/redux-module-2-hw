import Filter from "./Filter";

const AllCategories = () => {
  return (<div>
    <h1>Что вы хотите заказать?</h1>
    {['ЗАВТРАК', 'САЛАТЫ', 'ЗАКУСКИ', 'СУПЫ', 'ШАШЛЫК', 'РЫБА', 'ВСЕ'].
      map(category => <Filter category={category}/>)
    }
    
  </div>);
}

export default AllCategories;
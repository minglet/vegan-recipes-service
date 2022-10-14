import { useNavigate } from "react-router-dom";

function ServiceRecipe(props) {
  const navigate = useNavigate();
  const onClickRecipeItem = () => {
    navigate(`/recipes/current/:${props.title}`, {
      state: props,
    });
  };
  return (
    <div className="recipe-container" onClick={onClickRecipeItem}>
      <img src={props.img_url} alt="food-img" />
      <div className="recipe-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default ServiceRecipe;

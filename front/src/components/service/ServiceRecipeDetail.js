import { useLocation, useParams } from "react-router-dom";

function RecipeDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  return (
    <div>
      <img src={state.img_url} alt="food-img" />
      <div>{title}</div>
    </div>
  );
}
export default RecipeDetail;

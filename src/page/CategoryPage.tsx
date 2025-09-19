import { IoIosArrowBack } from "react-icons/io";
import categoryStyle from "../css/page/categoryPage.module.css";
import { useNavigate } from "react-router-dom";
import foodIcon from "../assets/food-icon.png";
import drinkIcon from "../assets/drink-icon.png";
import Header from "../components/Header";

export default function CategoryPage() {
  const navigate = useNavigate();
  const handleClick = (type: string) => {
    navigate(`/address?category=${type}`);
  };
  return (
    <div className={categoryStyle.pageContainer}>
      <Header showLocation={false} setShowLocation={() => {}} />
      <div className={categoryStyle.content}>
        <div className={categoryStyle.selectDiv}>
          <div
            className={categoryStyle.foodDiv}
            onClick={() => {
              handleClick("food");
            }}
          >
            <img
              src={foodIcon}
              alt="음식 아이콘"
              className={categoryStyle.foodIcon}
            />
            <span>식당 찾기</span>
          </div>
          <div
            className={categoryStyle.drinkDiv}
            onClick={() => {
              handleClick("drink");
            }}
          >
            <img
              src={drinkIcon}
              alt="술집 아이콘"
              className={categoryStyle.drinkIcon}
            />
            <span>술집 찾기</span>
          </div>
        </div>
      </div>
    </div>
  );
}

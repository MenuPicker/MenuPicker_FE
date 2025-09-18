import { IoIosArrowBack } from "react-icons/io";
import categoryStyle from "../css/page/categoryPage.module.css";
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const navigate = useNavigate();
  return (
    <div className={categoryStyle.pageContainer}>
      <header className={categoryStyle.header}>
        <IoIosArrowBack
          className={categoryStyle.backIcon}
          onClick={() => {
            navigate(-1);
          }}
        />
      </header>
      <div className={categoryStyle.content}>
        <div className={categoryStyle.selectDiv}>
          <div className={categoryStyle.foodDiv}></div>
          <div className={categoryStyle.drinkDiv}></div>
        </div>
      </div>
    </div>
  );
}

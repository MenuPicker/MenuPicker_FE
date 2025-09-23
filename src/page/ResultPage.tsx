import Header from "../components/Header";
import resultStyle from "../css/page/resultPage.module.css";

export default function ResultPage() {
  return (
    <div className={resultStyle.pageContainer}>
      <Header />
      <div className={resultStyle.content}></div>
    </div>
  );
}

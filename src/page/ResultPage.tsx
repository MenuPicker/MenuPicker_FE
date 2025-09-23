import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import resultStyle from "../css/page/resultPage.module.css";
import { useEffect } from "react";

export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("resultName");
  const address = searchParams.get("resultAddress");
  const reason = searchParams.get("resultReason");
  
  const fetchResultPlace = async () => {
    try {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
        {
          method: "GET",
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
          },
        }
      );
      if (!response.ok) {
        console.error("결과 api호출 오류");
        return;
      }
      const data = await response.json();
    } catch (error) {}
  };

  useEffect(() => {}, []);

  return (
    <div className={resultStyle.pageContainer}>
      <Header />
      <div className={resultStyle.content}>
        <div className={resultStyle.content}></div>
      </div>
    </div>
  );
}

import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import resultStyle from "../css/page/resultPage.module.css";
import { useEffect, useState } from "react";

interface ResultPlace {
  name: string;
  address: string;
  phone: string;
  kakaoURL: string;
  x: string;
  y: string;
}

export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("resultName");
  const address = searchParams.get("resultAddress");
  const reason = searchParams.get("resultReason");
  const [result, setResult] = useState<ResultPlace | null>(null);

  const fetchResultPlace = async () => {
    try {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${name}`,
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

      if (data.documents.length > 0) {
        const doc = data.documents[0];
        const place: ResultPlace = {
          name: doc.place_name,
          address: doc.address_name,
          phone: doc.phone,
          kakaoURL: doc.place_url,
          x: doc.x,
          y: doc.y,
        };
        setResult(place);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchResultPlace();
  }, []);

  return (
    <div className={resultStyle.pageContainer}>
      <Header />
      <div className={resultStyle.content}>
        <div className={resultStyle.content}>
          {result && (
            <div>
              <h2>{result.name}</h2>
              <p>{result.address}</p>
              <p>{result.phone}</p>
              <a href={result.kakaoURL} target="_blank" rel="noreferrer">
                카카오맵에서 보기
              </a>
              <a
                href={`nmap://place?lat=${result.y}&lng=${result.x}&name=${result.name}`}
              >
                네이버 지도에서 보기
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

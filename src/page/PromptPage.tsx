import { useState } from "react";
import Header from "../components/Header";
import promptStyle from "../css/page/promptPage.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function PromptPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const address = searchParams.get("address");
  const navigate = useNavigate();
  const [textArea, setTextArea] = useState<string>("");
  const [isDisabled, setIsisabled] = useState<boolean>(true);
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextArea(value);
    setIsisabled(value === "");
  };
  const getResult = async () => {
    if (!address || !category || !textArea) return;

    const target = category === "food" ? "밥집" : "술집";
    const prompt = `위치는 ${address}이고, ${target}를 찾아줘.
      내 요구사항은 다음과 같아: ${textArea}
      이 요구사항에 맞게 ${target}를 추천해줘.
      결과는 첫째줄에 ${target}이름, 둘째줄에 ${target}주소, 셋째줄에 선택한 이유 알려줘. 다른 부가적인 말 절대 추가하지 말고 딱 이름, 주소, 이유만 적어. 
      이름은 다른 지역에 같은 이름이 있을 수도 있으니까 그 부분 신경써서 결과가 하나만 나올 수 있도록 해줘. ${address}에서 가장 가까운 곳으로. 
      부합하는 곳이 없다면 가짜 정보를 만들지 말고 없다고 말해. 내 모든 요청사항에 대해서 google지도 말고 네이버 지도에서 검색하도록 해`;

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        console.error("Gemini API 호출 실패:", response.statusText);
        return;
      }

      const data = await response.json();

      // 답변
      const text = data.candidates[0].content.parts[0].text;

      //파싱
      const [resultName, resultAddress, resultReason] = text.split("\n");

      navigate(
        `/result?resultName=${resultName}&resultAddress=${resultAddress}&resultReason=${resultReason}`
      );

      console.log("Gemini 결과:", data);
    } catch (err) {
      console.error("Fetch 실패:", err);
    }
  };

  return (
    <div className={promptStyle.pageContainer}>
      <Header />
      <div className={promptStyle.content}>
        <div className={promptStyle.textDiv}>
          <span className={promptStyle.largeText}>
            <span>마지막</span> 단계에요!
          </span>
          <span className={promptStyle.smallText}>
            원하는 음식, 분위기 등을 적어주세요
          </span>
        </div>
        <textarea
          value={textArea}
          placeholder="ex) 분위기가 좋고 맛있는 꼬치를 파는 이자카야"
          className={promptStyle.textarea}
          onChange={(e) => handleTextArea(e)}
        />
        <div className={promptStyle.btnDiv}>
          <button onClick={getResult} disabled={isDisabled}>
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
}

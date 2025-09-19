import { useState } from "react";
import Header from "../components/Header";
import promptStyle from "../css/page/promptPage.module.css";

export default function PromptPage() {
  const [textArea, setTextArea] = useState<string>("");
  const [isDisabled, setIsisabled] = useState<boolean>(true);
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextArea(value);
    setIsisabled(value === "");
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
          <button onClick={() => {}} disabled={isDisabled}>
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
}

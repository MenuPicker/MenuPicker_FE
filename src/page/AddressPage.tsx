import { useState } from "react";
import Header from "../components/Header";
import addressStyle from "../css/page/addressPage.module.css";
import { CiSearch } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
export default function AddressPage() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleAddress = async () => {
    if (inputValue.trim() === "") {
      setErrorMsg("주소를 입력해주세요.");
      return;
    }
    setErrorMsg("");
    try {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${inputValue}`,
        {
          method: "GET",
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
          },
        }
      );
      const data = await response.json();
      setResults(data.documents || []);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("현재 브라우저에서 위치 정보를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("위도:", latitude, "경도:", longitude);
        // 여기서 주소 API 호출 가능
      },
      (error) => {
        console.error(error);
        alert("위치 정보를 가져오는데 실패했습니다.");
      }
    );
  };

  return (
    <div className={addressStyle.pageContainer}>
      <Header />
      <div className={addressStyle.content}>
        <div className={addressStyle.inputDiv}>
          <input
            type="text"
            className={addressStyle.addressInput}
            placeholder="주소를 입력해주세요"
            onChange={(e) => setInputValue(e.target.value)}
          />
          {/* {errorMsg && (
            <span className={addressStyle.errorMsg}>{errorMsg}</span>
          )} */}
          <div onClick={getLocation} className={addressStyle.locationDiv}>
            <CiLocationArrow1 className={addressStyle.locationIcon} />
            <span>내 위치</span>
          </div>
          <CiSearch
            className={addressStyle.searchIcon}
            onClick={handleAddress}
          />
        </div>
        {/* <ul className={addressStyle.resultList}>
          {results.map((item, idx) => (
            <li key={idx}>{item.address_name}</li>
          ))}
        </ul> */}
        {/* <div className={addressStyle.textDiv}>
          <span>또는</span>
        </div> */}
      </div>
    </div>
  );
}

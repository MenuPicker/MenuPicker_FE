import { useState } from "react";
import Header from "../components/Header";
import addressStyle from "../css/page/addressPage.module.css";
import { CiSearch } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import Modal from "../components/Modal";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function AddressPage() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [showLocation, setShowLocation] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  const handleAddress = async () => {
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
      setText("현재 브라우저에서 위치 정보를 지원하지 않습니다.");
      setIsOpen(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("위도:", latitude, "경도:", longitude);
        // 여기서 주소 API 호출 가능
        getAddressFromCoords(latitude, longitude);
      },
      (error) => {
        console.error(error);
        setText("위치 정보를 가져오는데 실패했습니다.");
        setIsOpen(true);
      }
    );
  };
  const getAddressFromCoords = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
        {
          method: "GET",
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
          },
        }
      );

      const data = await response.json();
      if (data.documents && data.documents.length > 0) {
        const address = data.documents[0].address.address_name;
        console.log("현재 주소:", address);
        return address;
      } else {
        console.log("주소를 찾을 수 없습니다.");
        return "";
      }
    } catch (err) {
      console.error(err);
      return "";
    }
  };

  const handleBackBtn = () => {
    if (showLocation) {
      setShowLocation(false);
      return;
    }
    navigate(-1);
  };

  const handleMyAddress = (address: string) => {
    setAddress(address);
  };
  return (
    <div className={addressStyle.pageContainer}>
      {isOpen && <Modal title={title} text={text} setIsOpen={setIsOpen} />}
      <header
        className={`${addressStyle.header} ${
          showLocation ? addressStyle.headerFocused : ""
        }`}
      >
        {showLocation && (
          <div onMouseDown={getLocation} className={addressStyle.locationDiv}>
            <CiLocationArrow1 className={addressStyle.locationIcon} />
            <span>내 위치</span>
          </div>
        )}
        <IoIosArrowBack
          className={addressStyle.backIcon}
          onClick={handleBackBtn}
        />
        <div
          className={`${addressStyle.inputDiv} ${
            showLocation ? addressStyle.inputDivFocused : ""
          }`}
        >
          <input
            type="text"
            className={addressStyle.addressInput}
            placeholder="주소를 입력해주세요"
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setShowLocation(true)}
          />
          {/* {errorMsg && (
            <span className={addressStyle.errorMsg}>{errorMsg}</span>
          )} */}

          <CiSearch
            className={addressStyle.searchIcon}
            onClick={handleAddress}
          />
        </div>
      </header>
      <div className={addressStyle.content}>
        <ul className={addressStyle.resultList}>
          {results.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                handleMyAddress(item.address_name);
              }}
            >
              {item.address_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

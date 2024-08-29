import { mockUserInfo } from "../mockUserInfo";
import { useState, useEffect } from "react";
import SubmitBtn from "./SubmitBtn";

function GeneralInfo() {
  // const [inputData, setInputData] = useState('');
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchInitialData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get('https://api.example.com/initial-input-data');
  //       setInputData(response.data.initialValue); // 가정: 서버에서 { initialValue: "some data" } 형태로 응답
  //     } catch (err) {
  //       setError('초기 데이터를 불러오는 데 실패했습니다.');
  //       console.error('Error fetching initial data:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchInitialData();
  // }, []);

  // const handleInputChange = (e) => {
  //   setInputData(e.target.value);
  // };

  const [userInfo, setUserInfo] = useState({
    userId: "",
    email: "",
    mbti: "",
    genre: "",
    age: "",
    gender: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // 맨 처음 페이지 렌더링 될 때 기존 데이터를 가져오게 하는 코드
  useEffect(() => {
    if (mockUserInfo.length > 0) {
      setUserInfo(mockUserInfo[0]);
    }
  }, []);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUserInfo(prevState => ({...prevState, [name]: value}));
  }

  const handleSubmit = () => {
    console.log('Sending general info to backend:', userInfo);
  }

  return (
    <section className="flex justify-between flex-wrap mb-16">
      <p className="w-full mb-8 text-xl text-[#c3c3c4] font-semibold">
        General Infomation
      </p>
      <div className="w-5/12 mb-10">
        <p className="text-[#c3c3c4] mb-3">ID</p>
        <input
          type="text"
          name="userId"
          value={userInfo.userId}
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
        />
      </div>

      <div className="w-5/12">
        <p className="text-[#c3c3c4] mb-3">E-mail</p>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
        />
      </div>

      <div className="w-5/12 mb-10">
        <p className="text-[#c3c3c4] mb-3">MBTI</p>
        <input
          type="text"
          name="mbti"
          value={userInfo.mbti}
          onChange={handleInputChange}
          disabled={!isEditing}
          className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
        />
      </div>

      <div className="w-5/12">
        <p className="text-[#c3c3c4] mb-3">Music Genre</p>
        <input
          type="tel"
          className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
        />
      </div>

      <div className="w-5/12">
        <p className="text-[#c3c3c4] mb-3">Age</p>
        <select
          name="age"
          id="age"
          className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
        >
          <option value="10's">10's</option>
          <option value="20's">20's</option>
          <option value="30's">30's</option>
          <option value="40's">40's</option>
          <option value="50's">50's</option>
          <option value="60's">60's</option>
          <option value="70's">70's</option>
        </select>
      </div>

      <div className="w-5/12">
        <p className="text-[#c3c3c4] mb-3">Gender</p>
        <select
          name="gender"
          id="gender"
          className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <SubmitBtn onClick={isEditing ? handleSubmit : () => setIsEditing(true)} disabled={false}>
        Update General Info
      </SubmitBtn>
    </section>
  );
}

export default GeneralInfo;

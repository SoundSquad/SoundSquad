import { useState, useEffect } from "react";
import axios from "axios";
import SubmitBtn from "./SubmitBtn";

function GeneralInfo() {
  const [userInfo, setUserInfo] = useState({
    userId: "",
    email: "",
    mbti: "",
    genre: "",
    age: "",
    gender: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // 맨 처음 페이지 렌더링 될 때 기존 데이터를 가져오게 하는 코드
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/mypage/user', {
        params: { user_num: 1 }, // 실제 사용자 번호로 대체해야 합니다
        withCredentials: true // 쿠키를 포함시키기 위해 필요합니다        
      });
      if (response.data && response.data.data) {
        setUserInfo({
          userId: response.data.data.user_id,
          email: response.data.data.email || "",
          mbti: response.data.data.mbti || "",
          genre: response.data.data.prefer_genre || "",
          age: response.data.data.user_bd || "",
          gender: response.data.data.user_gender === 1 ? "male" : "female",
        });
      }
    } catch (err) {
      console.error('Error fetching user info:', err);
      setError('사용자 정보를 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = async () => {
    try{
      const response = await axios.put('http://localhost:8080/mypage/user', {
        user_id: userInfo.userId,
        mbti: userInfo.mbti,
        prefer_genre: userInfo.genre,
        age: userInfo.age,
        
      })
    } catch (err) {
      console.log('사용자 업데이트 실패', err);
      setError('사용자 정보 업데이트 실패');
    }
  };

  const handleSubmit = () => {
    console.log('Sending general info to backend:', userInfo);
    setIsEditing(false);
  }

  const toggleEdit = () => {
    if(isEditing){
      handleSubmit();
    } else{
      setIsEditing(true);
    }
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
          disabled={true}
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
          key={userInfo.age}
          value={userInfo.age}
          onChange={handleInputChange}
          className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
        >
          <option value="">Select Age</option>
          <option value="10-19">10-29</option>
          <option value="20-29">20-29</option>
          <option value="30-39">30-39</option>
          <option value="40-49">40-49</option>
          <option value="50-or-more">50 or more</option>
        </select>
      </div>

      <div className="w-5/12">
        <p className="text-[#c3c3c4] mb-3">Gender</p>
        <select
          name="gender"
          id="gender"
          value={userInfo.gender}
          onChange={handleInputChange}
          className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <SubmitBtn onClick={toggleEdit} disabled={false}>
        {isEditing ? "Save Changes" : "Edit Info"}
      </SubmitBtn>
    </section>
  );
}

export default GeneralInfo;

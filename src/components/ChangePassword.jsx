import SubmitBtn from "./SubmitBtn";
import { mockUserInfo } from "../mockUserInfo";
import { useState } from "react";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ type: "", msg: "" });


  const handleSubmit = (e) => {

    e.preventDefault();

    if (currentPassword !== mockUserInfo[0].password) {
      setMessage({ type: "error", content: "current pw is wrong" });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ type: "error", content: "pw do not match" });
      return;
    }

    setMessage({ type: "success", content: "pw changed successfully" });

    // 인풋창 초기화
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    console.log(newPassword);
  };

  const formValid = confirmPassword && newPassword && confirmPassword;

  return (
    <section>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-between flex-wrap"
      >
        <p className="w-full mb-8 text-xl text-[#c3c3c4] font-semibold">
          Change Password
        </p>

        <div className="w-5/12 mt-10">
          <p className="text-[#c3c3c4] mb-3">Current Password</p>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
          />
        </div>

        <div className="w-5/12">
          <p className="text-[#c3c3c4] mb-3">New Password</p>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
          />
        </div>
        <div className="w-5/12">
          <p className="text-[#c3c3c4] mb-3">New Password Check</p>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
          />
        </div>
        {message.content && (
          <p
            className={`w-full mt-4 ${
              message.type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {message.content}
          </p>
        )}

        <SubmitBtn disabled={!formValid}>Chnage Password</SubmitBtn>
      </form>
    </section>
  );
}

export default ChangePassword;

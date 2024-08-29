// Tab2.js
import React from "react";
import SubmitBtn from "./SubmitBtn";

function ChangePassword() {
  return (
    <>
      <section className="flex justify-between flex-wrap">
        <p className="w-full mb-8 text-xl text-[#c3c3c4] font-semibold">
          Change Password
        </p>

        <div className="w-5/12">
          <p className="text-[#c3c3c4] mb-3">New Password</p>
          <input
            type="password"
            className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
          />
        </div>
        <div className="w-5/12">
          <p className="text-[#c3c3c4] mb-3">New Password Check</p>
          <input
            type="password"
            className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
          />
        </div>

        <div className="w-5/12 mt-10">
          <p className="text-[#c3c3c4] mb-3">Current Password</p>
          <input
            type="password"
            className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"
          />
        </div>
      </section>
      <SubmitBtn>Chnage Password</SubmitBtn>
    </>
  );
}

export default ChangePassword;

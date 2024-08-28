// Tab1.js
import React from 'react';

function GeneralInfo() {
  return (
      <section className="flex justify-between flex-wrap mb-16">
        <p className="w-full mb-8 text-xl text-[#c3c3c4] font-semibold">
            General Infomation
          </p>
          <div className="w-5/12 mb-10">
            <p className="text-[#c3c3c4] mb-3">
              ID
            </p>
            <input type="text" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]" />
          </div>

          <div className="w-5/12">
            <p className="text-[#c3c3c4] mb-3">
              E-mail
            </p>
            <input type="email" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"/>
          </div>

          <div className="w-5/12 mb-10">
            <p className="text-[#c3c3c4] mb-3">
              MBTI
            </p>
            <input type="text" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"/>
          </div>

          <div className="w-5/12">
            <p className="text-[#c3c3c4] mb-3">
              Music Genre
            </p>
            <input type="tel" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"/>
          </div>

          <div className="w-5/12">
            <p className="text-[#c3c3c4] mb-3">
              Age
            </p>
            <select name="age" id="age"  className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]">
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
            <p className="text-[#c3c3c4] mb-3">
              Gender
            </p>
            <select name="gender" id="gender"  className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
      </section>
  );
}

export default GeneralInfo;


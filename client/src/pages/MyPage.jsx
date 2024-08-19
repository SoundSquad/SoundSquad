const MyPage = () => {
  return(
    <main className="container mx-auto px-8 py-16 flex justify-between">
      {/* profile picture*/}
      <section className="basis-28">
        <div className="w-28 h-28 rounded-full bg-green-300">
          <img className="object-contain w-28 h-28" src="../src/assets/react.svg" alt="" />
        </div>
      </section>

      <div className="basis-10/12">
        <section className="flex justify-between flex-wrap mb-16">
        <p className="w-full mb-8 text-xl text-[#c3c3c4] font-semibold">
            General Infomation
          </p>
          <div className="w-5/12 mb-10">
            <p className="text-[#c3c3c4] mb-3">
              Name
            </p>
            <input type="text" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]" />
          </div>

          <div className="w-5/12 mb-10">
            <p className="text-[#c3c3c4] mb-3">
              User Nick Name
            </p>
            <input type="text" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"/>
          </div>

          <div className="w-5/12">
            <p className="text-[#c3c3c4] mb-3">
              E-mail
            </p>
            <input type="email" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"/>
          </div>

          <div className="w-5/12">
            <p className="text-[#c3c3c4] mb-3">
              Phone Number
            </p>
            <input type="tel" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"/>
          </div>

        </section>

        <section className="flex justify-between flex-wrap">
          <p className="w-full mb-8 text-xl text-[#c3c3c4] font-semibold">
            Change Password
          </p>

          <div className="w-5/12">
            <p className="text-[#c3c3c4] mb-3">
              New Password
            </p>
            <input type="password" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"/>
          </div>
          <div className="w-5/12">
            <p className="text-[#c3c3c4] mb-3">
              New Password Check
            </p>
            <input type="password" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"/>
          </div>

          <div className="w-5/12 mt-10">
            <p className="text-[#c3c3c4] mb-3">
              Current Password
            </p>
            <input type="password" className="w-9/12 rounded-md p-2 border-solid border-2 border-[#e1e1e1]"/>
          </div>
        </section>

        <button type="button" className="mt-10 px-12 py-3 rounded-md text-white bg-gradient-to-r from-green-400 to-lime-300">
          Edit
        </button>

      </div>

    </main>
  );
};

export default MyPage;
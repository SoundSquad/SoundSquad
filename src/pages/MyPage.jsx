import TabContainer from "../components/TabContainer";
import GeneralInfo from "../components/GeneralInfo";
import ChangePassword from "../components/ChangePassword";
import SquadInfo from "../components/SquadInfo";

const MyPage = () => {
  return(
    <main className="max-w-screen-xl mx-auto px-8 py-16 flex justify-between">
      {/* profile picture*/}
      <section className="basis-40">
        <div className="w-28 h-28 rounded-full bg-green-300">
          <img className="object-contain w-28 h-28" src="../src/assets/react.svg" alt="" />
        </div>
      </section>

      <div className="basis-10/12">

      <div className="container mx-auto p-4">
      <TabContainer>
        <GeneralInfo label="General Info"/>

        <ChangePassword label="Change Password" />

        <SquadInfo label="Squad Info"/>
      </TabContainer>
      </div>

        <button type="button" className="mt-10 px-12 py-3 rounded-md text-white bg-gradient-to-r from-green-400 to-lime-300">
          Edit
        </button>

      </div>

    </main>
  );
};

export default MyPage;
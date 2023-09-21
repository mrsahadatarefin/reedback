import { AiOutlinePlus } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between mx-5 my-5  ">
        <div>
          <h1 className="text-3xl font-semibold ">Feedback</h1>
          <p className="text-xl">Share your feedback with your hiring teams</p>
        </div>
        <div>
          <button
            className="flex  my-5
         bg-orange-500 px-4 py-3
         text-white text-md font-medium
          rounded-full hover:bg-blue-600 "
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            share Feedback <AiOutlinePlus size={22} className="pl-2" />
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Header;

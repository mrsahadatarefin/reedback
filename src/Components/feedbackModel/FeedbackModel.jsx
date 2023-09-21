import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { PiShieldPlus } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { TbFileDislike } from "react-icons/tb";

import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/feedbackSlice";

const FeedbackModel = () => {
  const [attribute1Rating1, setAttribute1Rating1] = useState(null);
  const [attribute1Rating2, setAttribute1Rating2] = useState(null);
  const [attribute1Rating3, setAttribute1Rating3] = useState(null);
  const [evaluations, setEvaluations] = useState({});
  const dispatch = useDispatch();

  const handelFrom = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const feedbackNote = form.feedbackNote.value;
    const attribute1 = form.attribute1.value;
    const attribute2 = form.attribute2.value;
    const attribute3 = form.attribute3.value;
    console.log(
      name,
      attribute1,
      feedbackNote,
      attribute2,
      attribute3,
      evaluations
    );

    form.reset();
    dispatch(
      addToCart({
        name,
        feedbackNote,
        attribute1,
        attribute1Rating1,
        attribute2,
        attribute1Rating2,
        attribute3,
        attribute1Rating3,
        evaluations,
      })
    );
  };

  const evaluation = [
    {
      id: 1,
      name: "Defintely",
      icon: <PiShieldPlus />,
      style: "text-green-400",
    },
    {
      id: 2,
      name: "yes",
      icon: <AiOutlineLike />,
      style: "text-green-400",
    },
    {
      id: 3,
      name: "no",
      icon: <AiOutlineDislike />,
      style: "text-red-400",
    },
    {
      id: 4,
      name: "Not sure",
      icon: <TbFileDislike />,
      style: "text-red-400",
    },
  ];
  const attributes = [
    {
      name: "Communication Skills",
    },
    {
      name: "Cultural Fit/ Attitude",
    },
    {
      name: "Technical Skills",
    },
    {
      name: "Ability to learn",
    },
    {
      name: "java",
    },
    {
      name: "python",
    },
    {
      name: "javascript",
    },
  ];

  return (
    <>
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box">
          <form method="dialog">
            <h1 className="text-2xl font-bold">Share Your Feedback</h1>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5  text-orange-500 text-2xl ">
              ✕
            </button>
            <div className="divider"></div>
          </form>
          <div>
            <form action="" onSubmit={handelFrom}>
              <div className="flex justify-between">
                <div>
                  <select
                    className="select select-bordered w-full "
                    name="attribute1"
                  >
                    <option disabled selected>
                      new Attribute
                    </option>
                    {attributes.map(({ name, i }) => (
                      <option key={i} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex ">
                  <div className="">
                    <div className="flex">
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                          <label key={i}>
                            <input
                              value={ratingValue}
                              type="radio"
                              className="hidden"
                              onClick={() => setAttribute1Rating1(ratingValue)}
                            />
                            <AiFillStar
                              className={`cursor-pointer ${
                                ratingValue <= attribute1Rating1
                                  ? "text-yellow-400"
                                  : "text-gray-400"
                              }`}
                              key={i}
                              size={25}
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex ">
                    <AiOutlineMinusCircle
                      size={20}
                      className="text-red-500 mx-1"
                    />
                    <AiOutlinePlusCircle
                      size={20}
                      className="text-green-500 "
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <select
                    className="select select-bordered w-full "
                    name="attribute2"
                  >
                    <option disabled selected>
                      new Attribute
                    </option>
                    {attributes.map(({ name, i }) => (
                      <option key={i} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex ">
                  <div className="">
                    <div className="flex">
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                          <label key={i}>
                            <input
                              value={ratingValue}
                              type="radio"
                              className="hidden"
                              onClick={() => setAttribute1Rating2(ratingValue)}
                            />
                            <AiFillStar
                              className={`cursor-pointer ${
                                ratingValue <= attribute1Rating2
                                  ? "text-yellow-400"
                                  : "text-gray-400"
                              }`}
                              key={i}
                              size={25}
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex ">
                    <AiOutlineMinusCircle
                      size={20}
                      className="text-red-500 mx-1"
                    />
                    <AiOutlinePlusCircle
                      size={20}
                      className="text-green-500 "
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <select
                    className="select select-bordered w-full "
                    name="attribute3"
                  >
                    <option disabled selected>
                      new Attribute
                    </option>
                    {attributes.map(({ name, i }) => (
                      <option key={i} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex ">
                  <div className="">
                    <div className="flex">
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                          <label key={i}>
                            <input
                              value={ratingValue}
                              type="radio"
                              className="hidden"
                              onClick={() => setAttribute1Rating3(ratingValue)}
                            />
                            <AiFillStar
                              className={`cursor-pointer ${
                                ratingValue <= attribute1Rating3
                                  ? "text-yellow-400"
                                  : "text-gray-400"
                              }`}
                              key={i}
                              size={25}
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex ">
                    <AiOutlineMinusCircle
                      size={20}
                      className="text-red-500 mx-1"
                    />
                    <AiOutlinePlusCircle
                      size={20}
                      className="text-green-500 "
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 ">
                <h1 className="font-bold text-md">Evaluation Score*</h1>
                <div className="grid grid-cols-4 gap-3 mt-5">
                  {evaluation.map((ev) => (
                    <>
                      <div className="flex ">
                        <span
                          className={`mx-2 text-md ${evaluations.style}`}
                          onClick={() => setEvaluations(ev)}
                        >
                          {ev.icon}
                        </span>
                        <h1 className="font-bold">{ev.name}</h1>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="mt-10 ">
                <h1 className="font-bold text-md">Share your feedback*</h1>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered w-full mb-5 "
                  name="name"
                />
                <textarea
                  placeholder="Add your feedback here"
                  name="feedbackNote"
                  className="textarea textarea-bordered textarea-lg w-full  "
                  required
                ></textarea>
              </div>
              <h1>
                <span className="text-md font-bold">Note:</span> Feedback will
                be visible to al your hiring team members
              </h1>

              <div className="flex justify-end mt-5  ">
                <button className="px-7 py-3 mx-5 hover:border-blue-600 hover:text-blue-600 border-orange-500 border-2 rounded-full text-orange-500 font-semibold text-md  ">
                  cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-3 hover:bg-blue-600 bg-orange-500 rounded-full   text-white font-semibold text-md "
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default FeedbackModel;

import FeedbackCart from "../FeedbackCart";
import Header from "../header/Header";
import FeedbackModel from "../feedbackModel/FeedbackModel";
import UpdateModel from "../upDateModel/UpdateModel";
import { useState } from "react";

const Home = () => {
  const [updateId, setUpdateId] = useState("");
  console.log(updateId);

  return (
    <>
      <Header />
      <FeedbackModel />
      <FeedbackCart setUpdateId={setUpdateId} />
      <UpdateModel updateId={updateId} />
    </>
  );
};

export default Home;

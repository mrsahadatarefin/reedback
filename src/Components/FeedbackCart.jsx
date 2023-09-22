import { useSelector } from "react-redux";
import { BsPencilFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const FeedbackCart = ({ setUpdateId }) => {
  const carts = useSelector((state) => state.cart.cart);

  console.log(carts);

  return (
    <div>
      {carts?.map((cart, id) => (
        <div
          key={id}
          className="  mx-6 border-gray-300 border-2 rounded-lg px-10 mt-5 py-5"
        >
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-bold ">{cart.name}</h1>{" "}
            </div>

            <div className="flex ">
              <h1 className={` text-xl ${cart.evaluations.style} pr-4`}>
                {cart.evaluations.icon}
              </h1>
              <h1 className="pr-4 text-lg font-semibold">
                {cart.evaluations.name}
              </h1>

              <h1
                onClick={() => (
                  setUpdateId(cart.id),
                  document.getElementById("my_modal_4").showModal()
                )}
              >
                <BsPencilFill size={20} />
              </h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-semibold ">{cart.attribute1}</h1>
            </div>
            <div>
              <div className="flex">
                <ReactStars
                  count={5}
                  value={cart.attribute1Rating1}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-semibold ">{cart.attribute2}</h1>
            </div>
            <div>
              <div className="flex">
                <ReactStars
                  count={5}
                  value={cart.attribute1Rating2}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-semibold ">{cart.attribute3}</h1>
            </div>
            <div>
              <div className="flex">
                <ReactStars
                  count={5}
                  value={cart.attribute1Rating3}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
          <h1 className=" text-lg font-medium">{cart.feedbackNote}</h1>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCart;

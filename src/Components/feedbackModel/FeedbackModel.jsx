import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { PiShieldPlus } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { TbFileDislike } from "react-icons/tb";
import StareRate from "../StareRate";
import { useState } from "react";

const FeedbackModel = () => {
  const [rating,setRating]=useState(null)
  const [evaluations,setEvaluations]=useState(null)
  
   const evaluation = [{
     id:1,
     name:"Defintely",
     icon:<PiShieldPlus/>,
     style:'text-green-400'
   },
{
    id:2,
    name:"yes",
    icon:<AiOutlineLike/>,
    style:'text-green-400'
},
{
    id:3,
    name:"no",
    icon:<AiOutlineDislike/>,
    style:'text-red-400'
},
{
    id:4,
    name:"Not sure",
    icon:<TbFileDislike/>,
    style:'text-red-400'
},


 ]
 const attributes=[
  {
  name:'Communication Skills'
 },
  {
  name:'Cultural Fit/ Attitude'
 },
  {
  name:'Technical Skills'
 },
  {
  name:'Ability to learn'
 },
  {
  name:'java'
 },
  {
  name:'python'
 },
  {
  name:'javascript'
 },



]
   
    return (
        <>
        
 {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
 <dialog id="my_modal_3" className="modal ">
  <div className="modal-box">
    <form method="dialog">
        <h1 className="text-2xl font-bold">Share Your Feedback</h1>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5  text-orange-500 text-2xl ">✕</button>
      <div className="divider"></div>
    </form>
    <div>
        <form action="">
       <div className="flex justify-between">
        <div>
        <select className="select select-bordered w-full ">
        <option disabled selected>new Attribute</option>
        {
           attributes.map(({name,i}) => (<option key={i}>{name}</option>))
        }
      
      
       </select>
            
        </div>
        <div className="flex ">
        <div className="">
          <StareRate
           rating={rating}
            setRating={setRating}
            />
      
       </div>
       <div className="flex ">
       
        <AiOutlineMinusCircle size={20}className="text-red-500 mx-1"  />
        <AiOutlinePlusCircle size={20} className="text-green-500 " />
        
       </div>
        </div>

        
       </div>
       <div className="flex justify-between mt-5">
        <div>
        <select className="select select-bordered w-full ">
        <option disabled selected>new Attribute</option>
        {
           attributes.map(({name,i}) => (<option key={i}>{name}</option>))
        }
       </select>
            
        </div>
        <div className="flex ">
        <div className="">
          <StareRate rating={rating} setRating={setRating} />
      
       </div>
       <div className="flex ">
       
        <AiOutlineMinusCircle size={20}className="text-red-500 mx-1"  />
        <AiOutlinePlusCircle size={20} className="text-green-500 " />
        
       </div>
        </div>

        
       </div>
       <div className="flex justify-between mt-5">
        <div>
        <select className="select select-bordered w-full ">
        <option disabled selected>new Attribute</option>
        {
           attributes.map(({name,i}) => (<option key={i}>{name}</option>))
        }
       </select>
            
        </div>
        <div className="flex ">
        <div className="">
          <StareRate rating={rating} setRating={setRating} />
      
       </div>
       <div className="flex ">
       
        <AiOutlineMinusCircle size={20}className="text-red-500 mx-1"  />
        <AiOutlinePlusCircle size={20} className="text-green-500 " />
        
       </div>
        </div>

        
       </div>

       <div className="mt-10 ">
        <h1 className="font-bold text-md">Evaluation Score*</h1>
        <div className="grid grid-cols-4 gap-3 mt-5">
            {
              evaluation.map(ev=>< >
              <div className="flex " >
                <span className={`mx-2 text-md ${evaluations}`} onClick={()=>{setEvaluations(ev.style)}} >{ev.icon}</span>
                <h1 className="font-bold">{ev.name}</h1>
              </div>
              </>)  
            }

        </div>
       </div>
       <div className="mt-10 ">
        <h1 className="font-bold text-md">Share your feedback*</h1>
        <input type="text" placeholder="name" className="input input-bordered w-full mb-5 " /> 
        <textarea placeholder="Add your feedback here" name="feedback" className="textarea textarea-bordered textarea-lg w-full  " ></textarea>

       </div>
       <h1><span className="text-md font-bold">Note:</span> Feedback will be visible to al your hiring team members</h1>

        <div className="flex justify-end mt-5  ">
            <button  className="px-7 py-3 mx-5 hover:border-blue-600 hover:text-blue-600 border-orange-500 border-2 rounded-full text-orange-500 font-semibold text-md  ">cancel</button>
            <button type="submit" className="px-5 py-3 hover:bg-blue-600 bg-orange-500 rounded-full   text-white font-semibold text-md ">Submit Feedback</button>
        </div>
        </form>
    </div>
    
   </div>
  </dialog>
        </>
    );
};

export default FeedbackModel;
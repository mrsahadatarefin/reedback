

import {AiFillStar}from "react-icons/ai";
const StareRate = ({rating,setRating}) => {
    
    
    console.log()
    return (
        <div className="flex">
            {[...Array(5)].map((star,i)=>{
                const ratingValue = i+1
               
                return  <label key={i}>
                     <input value={ratingValue} type="radio" className="hidden" onClick={()=>setRating(ratingValue) } />
                     <AiFillStar
                     
                       className={`cursor-pointer ${ ratingValue <= rating?'text-yellow-400':'text-gray-400' }`} key={i} size={25}/>
                     </label> 
            })}
          
        </div>
    );
};

export default StareRate;
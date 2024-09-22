import React from "react";
import corn from "../../assets/BreakFastImages/cornflax.png";
import { Eye, Heart,MoveRight } from "lucide-react";

const BreakFastUi = () => {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-72 h-70">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src={corn} alt="card-image" />
      </div>
      <div className="p-2">
        <div className="flex mb-2">
          <div className="flex flex-col items-start">
            <h6 className="text-slate-800 text-xl font-semibold">Break Fast</h6>
            <h6 className="text-slate-600 text-l font-semibold">Cornflax</h6>
          </div>
          <div className="flex items-center gap-0 5 ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-yellow-600"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-slate-600 ml-1.5">5.0</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between m-2">
        <div className="group my-3 inline-flex  justify-center items-center gap-2">
          <button
            className="w-full flex items-center justify-center rounded-md bg-yellow-500 justify-center py-2 px-4 border border-transparent text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-yellow-600 focus:shadow-none active:bg-yellow-600 hover:bg-yellow-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
            <MoveRight className = "w-6 h-6 ml-2 " />
          </button>
         
        </div>

        <div className="group my-3 flex justify-start items-center gap-2">
          <div className="w-10 h-10 bg-yellow-500 flex justify-center items-center rounded-sm">
            <Heart className="w-6 h-6" color="white" />
          </div>
          <div className="w-10 h-10 bg-yellow-500 flex justify-center items-center rounded-sm">
            <Eye className="w-6 h-6" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakFastUi;

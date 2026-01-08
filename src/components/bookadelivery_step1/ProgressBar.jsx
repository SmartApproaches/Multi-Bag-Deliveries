import React from 'react';

const ProgressBar = ({ currentStep = 1 }) => {
  return (
    <div className="w-full mt-10">
      <div
        className="grid items-center gap-2"
        style={{ gridTemplateColumns: 'auto 1fr auto 1fr auto 1fr auto' }}
      >
        <div className="flex items-center justify-center">
          <div
            className={`w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${currentStep >= 1 ? 'bg-[#FFA62B] text-white' : 'bg-gray-200 text-gray-500'}`}
            aria-hidden
          >
            1
          </div>
        </div>

        <div className={`h-[2px] border-t-2 border-dashed ${currentStep >= 2 ? 'border-[#FFA62B]' : 'border-gray-300'}`} />

        <div className="flex items-center justify-center">
          <div
            className={`w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${currentStep >= 2 ? 'bg-[#FFA62B] text-white' : 'bg-gray-200 text-gray-500'}`}
            aria-hidden
          >
            2
          </div>
        </div>

        <div className={`h-[2px] border-t-2 border-dashed ${currentStep >= 3 ? 'border-[#FFA62B]' : 'border-gray-300'}`} />

        <div className="flex items-center justify-center">
          <div
            className={`w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${currentStep >= 3 ? 'bg-[#FFA62B] text-white' : 'bg-gray-200 text-gray-500'}`}
            aria-hidden
          >
            3
          </div>
        </div>

        <div className={`h-[2px] border-t-2 border-dashed ${currentStep >= 4 ? 'border-[#FFA62B]' : 'border-gray-300'}`} />

        <div className="flex items-center justify-center">
          <div
            className={`w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${currentStep >= 4 ? 'bg-[#FFA62B] text-white' : 'bg-gray-200 text-gray-500'}`}
            aria-hidden
          >
            4
          </div>
        </div>
      </div>

      <div
        className="grid mt-2 text-xs gap-2 text-center"
        style={{ gridTemplateColumns: 'auto 1fr auto 1fr auto 1fr auto' }}
      >
        <div className={`text-center ${currentStep >= 1 ? 'text-[#FFA62B]' : 'text-gray-400'}`}>Delivery details</div>
        <div />
        <div className={`text-center ${currentStep >= 2 ? 'text-[#FFA62B]' : 'text-gray-400'}`}>Delivery class</div>
        <div />
        <div className={`text-center ${currentStep >= 3 ? 'text-[#FFA62B]' : 'text-gray-400'}`}>Review & Confirm</div>
        <div />
        <div className={`text-center ${currentStep >= 4 ? 'text-[#FFA62B]' : 'text-gray-400'}`}>Payment</div>
      </div>
    </div>
  );
};

export default ProgressBar;

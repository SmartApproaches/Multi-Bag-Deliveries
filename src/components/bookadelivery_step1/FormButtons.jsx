import React from 'react';

const FormButtons = ({ currentStep = 1 }) => {
  return (
    <div className="mt-8 flex gap-3 flex-col md:flex-row">
      <button
        type="submit"
        className="w-full md:flex-1 py-4 bg-[#00401A] text-white rounded-full font-semibold transition duration-200 hover:bg-[#003015] active:scale-[0.98]"
      >
        {currentStep < 3 && 'Proceed'}
        {currentStep === 3 && 'Confirm & Pay'}
        {currentStep === 4 && 'Proceed with payment'}
      </button>
    </div>
  );
};

export default FormButtons;

import React, {useState} from 'react';
import "./Stepper.css"; 

const Stepper = ({steps}) => {
    const [currentStep,setCurrentStep] = useState(0);

    const handleNext = () => {
      if(currentStep < steps.length-1){
        setCurrentStep(currentStep + 1);
      }

    }
    const handleBack = () => {
      if(currentStep > 0){
        setCurrentStep(currentStep - 1);
      }
    }
   const isLastStep = currentStep === steps.length-1 ;
   const isFirstStep = currentStep === 0;
  
  return (
    <div className="stepper">
      <div className="stepper-header">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index <= currentStep ? 'active' : ''}`}
          >
            {step.label}
          </div>
        ))}
      </div>
      <div className="stepper-content">{steps[currentStep].content}</div>
      <div className="stepper-footer">
        <button onClick={handleBack} disabled={isFirstStep}>
          Back
        </button>
        <button onClick={handleNext} disabled={isLastStep}>
          {isLastStep ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default Stepper

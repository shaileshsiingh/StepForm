//Importing react and necessary components
import React, {useState} from 'react';
import Header from "../AdditionalPages/Header"
import ProgressBar from "../AdditionalPages/ProgressBar";
import Step3Image from '../../../images/step3.png';
import ContinueButton from "../AdditionalPages/Button";
import FormFour from './FourthPage';
import PreviousButton from '../AdditionalPages/PreviousButton';

export default function FormThree(){
    const [stepCompleted, setStepCompleted] = useState(false);
    const text = "Brilliant gets you hands-on to help imporve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.";

    const handleContinue = () => {
        // If the continue button is clicked then update the stepCompleted state to true
        setStepCompleted(true);
      };
    
      // Render FormFour if stepCompleted is true
      if (stepCompleted) {
        return <FormFour />;
      }

    return(
        <div className="m-8 w-5/6 mx-auto">
            <PreviousButton />
            <ProgressBar initialProgress={40}/>

            <div className="flex md:flex-row flex-col justify-evenly items-center md:mt-20 my-8 lg:ml-15 md:ml-5 ml-0">
                <img src={Step3Image} alt="Step3" className='sm:h-[20rem] h-[15rem] lg:mx-20 mx-0'/>
                
                <Header
                    h1="You're in the right place"
                    p={text}
                    className={"text-left"}
                    //Using different max width sizes for different screen break points for responsive design.
                    pClassName={"lg:max-w-[67%] md:max-w-[90%] sm:max-w-[65%] max-w-[90%] sm:ml-20"}
                    hClassName={"sm:ml-20 text-nowrap"}
                />
                
            </div>

            <ContinueButton
                activeContainer={true} // The button is set to active status
                handleContinue={handleContinue} // Handles moving to the next step
            />
            
        </div>
     
    )
}
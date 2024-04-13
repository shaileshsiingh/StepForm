//Importing react and necessary components
import React, {useState} from 'react';
import PreviousButton from '../AdditionalPages/PreviousButton';
import Header from "../AdditionalPages/Header"
import ProgressBar from "../AdditionalPages/ProgressBar";
import Step5Image from '../../../images/step5.png';
import ContinueButton from "../AdditionalPages/Button";
import YellowCircleLoader from '../AdditionalPages/Loader';
import Rate from '../../../images/rating.png';

export default function FormFive(){
    const [stepCompleted, setStepCompleted] = useState(false);
    const text = '"Through its engaging and well-strucutred courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problems solving situations."';

    const handleContinue = () => {
        // If the continue button is clicked then update the stepCompleted state to true
        setStepCompleted(true);
      };
    
      // Render FormTwo if stepCompleted is true
      if (stepCompleted) {
        return <YellowCircleLoader />;
      }

    return(
        <div className="m-8 w-5/6 mx-auto">
                <PreviousButton />
                <ProgressBar initialProgress={100}/>

                <div className="flex md:flex-row flex-col justify-evenly items-center md:mt-20 my-8 lg:ml-15 md:ml-5 ml-0">
                    <img src={Step5Image} alt="Step3" className='w-[15rem] lg:mx-10'/>
                    
                    <Header
                        h1="You're on your way!"
                        Rate={Rate}
                        Reviewer={"- Jacob S."}
                        p={text}
                        className={"text-left "}
                        //Using different max width sizes for different screen break points for responsive design.
                        pClassName={"lg:max-w-[67%] md:max-w-[90%] sm:max-w-[65%] max-w-[90%] sm:ml-20"}
                        hClassName={"sm:ml-20 text-nowrap mb-5"}
                    />
                    
                </div>

                <ContinueButton
                    activeContainer={true} // The button is set to active status
                    handleContinue={handleContinue} // Handles moving to the next step
                />

    
        </div>
     
    )
}
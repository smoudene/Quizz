import React,{useState, useEffect} from 'react'
import questions from  "./quizz"

const Home = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(true);

    const questions = 
    [
        {
            step:1,
            question : "question 1",
            choice1: "answer 1",
            choice2: "answer 2",
            choice3: "answer 3",
            choice4: "answer 4",
            right: "answer 1"
         },
          {
            step:2,
            question : "question 2",
            choice1: "answer 1",
            choice2: "answer 2",
            choice3: "answer 3",
            choice4: "answer 4",
            right: "answer 2"
         },
          {
            step:3,
            question : "question 3",
            choice1: "answer 1",
            choice2: "answer 2",
            choice3: "answer 3",
            choice4: "answer 4",
            right: "answer 3"
         },
          {
            step:4,           
            question : "question 4 ",
            choice1: "answer 1",
            choice2: "answer 2",
            choice3: "answer 3",
            choice4: "answer 4",
            right: "answer 4"
        },
      ]
      const next = (e) => {
         setIndex(step => step < questions.length -1 ? step + 1 : step)
         if(e.target.value == e.target.name){
           setScore(score + 1)
         }
        if(index == questions.length -1){
          setShow(false)
        }
      }
      const step = questions[index]
    
  return (
    <div>
    { show ?

    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        
         <h5 class="text-xl font-medium text-gray-900 dark:text-white mb-6">{step.question}</h5>
         <button type="button" class="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={step.choice1} name={step.right} onClick={e => next(e, "value", "name")}>{step.choice1}</button>
        <button type="button" class="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={step.choice2} name={step.right} onClick={e => next(e, "value")}>{step.choice2}</button>
        <button type="button" class="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={step.choice3} name={step.right} onClick={e => next(e, "value")}>{step.choice3}</button>
        <button type="button" class="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={step.choice4} name={step.right} onClick={e => next(e, "value")}>{step.choice4}</button>
    </div> :
     <div>
      <p>your score is : {score} </p>
     </div>
    }
    </div>

  )
}

export default Home
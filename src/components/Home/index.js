import React,{useState, useEffect} from 'react'
import questions from  "./quizz"
import "./style.css"

const Home = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(true);

   
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
    <div className="container grid h-screen place-items-center">
      
    { show ?

    <div className="w-96 p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        
         <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-6">{step.question}</h5>
         <button type="button" className="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={step.choice1} name={step.right} onClick={e => next(e, "value", "name")}>{step.choice1}</button>
        <button type="button" className="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={step.choice2} name={step.right} onClick={e => next(e, "value")}>{step.choice2}</button>
        <button type="button" className="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={step.choice3} name={step.right} onClick={e => next(e, "value")}>{step.choice3}</button>
        <button type="button" className="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={step.choice4} name={step.right} onClick={e => next(e, "value")}>{step.choice4}</button>
    </div> :
    <div className=" grid w-96 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 place-items-center">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{score >= questions.length / 2 ? "You did it congratulations ,  " : "Oops..."}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">your score is : {score} / {questions.length}</p>
    <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Play Again 
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
    }
    </div>

  )
}

export default Home
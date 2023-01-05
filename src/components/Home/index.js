import React,{useState, useEffect} from 'react'
import questions from  "./quizz"
import FetchAPI from '../API/fetchAPI'
import "./style.css"
import axios from "axios"

const Home = () => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(true);
  const [dataAPI,setDataAPI] = useState({})
  
    const requestAPI = async () => {
      try {
        const res = await axios.get("http://localhost/Zaim/rest/v1/question");
        setDataAPI(res?.data);
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {  
      requestAPI();
    }, [])

   console.log(dataAPI)
   console.log(dataAPI.length)

      const next = (e) => {
          setCount(count + 1);
         if(e.target.value == e.target.name){
           setScore(score + 1)
         }
        if(count == dataAPI.length){
          setShow(false)
        }
      }
      const handlereset = () => {
          setCount(0)
          setScore(0)
      }
       
  return (
    <div className="container grid h-screen place-items-center">
      
    { show ?

    <div className="w-96 p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        
         <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-6">{dataAPI[count]?.field_question}</h5>
         <button type="button" className="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={dataAPI[count].field_choice1} name={dataAPI[count]?.field_right_answer} onClick={e => next(e, "value", "name")}>{dataAPI[count].field_choice1}</button>
        <button type="button" className="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={dataAPI[count].field_choice2} name={dataAPI[count]?.field_right_answer} onClick={e => next(e, "value")}>{dataAPI[count].field_choice2}</button>
        <button type="button" className="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={dataAPI[count].field_choice3} name={dataAPI[count]?.field_right_answer} onClick={e => next(e, "value")}>{dataAPI[count].field_choice3}</button>
        <button type="button" className="w-full text-white bg-gray-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center" value={dataAPI[count].field_choice4} name={dataAPI[count]?.field_right_answer} onClick={e => next(e, "value")}>{dataAPI[count].field_choice4}</button>
    </div> :
    <div className=" grid w-96 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 place-items-center">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{score >= dataAPI.length / 2 ? "You did it congratulations ,  " : "Oops..."}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">your score is : {score} / {dataAPI.length}</p>
    <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handlereset()}>
        Play Again 
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
    }
    </div>

  )
}

export default Home
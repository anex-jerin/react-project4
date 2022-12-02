import React from 'react'
import Quiz from './Quiz'
const Questions = ({data}) => {
  return (
    <div className='quiz'>
      <div className="left">
        <h1>Questions and answers javaScript</h1>
      </div>
      <div className="right">
       {data.map((quiz)=>{
        return <Quiz key={quiz.id} {...quiz}/>  
       })}   
      </div>
    </div>
  )
}

export default Questions
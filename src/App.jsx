import  { useState } from 'react';

function App() {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Munich', 'Frankfurt','Berlin', 'Hamburg'],
      correct: 'Berlin',
    },
    {
      question: 'What is the capital of Italy?',
      options: [ 'Milan', 'Venice','Rome', 'Florence'],
      correct: 'Rome',
    },
    {
      question: 'What is the capital of Spain?',
      options: [ 'Barcelona','Madrid', 'Valencia', 'Seville'],
      correct: 'Madrid',
    },
    {
      question: 'What is the capital of the United States?',
      options: [ 'New York City', 'Los Angeles','Washington D.C.', 'Chicago'],
      correct: 'Washington D.C.',
    },
    {
      question: 'What is the capital of Canada?',
      options: [ 'Toronto', 'Montreal','Ottawa', 'Vancouver'],
      correct: 'Ottawa',
    },
    {
      question: 'What is the capital of Australia?',
      options: [ 'Melbourne','Sydney', 'Brisbane', 'Perth'],
      correct: 'Sydney',
    },
    {
      question: 'What is the capital of Japan?',
      options: [ 'Osaka', 'Nagoya','Tokyo', 'Kyoto'],
      correct: 'Tokyo',
    },
    {
      question: 'What is the capital of China?',
      options: [ 'Shanghai','Beijing', 'Guangzhou', 'Shenzhen'],
      correct: 'Beijing',
    },
    {
      question: 'What is the capital of Brazil?',
      options: [ 'Sao Paulo', 'Rio de Janeiro','Brasilia', 'Recife'],
      correct: 'Brasilia',
    },
    {
      question: 'What is the capital of Argentina?',
      options: [ 'Rosario','Buenos Aires', 'La Plata', 'Mendoza'],
      correct: 'Buenos Aires',
    },
    {
      question: 'What is the capital of Russia?',
      options: [ 'Saint Petersburg', 'Kazan', 'Yekaterinburg','Moscow'],
      correct: 'Moscow',
    },
    {
      question: 'What is the capital of India?',
      options: [ 'Kolkata','New Delhi', 'Mumbai', 'Chennai'],
      correct: 'New Delhi',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }

if (currentQuestionIndex < questions.length - 1) {
  setCurrentQuestionIndex(currentQuestionIndex + 1);
} else {
  setIsQuizComplete(true);
}
  };

  if (isQuizComplete) {
    return <div style={{ padding: '10px', margin:"auto", textAlign: 'center', width: "85vw"}}>
      <h2 style={{ marginLeft:"20px", width: "85vw"}}>You scored {score} out of {questions.length}</h2>
      <button style={{ padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', marginLeft:"30px" }} onClick={() => setIsQuizComplete(false)}>Start Again</button>
    </div>;
  }

  return (
    <div style={{ padding: '20px', margin:"auto"}}>
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <div style={{ marginBottom: '10px', width:"85vw", display:"flex", justifyContent:"space-between", paddingBlock: "14px", paddingInline:"10px" ,textAlign: 'center', backgroundColor: selectedOption === option ? '#4caf50' : 'black', borderRadius:"10px" }} key={index}>
          <input style={{ width: '20px'}}
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          {option}
        </div>
      ))}
      <button style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px' }} onClick={handleSubmit}>Submit</button>
      {feedback && <p className='center' style={{ marginTop: '10px', color: feedback === 'Correct!' ? 'green' : 'red', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>{feedback}</p>}
    </div>
  );
}

export default App;
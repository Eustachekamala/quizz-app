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
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
    {
      question: 'What is the capital of Italy?',
      options: ['Rome', 'Milan', 'Venice', 'Florence'],
      correct: 'Rome',
    },
    {
      question: 'What is the capital of Spain?',
      options: ['Madrid', 'Barcelona', 'Valencia', 'Seville'],
      correct: 'Madrid',
    },
    {
      question: 'What is the capital of the United States?',
      options: ['Washington D.C.', 'New York City', 'Los Angeles', 'Chicago'],
      correct: 'Washington D.C.',
    },
    {
      question: 'What is the capital of Canada?',
      options: ['Ottawa', 'Toronto', 'Montreal', 'Vancouver'],
      correct: 'Ottawa',
    },
    {
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
      correct: 'Sydney',
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Tokyo', 'Osaka', 'Nagoya', 'Kyoto'],
      correct: 'Tokyo',
    },
    {
      question: 'What is the capital of China?',
      options: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'],
      correct: 'Beijing',
    },
    {
      question: 'What is the capital of Brazil?',
      options: ['Brasilia', 'Sao Paulo', 'Rio de Janeiro', 'Recife'],
      correct: 'Brasilia',
    },
    {
      question: 'What is the capital of Argentina?',
      options: ['Buenos Aires', 'Rosario', 'La Plata', 'Córdoba'],
      correct: 'Buenos Aires',
    },
    {
      question: 'What is the capital of Russia?',
      options: ['Moscow', 'Saint Petersburg', 'Kazan', 'Yekaterinburg'],
      correct: 'Moscow',
    },
    {
      question: 'What is the capital of India?',
      options: ['New Delhi', 'Kolkata', 'Mumbai', 'Chennai'],
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
    return <div style={{ padding: '10px', margin:"auto", textAlign: 'center', width: "100vw"}}>
      <h2>You scored {score} out of {questions.length}</h2>
      <button style={{ padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px' }} onClick={() => setIsQuizComplete(false)}>Restart</button>
    </div>;
  }

  return (
    <div style={{ padding: '20px', margin:"auto"}}>
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <div style={{ marginBottom: '10px', width:"85vw", display:"flex", justifyContent:"space-between", paddingBlock: "8px", paddingInline:"10px" ,textAlign: 'center', backgroundColor: index === 0 ? '#f1c40f' : '#e74c3c', color: 'white', padding: '10px', borderRadius: '5px' }} key={index}>
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
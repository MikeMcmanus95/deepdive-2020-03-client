import React from 'react';
import axios from 'axios';

const AllQuestions = () => {
  // state in our functional component, with React hooks
  const [questions, setQuestions] = React.useState([]);

  const getQuestions = async () => {
    const { data } = await axios.get("/api/questions");
    setQuestions(data);
  }

  React.useEffect(() => {
    getQuestions();
  }, []);
  console.log('questions >>>', questions);

  return (
    <div>
      <h2>Questions</h2>
      <div>
        {questions.map(question =>
          <div key={question.id}>
            <div>
              {question.body} {question.id}
            </div>
            <div>
              {question.instructions}
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default AllQuestions;

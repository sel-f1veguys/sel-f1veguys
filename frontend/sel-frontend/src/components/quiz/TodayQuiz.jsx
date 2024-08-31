import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TodayQuiz.module.css';

const TodayQuiz = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchNextQuestion = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/quiz/today'); 
      setQuestion(response.data.question);
      setQuestion("1+1 = 2이다");
    } catch (error) {
      console.error('Failed to fetch the quiz question', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setQuestion("1+1 = 2이다");
    fetchNextQuestion(); 
  }, []);

  const handleAnswer = async (answer) => {
    try {
      const response = await axios.post('/api/quiz/answer', { answer }); // 정답 제출 API 경로를 맞춰주세요
      fetchNextQuestion(); // 다음 문제를 가져옴
    } catch (error) {
      console.error('Failed to submit the answer', error);
    }
  };

  return (
    <div className={styles.quizContainer}>
      <header className={styles.nav}>오늘의 퀴즈</header>
      <div className={styles.quizBox}>
        {/* {loading ? ( */}
        {true ? (
          <p className={styles.loading}>Loading...</p>
        ) : (
          <div className={styles.questionBox}>
            <p className={styles.question}>{question}</p>
            <div className={styles.buttonContainer}>
              <button className={styles.answerButton} onClick={() => handleAnswer('O')}>O</button>
              <button className={styles.answerButton} onClick={() => handleAnswer('X')}>X</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayQuiz;

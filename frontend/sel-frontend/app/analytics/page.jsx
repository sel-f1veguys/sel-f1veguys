"use client";

import React, { useState } from "react";

const Analytics = () => {
  const [todoItems, setTodoItems] = useState([
    { id: 1, text: "적립대상 1", completed: false },
    { id: 2, text: "적립대상 2", completed: false },
    { id: 3, text: "적립대상 3", completed: false },
    { id: 4, text: "적립대상 4", completed: false },
    { id: 5, text: "적립대상 5", completed: false },
    { id: 6, text: "적립대상 6", completed: false },
    { id: 7, text: "적립대상 7", completed: false },
  ]);

  const toggleTodo = (id) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div style={styles.background}>
      <div style={styles.monthgraph}>{/* 월별 소비를 표시하는 부분 */}</div>

      <div style={styles.Main}>
        <div style={styles.MonthButtonSection}>
          <button style={styles.MonthButton}>일간</button>
          <button style={styles.MonthButton}>주간</button>
          <button style={styles.MonthButton}>월간</button>
        </div>

        <div style={styles.subgraphSection}>
          <div style={styles.subgraph1}>
            <div style={styles.centerContent}>발걸음 수</div>
          </div>
          <div style={styles.subgraph1}>
            <div style={styles.centerContent}>내 에코 소비 비율</div>
          </div>
        </div>

        <div style={styles.compare}>
          <div style={styles.compareGraph}>
            <div style={styles.centerContent}>또래보다</div>
          </div>
          <div style={styles.compareGraph}>
            <div style={styles.centerContent}>내 이전보다</div>
          </div>
        </div>

        <div style={styles.payment}>
          <div style={styles.paymentGraph}>
            <div style={styles.centerContent}>기부총액</div>
          </div>
          <div style={styles.paymentGraph}>
            <div style={styles.centerContent}>내가 절약한 금액</div>
          </div>
        </div>

        <div style={styles.pointEarning}>
          <div style={styles.pointEarningHeader}>
            <h3 style={styles.pointEarningtitle}>포인트 적립하기</h3>
            <button style={styles.pointEarningDetail}>New Task</button>
          </div>
          <div style={styles.pointEarningList}>
            {todoItems.map((item) => (
              <div key={item.id} style={styles.pointEarningItem}>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTodo(item.id)}
                />
                <div style={styles.insideOfItem}>
                  <label style={styles.itemText}>{item.text}</label>
                  <button style={styles.detButton}>Det</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    display: "flex",
    flexDirection: "column", // Align vertically
    alignItems: "center", // Align horizontally
    position: "relative",
    width: "390px",
    height: "844px",
    background: "linear-gradient(to bottom, blue 200px, #F4F7FE 200px)",
  },

  monthgraph: {
    // Placeholder for chart.js integration
  },

  Main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    width: "90%",
    marginTop: "210px", // Maintain the 200px gap for the gradient
  },

  MonthButtonSection: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px", // Add margin for spacing
  },

  MonthButton: {
    width: "100%", // Ensure buttons fill the width evenly
  },

  subgraphSection: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px", // Ensure consistent spacing between sections
  },

  subgraph1: {
    width: "47%",
    height: "150px",
    border: "2px solid",
    borderRadius: "10px",
    display: "flex", // Flexbox for centering content
    justifyContent: "center",
    alignItems: "center",
  },

  compare: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px", // Ensure consistent spacing between sections
  },

  compareGraph: {
    width: "47%",
    height: "70px",
    border: "2px solid",
    borderRadius: "10px",
    display: "flex", // Flexbox for centering content
    justifyContent: "center",
    alignItems: "center",
  },

  payment: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px", // Ensure consistent spacing between sections
  },

  paymentGraph: {
    width: "47%",
    height: "70px",
    border: "2px solid",
    borderRadius: "10px",
    display: "flex", // Flexbox for centering content
    justifyContent: "center",
    alignItems: "center",
  },

  pointEarning: {
    width: "100%",
  },

  pointEarningHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  pointEarningtitle: {
    margin: 0,
    textAlign: "left", // Align title to the left
  },

  pointEarningDetail: {
    padding: "5px 10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  pointEarningList: {
    paddingTop: "10px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
  },

  pointEarningItem: {
    margin: "10px 20px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },

  insideOfItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%", // Full width of the container
    marginLeft: "15px", // Space between checkbox and text
  },

  itemText: {
    flexGrow: 1, // Makes the text take up remaining space
  },

  centerContent: {
    textAlign: "center",
  },

  detButton: {
    padding: "5px 10px",
    backgroundColor: "#FF5733",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px", // Space between text and Det button
  },
};

export default Analytics;

import React, { useState } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CheckCircle, ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Import Material-UI Icons for Expand
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; // Import the Collapse Icon

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [todoItems, setTodoItems] = useState([
    { id: 1, text: "영수증 인증하기(100p)", completed: false },
    { id: 2, text: "6000보 걷기(100p)", completed: false },
    { id: 3, text: "친환경 캠페인 참여하기", completed: false },
    { id: 4, text: "친환경 퀴즈 참여하기", completed: false },
    { id: 5, text: "친환경 기부하기", completed: false },
    { id: 6, text: "적립대상 6", completed: false },
    { id: 7, text: "적립대상 7", completed: false },
  ]);

  const [showSavedCostList, setShowSavedCostList] = useState(false);

  const toggleTodo = (id) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const toggleSavedCostList = () => {
    setShowSavedCostList(!showSavedCostList);
  };

  // Data for Line Chart (7 days consumption)
  const lineChartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Last 7 Days Consumption",
        data: [30, 45, 60, 50, 70, 90, 100], // Example data
        borderColor: "blue",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4, // Smoother line
      },
    ],
  };

  // Data for Bar Chart (Footsteps)
  const barChartData = {
    labels: ["월", "화", "수", "목", "금"], // Reduced to 5 days
    datasets: [
      {
        label: "Footsteps",
        data: [3000, 5000, 7000, 6000, 8000], // Example data reduced to 5 days
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: 10, // Make bars thinner like sticks
      },
    ],
  };

  // Data for Doughnut Chart (Eco vs Normal Consumption)
  const doughnutChartData = {
    labels: ["Eco", "Normal"],
    datasets: [
      {
        label: "Eco vs Normal Consumption",
        data: [60, 40], // Example data
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverOffset: 4,
      },
    ],
  };

  // Options for Line Chart (Hide All Axes and Grid Lines)
  const lineChartOptions = {
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    elements: {
      point: {
        radius: 0, // Hide points on the line
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Options for Bar Chart (Hide Y Axis, Keep Small X Axis Labels)
  const barChartOptions = {
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          color: "black", // Color for x-axis labels
          font: {
            size: 12, // Smaller font for x-axis labels
          },
        },
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Options for Doughnut (원 그래프 옵션)
  const doughnutChartOptions = {
    plugins: {
      legend: {
        display: false, // Hide the legend from above
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={styles.fullWidthBackground}>
      <div style={styles.background}>
        <div style={styles.monthgraph}>
          <h4 style={styles.topLeftText}>오늘의 소비 : $100</h4>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>

        <div style={styles.Main}>
          <div style={styles.MonthButtonSection}>
            <button style={styles.MonthButton}>일간</button>
            <button style={styles.MonthButton}>주간</button>
            <button style={styles.MonthButton}>월간</button>
          </div>

          <div style={styles.subgraphSection}>
            <div style={styles.subgraph1}>
              <h4 style={styles.topLeftText}>6787 걸음</h4>
              <Bar data={barChartData} options={barChartOptions} />
            </div>
            <div style={styles.subgraph1}>
              <h4 style={styles.topLeftText}>내 에코 소비 비율</h4>
              <Doughnut
                data={doughnutChartData}
                options={doughnutChartOptions}
              />
              <div style={styles.doughnutLegend}>
                <div>
                  <span style={styles.ecoBox}></span> 에코
                </div>
                <div>
                  <span style={styles.normalBox}></span> 일반
                </div>
              </div>
            </div>
          </div>

          {/* Compare Section */}
          <div style={styles.compare}>
            <div style={styles.compareGraph}>
              <div style={styles.iconCircle}>
                <CheckCircle style={{ color: "#4CAF50", fontSize: "32px" }} />
              </div>
              <div style={styles.textSection}>
                <p style={styles.transparentText}>또래보다 친환경적이에요.</p>
                <p style={styles.boldText}>
                  <span style={styles.greenText}>+21</span> 건의 친환경 소비
                </p>
              </div>
            </div>
            <div style={styles.compareGraph}>
              <div style={styles.iconCircle}>
                <ArrowDownward style={{ color: "#FF5733", fontSize: "32px" }} />
              </div>
              <div style={styles.textSection}>
                <p style={styles.transparentText}>지난 달보다 줄었어요.</p>
                <p style={styles.boldText}>
                  <span style={styles.redText}>-5</span> 건 전달 대비
                </p>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div style={styles.payment}>
            {/* Donation Total */}
            <div style={styles.paymentGraph}>
              <div style={styles.donateText}>
                <div>
                  <p style={styles.transparentText}>기부포인트 총액</p>
                  <p style={styles.boldBigText}>1200p 기부</p>
                  <p style={styles.greenText}>+23% 지난 주 대비</p>
                </div>
              </div>
            </div>

            {/* Saved Environmental Cost */}
            <div style={styles.paymentGraph}>
              <div style={styles.saveTheEarth}>
                <div style={styles.savingText}>
                  <p style={styles.transparentText}>절약한 환경 비용</p>
                  <p style={styles.boldBigText}>2,390만원</p>
                </div>
                <img
                  src="/assets/icon/tree.png"
                  alt="Tree Icon"
                  style={styles.treeIcon}
                />
                <IconButton
                  onClick={toggleSavedCostList}
                  style={styles.expandButton}
                >
                  {showSavedCostList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </div>
              {/* Toggle List */}
              <ul
                style={{
                  ...styles.savedCostList,
                  ...(showSavedCostList ? styles.savedCostListOpen : {}),
                }}
              >
                <li>절약한 물 사용량: 120L</li>
                <li>절약한 전기 사용량: 100kWh</li>
                <li>절약한 CO2 배출량: 30kg</li>
              </ul>
            </div>
          </div>

          <div style={styles.pointEarning}>
            <div style={styles.pointEarningHeader}>
              <h3 style={styles.pointEarningtitle}>포인트 적립하기</h3>
              <button style={styles.pointEarningDetail}>:</button>
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
                    <button style={styles.detButton}>참여하기</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  fullWidthBackground: {
    width: "100%",
    background: `linear-gradient(to bottom, #0046ff 200px, #F4F7FE 200px)`,
    display: "flex",
    justifyContent: "center",
  },
  background: {
    alignItems: "center", // Align horizontally
    display: "flex",
    flexDirection: "column", // Align vertically
    position: "relative",
    width: "390px",
    height: "844px",
  },

  monthgraph: {
    width: "95%",
    backgroundColor: "white",
    position: "relative",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginTop: "50px",
    height: "140px",
  },

  Main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    width: "90%",
    marginTop: "25px",
  },

  topLeftText: {
    position: "absolute",
    top: "10px",
    left: "20px",
    fontSize: "14px",
    fontWeight: "bold",
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
    height: "160px",
    backgroundColor: "white",
    borderRadius: "10px",
    position: "relative",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    width: "35%",
  },

  doughnutLegend: {
    position: "absolute",
    bottom: "10px",
    left: "20px",
    right: "20px",
    display: "flex",
    justifyContent: "space-between",
  },

  ecoBox: {
    width: "15px",
    height: "15px",
    backgroundColor: "#36A2EB",
    display: "inline-block",
    marginRight: "5px",
  },

  normalBox: {
    width: "15px",
    height: "15px",
    backgroundColor: "#FF6384",
    display: "inline-block",
    marginRight: "5px",
  },

  compare: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px", // Ensure consistent spacing between sections
  },

  compareGraph: {
    width: "41%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  iconCircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    backgroundColor: "#E0E0E0",
    marginRight: "10px",
  },

  textSection: {
    display: "flex",
    flexDirection: "column",
  },

  transparentText: {
    fontSize: "8px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.4)", // 60% transparency
    margin: "0",
  },

  boldText: {
    margin: "0",
    fontSize: "10px",
    fontWeight: "bold",
  },

  boldBigText: {
    margin: "0",
    fontSize: "14px",
    fontWeight: "bold",
  },

  greenText: {
    color: "#4CAF50", // Green for positive numbers
    fontSize: "10px",
    margin: "0",
  },

  redText: {
    color: "#FF5733", // Red for negative numbers
    fontSize: "10px",
  },

  payment: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px", // Ensure consistent spacing between sections
  },

  paymentGraph: {
    width: "41%",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    padding: "10px",
  },

  donateText: {
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginLeft: "10px",
  },

  savingText: {},

  saveTheEarth: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginLeft: "10px",
  },

  treeIcon: {
    margin: "0 0 0 0px",
    width: "30px",
    height: "30px",
  },

  expandButton: {
    margin: "0 10px 0 0",
    padding: "0",
  },

  savedCostList: {
    listStyleType: "none",
    paddingLeft: "10px",
    marginTop: "10px",
    fontSize: "12px",
    position: "absolute",
    top: "100%", // Position it just below the button
    left: "10px",
    right: "10px",
    zIndex: 10, // Ensure it appears on top
    backgroundColor: "white", // Ensure background is visible
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    transition: "max-height 0.3s ease, opacity 0.3s ease", // Smooth expand/collapse and fade-in
    overflow: "hidden",
    maxHeight: "0", // Start with height 0
    opacity: 0, // Start fully invisible
    visibility: "hidden", // Hide it from the document flow
  },

  savedCostListOpen: {
    maxHeight: "200px", // Maximum height when open (adjust as needed)
    opacity: 1, // Fully visible
    visibility: "visible", // Make it visible in the document flow
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

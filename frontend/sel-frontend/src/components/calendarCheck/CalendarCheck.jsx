import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import styles from "./CalendarCheck.module.css"; // Import the module CSS

// Dummy data that simulates REST API response
const attendanceData = {
  attendance: [1, 2, 5, 14, 20, 23],
  todayCheck: false,
};

export default function CalendarComponent() {
  const [dateState, setDateState] = useState(new Date());
  const [attendance, setAttendance] = useState([]);
  const [todayCheck, setTodayCheck] = useState(false);

  // Load attendance data
  useEffect(() => {
    setAttendance(attendanceData.attendance);
    setTodayCheck(attendanceData.todayCheck);
  }, []);

  const handleAttendance = () => {
    const today = moment().date();
    if (!attendance.includes(today)) {
      setAttendance([...attendance, today]);
      setTodayCheck(true);
      // Here, you can also make an API call to send the updated attendance
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const day = date.getDate();
      if (attendance.includes(day)) {
        return styles.attended; // Apply the scoped attended class
      }
      if (day === new Date().getDate() && todayCheck) {
        return styles.today; // Highlight today's date
      }
    }
  };

  // Custom function to render only the month (without year) in the header
  const renderCustomHeader = () => {
    const month = moment(dateState).format("M월"); // Format month as '8월', '9월', etc.
    return <div className={styles.monthHeader}>{month}</div>;
  };

  return (
    <div className={styles.container}>
      <p className={styles.dateText}>
        Current selected date is{" "}
        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
      </p>
      <Calendar
        value={dateState}
        minDetail="month"
        maxDetail="month"
        tileClassName={tileClassName}
        formatDay={(locale, date) => moment(date).format("D")} // Show day number without "일"
        className={styles.calendar}
        prevLabel={null} // Remove previous button
        nextLabel={null} // Remove next button
        showNavigation={false}
        showNeighboringMonth={false} // Hide neighboring month's dates
        navigationLabel={renderCustomHeader} // Use the custom header
        onClickMonth={null} // Disable month clicking
      />
      <button
        className={styles.attendanceButton}
        onClick={handleAttendance}
        disabled={todayCheck}
      >
        {todayCheck
          ? "You Have Checked Attendance Today"
          : "Mark Today’s Attendance"}
      </button>
    </div>
  );
}

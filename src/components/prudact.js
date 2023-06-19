import React from "react";
import "../components/prudact.css";

function Myprudact() {
  const list = [
    {
      id: 1,
      courseName: "Introduction to Python",
      coursePrice: 49.99,
    },
    {
      id: 2,
      courseName: "JavaScript Fundamentals",
      coursePrice: 59.99,
    },
    {
      id: 3,
      courseName: "PHP",
      coursePrice: 21.33,
    },
  ];
  const CourseMap = list.map((course) => (
    <div>
      <p id="course-name"> {course.courseName}</p>
      <p id="course-price">{course.coursePrice}</p>
      {/* <b id="price"> {course.coursePrice}</b> */}
    </div>
  ));
  // const mapList = list.map((elemm) => elemm.courseName);
  // const mapListPrice = list.map((elemm) => elemm.coursePrice);
  // const coursName = mapList.map((nameo, index) => nameo);
  return (
    <div className="main_countaner">
      {CourseMap.map((name_Of_index, index) => (
        <div key={index}>
          <p>{name_Of_index}</p>
        </div>
      ))}
    </div>
  );
}

export default Myprudact;

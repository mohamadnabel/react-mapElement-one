function App() {
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
  const mapList = list.map((elemm) => elemm.courseName);
  const mapListPrice = list.map((elemm) => elemm.coursePrice);

  console.log(mapList);
  return (
    <div className="App">
      {mapList.map((name, index) => (
        <div key={index}>
          <h1>{name}</h1>

          {mapListPrice.map((price, index) => (
            <div key={index}>
              <h1>{price}</h1>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;

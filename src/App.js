// import Myprudact from "../src/components/prudact";
import Myitem from "./components/item";
function App() {
  const myListProdact = [
    {
      title: "Pepsi",
      color: "green",
      price: "1 JD",
      image:
        "https://th.bing.com/th/id/OIP.3-Nm7e9rl1OI9AInnOkBVAHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "7up",
      color: "orange",
      price: "1.5 JD",
      image:
        "https://th.bing.com/th/id/OIP.75EfL93PPfmj2E-H8YNo3gHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "RedBull",
      color: "Gray",
      price: "2.5JD",
      image:
        "https://th.bing.com/th/id/OIP.QsTtjxy0LqP_tk0yj_UZLgHaHa?pid=ImgDet&rs=1",
    },
  ];
  return (
    <div className="paerant-main">
      <Myitem
        title={myListProdact[0].title}
        price={myListProdact[0].price}
        color={myListProdact[0].color}
        image={myListProdact[0].image}
      />
      <Myitem
        title={myListProdact[1].title}
        price={myListProdact[1].price}
        color={myListProdact[1].color}
        image={myListProdact[1].image}
      />
      <Myitem
        title={myListProdact[2].title}
        price={myListProdact[2].price}
        color={myListProdact[2].color}
        image={myListProdact[2].image}
      />
    </div>
  );
}

export default App;

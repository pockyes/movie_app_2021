import React from 'react';

function Food({name, picture}) {
  return <div>
    <h2>{name} is good</h2>
    <img src={picture} />
    </div>
}

let foodLike = [
  {
  name: "kimchi",
  Image: "https://img.kr.news.samsung.com/kr/wp-content/uploads/2017/12/2-11.png"
},
{
  name: "ramen",
  Image: "https://i.pinimg.com/736x/1d/74/7b/1d747b37131d89619b4899533eac0f7b.jpg"
}, 
{
  name: "rice",
  Image: "https://image.shutterstock.com/image-vector/bowl-rice-260nw-416257243.jpg"
}, 
{
  name: "salad",
  Image: "https://img.pikbest.com/png-images/qiantu/hand-drawn-original-cartoon-food-western-food-vegetable-salad_2580353.png!bw800"
}, 
{
  name: "potato",
  Image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201412/11/htm_2014121113444320102011.jpg"
}
];

function App() {
  return (
  <div>
    {foodLike.map(dish => (
      <Food name={dish.name} picture={dish.Image} />
    ))}
  </div>
  );
}

export default App;

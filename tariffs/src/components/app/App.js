import '../../style/app.css';
import Rate from '../Rate/Rate.jsx';

const tariffs = [{
  price: "300",
  speed: "10",
  header: "blue-header",
  section: "blue-section",
  id: 1
}, {
  price: "450",
  speed: "50",
  header: "green-header",
  section: "green-section",
  id: 2
}, {
  price: "550",
  speed: "100",
  header: "red-header",
  section: "red-section",
  id: 3,
  isSelected: true
}, {
  price: "1000",
  speed: "200",
  header: "black-header",
  section: "black-section",
  id: 4
}];

function App() {

  return ( 
  <div className = "App" > {
      tariffs.map((rate) =>
        <Rate price = {rate.price} speed = {rate.speed} classHeader = {rate.header} classSection = {rate.section} isSelected={rate.isSelected} key = {rate.id}/>
      )} 
      </div>
  );
}

export default App;
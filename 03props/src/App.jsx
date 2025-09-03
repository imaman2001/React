
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 p-2 rounded">Tailwind and Props</h1>
      {/* <Card username="aman" fashion="Trend" btnText="Click me!" />
      <Card username="kajal" fashion="Designer" btnText="Visit here!" /> */}
      <Card username='Trending' btnTxt='Click me!' />
      <Card username='Classic' btnTxt='View !' />

    </>
  );
}

export default App;

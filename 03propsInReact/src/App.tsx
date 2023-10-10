import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-slate-900 mb-4 text-3xl font-serif text-center py-4 rounded-xl ">
        TailWind and Props
      </h1>
      <div className=" flex space-x-10">
        <Card username="OfclJaved" btnText="Find me" />
        <Card username="Javed" />
      </div>
    </>
  );
}

export default App;

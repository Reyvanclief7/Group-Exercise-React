const App = () => {
  const hello = "Hello World";
  return (
    <>
      <h1>{hello}</h1>;
      <h1>Hello World</h1>;
      <Hello />
      <Hello />
    </>
  );
};

const Hello = () => {
  return (
    <>
    <h3>Component Hello</h3>
    <World />
    </>
  )
}

const World = () => {
  return <h3>Component World</h3>
}
export default App;

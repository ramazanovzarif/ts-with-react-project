import Heading from "./components/Heading";
import Counter from "./components/Counter";
import List from "./components/List";

import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"count app"} />
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["water", "coffee", "tea"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;

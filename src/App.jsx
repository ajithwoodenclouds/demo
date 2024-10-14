import { useState } from "react";

import MainRouter from "./router/router/MainRouter";

function App() {
  const [count, setCount] = useState(288);

  return (
    <div>
      <MainRouter />
    </div>
  );
}

export default App;

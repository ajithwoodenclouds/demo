import { useState } from "react";

import Login from "./screens/auth/Login";
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

import { useState } from "react";

import MainRouter from "./router/router/MainRouter";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(288);

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <MainRouter />
    </div>
  );
}

export default App;

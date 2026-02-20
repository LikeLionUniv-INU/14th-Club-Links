import MainPage from "./pages/Mainpage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <MainPage />
      <Analytics />
    </>
  );
}

export default App;

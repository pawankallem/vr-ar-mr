import react, {useState, useEffect} from "react";
import { Page1 } from "./components/page1/Page1";
import { Page2 } from "./components/page2/Page2";
import "./styles.css";

export default function App() {
  const [page,setPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setPage(2);
    },8200)
  })
  return (
    <div className="App">
      {
        page === 1 ? <Page1/> : <Page2/>
      }
      {/* <Page1 /> */}
      {/* <Page2 /> */}
    </div>
  );
}

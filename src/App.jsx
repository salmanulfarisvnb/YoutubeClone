import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Video from "./pages/Video";

function App() {
  return (
    <>
      <h1>helooo</h1>
      <Router basename="/YoutubeClone">
        <Switch>
          <Route path="./pages/Video.jsx" element={<Video />} />
          {/* Add other routes here */}
        </Switch>
      </Router>
    </>
  );
}

export default App;

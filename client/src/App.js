import Header from "./components/headers/Header";
import Home from "./components/Home/Home";
import { Box } from "@mui/material";
import Dataprovider from "./context/Dataprovider";

function App() {
  return (
    <Dataprovider>
      <Header />
      <Box style={{ margin: 54 }}>
        <Home />
      </Box>
    </Dataprovider>
  );
}

export default App;

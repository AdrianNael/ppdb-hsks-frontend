import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page1 from "./Components/Pages/Page-1/body";
import LoginPage from "./Components/Pages/Page-2/Body2";
import Form from "./Components/Pages/Page-3/Body3";
import Survei from "./Components/Pages/Page-4/Page4";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Cpd from "./Components/Pages/Page-5/Page5";
import Langkah1 from "./Components/Pages/Page-6-Langkah1/body";
import Langkah2 from "./Components/Pages/Page-7/body";
import Langkah3 from "./Components/Pages/Page-8-Langkah3/body";
import Langkah4 from "./Components/Pages/Page-9/bodybackup";
import Langkah5 from "./Components/Pages/Page-10-Langkah5/Body";
import Langkah6 from "./Components/Pages/Page-11-Langkah6/Body";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new   QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/login" component={LoginPage} />
        <Route path="/form" component={Form} />
        <Route path="/survei" component={Survei} />
        <Route path="/datacalonsiswa" component={Cpd} />
        <Route path="/Langkah1" component={Langkah1} />
        <Route path="/langkah2" component={Langkah2} />
        <Route path="/langkah3" component={Langkah3} />
        <Route path="/langkah4" component={Langkah4} />
        <Route path="/langkah5" component={Langkah5} />
        <Route path="/langkah6" component={Langkah6} />
      </Switch>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

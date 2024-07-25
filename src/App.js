import {BrowserRouter,Routes,Route} from "react";
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Onboard/>}/>
                <Route path="/products"element={<CardList/>}></Route>


            </Routes>
        </BrowserRouter>
    );
}
export default App;
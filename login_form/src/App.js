import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import HomeComponent from "./component/HomeComponent";
import StudentList from "./component/StudentList";
import AddComponent from "./component/AddComponent";
import LoginComponent from "./component/LoginComponent";

function App() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route path={"/home"} element={<HomeComponent />}></Route>
				<Route path={"/students_list"} element={<StudentList />}></Route>
				<Route path={"/students_list/add_students"} element={<AddComponent />}></Route>
				<Route path={"/login"} element={<LoginComponent />}></Route>
			</Routes>
			<FooterComponent />
		</>
	);
}

export default App;

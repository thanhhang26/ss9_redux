import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentItem from "./StudentItem";
import { getAddressStudent } from "../service/addressService";
import { getAllInformationStudent } from "../service/informationService";

function StudentList() {
	const [studentList, setStudentList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const list = await getAllInformationStudent();
			const addressList = await getAddressStudent();
			// Kết hợp thông tin sinh viên và địa chỉ
			const studentsWithAddress = list.map((student) => {
				// Tìm địa chỉ của sinh viên theo id
				const address = addressList.find((a) => a.id === student.id);
				return {
					...student,
					address: address ? address.name : "Không có địa chỉ",
				};
			});
			setStudentList(studentsWithAddress);
		};
		fetchData();
	}, []);
	return (
		<div className="container">
			<form className="d-flex align-items-center justify-content-between my-3">
				<div className="d-flex align-items-center">
					<input type="text" className="form-control rounded-0 " id="inputName" placeholder="Enter name" />
					<button type="button" className="btn btn-secondary rounded-0">
						Search
					</button>
				</div>
				<Link className="btn btn-sm btn-secondary" id="add-link" to="/students_list/add_students">
					Add New Students
				</Link>
			</form>

			<table className="table table-light">
				<thead>
					<tr>
						<th className="text-center">STT</th>
						<th className="text-center">ID</th>
						<th className="text-center">Name</th>
						<th className="text-center">Gender</th>
						<th className="text-center">Phone</th>
						<th className="text-center">Address</th>
						<th className="text-center">Email</th>

						<th className="text-center" style={{ width: 200 }}>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{studentList.map((s, i) => (
						<StudentItem key={s.id} student={s} i={i} />
					))}
				</tbody>
			</table>
		</div>
	);
}
export default StudentList;

"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setphone] = useState("");
	const [pin, setPin] = useState("");

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		const { data: users, error } = await supabase.from("users").select("*");
		if (error) console.log("Error fetching users:", error);
		else setUsers(users);
	};

	const generatePin = () => {
		return Math.floor(100000 + Math.random() * 900000).toString();
	};

	const addUser = async () => {
		const generatedPin = generatePin();

		const { data, error } = await supabase
			.from("users")
			.insert([{ name, email, phone, pin: generatedPin }]);

		if (error) {
			console.log("Error adding user:", error);
		} else {
			setPin(generatedPin);
			fetchUsers();
		}
	};

	return (
		<div>
			<h1>Register</h1>
			<input
				type="text"
				placeholder="Enter name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="email"
				placeholder="Enter email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Enter phone"
				value={phone}
				onChange={(e) => setphone(e.target.value)}
			/>
			<button onClick={addUser} type="button">
				Register
			</button>
			{pin && <p>Your PIN is: {pin}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} - {user.email} - {user.phone} -  Pin :{user.pin} {/* o pin é só pra testar  */}
					</li>
				))}
			</ul>
		</div>
	);
}

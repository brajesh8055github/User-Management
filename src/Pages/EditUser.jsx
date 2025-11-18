import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";


export default function EditUser() {
const { id } = useParams();
const navigate = useNavigate();
const [user, setUser] = useState(null);


useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((res) => res.json())
.then((data) => setUser(data));
}, [id]);


if (!user) return <Spinner />;


return (
<div>
<h2 className="text-2xl font-semibold mb-4">Edit User</h2>
<UserForm
initial={user}
onSuccess={() => {
alert("User Updated");
navigate("/");
}}
/>
</div>
);
}
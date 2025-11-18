import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";


export default function UserDetails() {
const { id } = useParams();
const [user, setUser] = useState(null);


useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((res) => res.json())
.then((data) => setUser(data));
}, [id]);


if (!user) return <Spinner />;


return (
<div className="bg-white shadow p-6 rounded">
<Link to="/" className="text-blue-600 underline">Back</Link>
<h2 className="text-2xl font-bold mt-2 mb-4">{user.name}</h2>


<p><b>Email:</b> {user.email}</p>
<p><b>Phone:</b> {user.phone}</p>
<p><b>Website:</b> {user.website}</p>
<p><b>Company:</b> {user.company?.name}</p>
<p><b>Address:</b> {user.address?.suite}, {user.address?.street}, {user.address?.city}</p>
</div>
);
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
const API2 = "https://jsonplaceholder.typicode.com/users";


export default function Home() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
fetch(API2)
.then((res) => res.json())
.then((data) => {
setUsers(data);
setLoading(false);
});
}, []);


return (
<div>
<h2 className="text-2xl font-semibold mb-4">Users</h2>


{loading ? (
<Spinner />
) : (
<div className="overflow-auto">
<table className="w-full border">
<thead>
<tr className="bg-gray-100">
<th className="p-2 border">Name</th>
<th className="p-2 border">Email</th>
<th className="p-2 border">Phone</th>
<th className="p-2 border">Actions</th>
</tr>
</thead>
<tbody>
{users.map((u) => (
<tr key={u.id}>
<td className="p-2 border">
<Link to={`/user/${u.id}`} className="text-blue-600 underline">
{u.name}
</Link>
</td>
<td className="p-2 border">{u.email}</td>
<td className="p-2 border">{u.phone}</td>
<td className="p-2 border flex gap-2">
<Link
to={`/edit/${u.id}`}
className="px-3 py-1 bg-green-600 text-white rounded cursor-pointer"
>
Edit
</Link>


<button
onClick={() => alert("User Deleted")}
className="px-3 py-1 bg-red-600 text-white rounded cursor-pointer"
>
Delete
</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
)}
</div>
);
}
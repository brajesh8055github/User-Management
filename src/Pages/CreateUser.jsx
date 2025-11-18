import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
const navigate = useNavigate();


return (
<div>
<h2 className="text-2xl font-semibold mb-4">Create User</h2>
<UserForm
onSuccess={() => {
alert("User Created");
navigate("/");
}}
/>
</div>
);
}
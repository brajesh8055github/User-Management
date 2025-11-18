export default function Spinner() {
return (
<div className="flex gap-2 justify-center py-4">
<div className="w-3 h-3 bg-blue-600 rounded-full animate-ping"></div>
<div className="w-3 h-3 bg-blue-600 rounded-full animate-ping delay-150"></div>
<div className="w-3 h-3 bg-blue-600 rounded-full animate-ping delay-300"></div>
</div>
);
}
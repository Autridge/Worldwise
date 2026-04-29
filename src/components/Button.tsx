export default function Button({ children, onClick }) {
  return (
    <button
      className="bg-brandGr p-2 rounded text-gray-950 cursor-pointer "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

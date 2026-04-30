export default function Button({ children, onClick }) {
  return (
    <button
      className="bg-brandGr py-1 px-3 rounded text-gray-950 cursor-pointer "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

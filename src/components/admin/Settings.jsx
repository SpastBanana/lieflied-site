export const Settings = ({ isOpen }) => {
  return (
    <div
      className={`absolute left-0 top-0 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <p>Settings</p>
    </div>
  );
};

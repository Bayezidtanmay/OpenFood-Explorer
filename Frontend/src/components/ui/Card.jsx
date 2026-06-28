export default function Card({ children, className = "" }) {
    return (
      <div
        className={`
          rounded-2xl
          bg-white
          shadow-sm
          border
          p-6
          ${className}
        `}
      >
        {children}
      </div>
    );
  }
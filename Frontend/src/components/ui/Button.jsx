export default function Button({
    children,
    className = "",
    ...props
  }) {
    return (
      <button
        className={`
          rounded-xl
          bg-orange-500
          px-5
          py-3
          font-medium
          text-white
          transition
          hover:bg-orange-600
          disabled:opacity-50
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
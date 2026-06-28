export default function Input({
    className = "",
    ...props
  }) {
    return (
      <input
        className={`
          w-full
          rounded-xl
          border
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-orange-400
          ${className}
        `}
        {...props}
      />
    );
  }
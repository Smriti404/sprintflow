const ErrorState = ({ message }) => (
  <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
    {message || "Something went wrong"}
  </div>
);

export default ErrorState;

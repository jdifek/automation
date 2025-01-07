const LoadingSpinner = () => (
  <div className="flex justify-center my-4">
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0">
        Loading...
      </span>
    </div>
  </div>
);

export default LoadingSpinner;

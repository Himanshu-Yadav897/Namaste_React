const Shimmer = () => {
  return (
    <div className="shimmer-container space-y-6">
      {/* Header Shimmer */}
      <div className="w-full h-16 bg-gray-300 animate-pulse rounded-md"></div>

      {/* Body Shimmer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-md h-64"></div>
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-md h-64"></div>
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-md h-64"></div>
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-md h-64"></div>
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-md h-64"></div>
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-md h-64"></div>
      </div>
    </div>
  );
};

export default Shimmer;

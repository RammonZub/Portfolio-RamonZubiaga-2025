export default function Loading(): JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse space-y-8 w-full max-w-2xl mx-auto px-4">
        <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  );
} 
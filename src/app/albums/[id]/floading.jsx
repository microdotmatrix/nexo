export default function Loading() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div className="bg-gray-200 rounded-md w-40 h-40" key={i}>
          Loading...
        </div>
      ))}
    </div>
  )
}
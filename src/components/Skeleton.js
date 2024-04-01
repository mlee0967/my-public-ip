function Skeleton(){
  const line = <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mt-2 mb-2"></div>;
  return (
    <div className="w-32 animate-pulse items-center justify-center">
      {line}
      {line}
    </div>
  )
}

export default Skeleton;
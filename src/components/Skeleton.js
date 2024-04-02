function SkeletonBar({ additionalClasses }) {
  const baseClasses = 'h-4 bg-gray-200 rounded-full dark:bg-gray-700 mt-2 mb-2';
  const classNames = additionalClasses ? `${baseClasses} ${additionalClasses}` : baseClasses;

  return (
    <div className={`${classNames}`} />
  );
}

function Skeleton() {
  return (
    <div className='w-32 animate-pulse items-center justify-center'>
      <SkeletonBar/>
      <div className='flex'>
        <SkeletonBar additionalClasses='w-6 mr-2'/>
        <SkeletonBar additionalClasses='w-24' />
      </div>
    </div>
  );
}

export default Skeleton;
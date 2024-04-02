function SkeletonBar({ additionalClasses }) {
  const baseClasses = 'h-4 bg-gray-200 rounded-full dark:bg-gray-700 mt-2 mb-2';
  const classNames = additionalClasses ? `${baseClasses} ${additionalClasses}` : baseClasses;

  return (
    <div className={`${classNames}`} />
  );
}

function Skeleton() {
  return (
    <div className='w-40 animate-pulse flex flex-col items-center justify-center'>
      <SkeletonBar additionalClasses='w-full'/>
      <div className='flex items-center justify-center'>
        <SkeletonBar additionalClasses='w-6 mr-2'/>
        <SkeletonBar additionalClasses='w-24' />
      </div>
    </div>
  );
}

export default Skeleton;
const Skeleton = ({ className }: any) => {
  return (
    <div className={`animate-pulse transition-all bg-gray-200 ${className}`} />
  );
};

export default Skeleton;

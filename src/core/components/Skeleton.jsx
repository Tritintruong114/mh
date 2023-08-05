import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const ImageSkeleton = () => {
  return (
    <div className="md:grid-cols-2 xl:grid-cols-3 grid gap-10 h-full shadow-md">
      <SkeletonTheme baseColor="#A4907C" highlightColor="#FCDEC0">
        <Skeleton count={1} height={330} />
        <Skeleton count={1} height={330} />
        <Skeleton count={1} height={330} />
      </SkeletonTheme>
    </div>
  );
};

export default ImageSkeleton;
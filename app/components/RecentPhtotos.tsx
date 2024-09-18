import { faFileImage } from "@fortawesome/pro-solid-svg-icons";
import CustomIcon from "./CustomIcon";
import { useEffect, useState } from "react";
import Skeleton from "./Skeletons/skeleton";
import { CFGallery } from "./LightGallery";

const RecentPhotos = ({ data, isLoading }: any) => {
  const [photos, setPhotos] = useState(0);

  useEffect(() => {
    function resize() {
      if (window.innerWidth >= 1280) {
        setPhotos(10);
      } else if (window.innerWidth >= 768) {
        setPhotos(8);
      } else {
        setPhotos(4);
      }
    }
    resize();
    window.addEventListener("resize", resize);
  }, []);

  return (
    <div className="h-full">
      <CustomIcon icon={faFileImage} label="Recent Photos" />

      {isLoading ? (
        <div className="grid grid-cols-5 gap-4 mt-4 w-full">
          {[...Array(10)].map((_, i) => (
            <Skeleton
              key={i}
              className="w-20 h-20 rounded-md col-span-1"
            ></Skeleton>
          ))}
        </div>
      ) : (
        <div className="mt-2.5 ">
          {data?.aws_files?.length > 0 ? (
            <CFGallery className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2.5">
              {data?.aws_files
                ?.slice(0, photos)
                .map(
                  (
                    { image_id, file_path, is_image, file_name }: any,
                    i: number
                  ) => (
                    <a
                      key={image_id ?? i}
                      href={file_path}
                      download={!is_image}
                      className="light-gallery overflow-hidden w-16 md:w-20 h-16 md:h-20 col-span-1  rounded-md "
                      data-sub-html={`<h4>${file_name}</h4>`}
                    >
                      <img
                        src={file_path}
                        alt={file_name}
                        className="cursor-pointer"
                      />
                    </a>
                  )
                )}
            </CFGallery>
          ) : (
            <div className="w-full !h-[195px] flex justify-center items-center">
              <img src="../../public/NoPage.svg" alt="No Photos" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentPhotos;

import { faFileImage } from "@fortawesome/pro-solid-svg-icons";
import CustomIcon from "./CustomIcon";
import { useEffect, useState } from "react";
import Skeleton from "./Skeletons/spin";
import { CFGallery } from "./LightGallery";

const RecentPhotos = ({ data, isLoading }: any) => {
  const [photos, setPhotos] = useState(0);
  const [filteredFiles, setFilteredFiles] = useState([]);

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

  useEffect(() => {
    if (data?.aws_files?.length > 0) {
      const filteredFiles = data?.aws_files?.filter(
        (file: any) => file.file_ext.toLowerCase() !== "pdf"
      );

      setFilteredFiles(filteredFiles);
    }
  }, [data]);

  console.log("filteredFiles", filteredFiles);

  return (
    <>
      <CustomIcon icon="fa-solid fa-file-image" label="Recent Photos" />

      <div className="summary_details_block_body">
        {isLoading ? (
          <div className="grid grid-cols-5 gap-4 mt-4 w-full">
            <div className="recent-photos-content mt-sm customScroll">
              {[...Array(10)].map((_, i) => (
                <>
                  <div className="recent-photos-block rpb-shimmer"></div>
                </>
              ))}
            </div>
          </div>
        ) : (
          <>
            {data?.aws_files?.length > 0 ? (
              <CFGallery className="recent-photos-content mt-sm customScroll">
                {filteredFiles
                  ?.slice(0, photos)
                  .map(
                    (
                      { image_id, file_path, is_image, file_name }: any,
                      i: number
                    ) => (
                      <div className="recent-photos-block files_exist image">
                        <div className="recent-photos-img image image-thumb">
                          <a
                            key={image_id ?? i}
                            href={file_path}
                            download={!is_image}
                            className="light-gallery file-image-link image"
                            data-sub-html={`<h4>${file_name}</h4>`}
                          >
                            <img
                              src={file_path}
                              alt={file_name}
                              className="cursor-pointer"
                            />
                          </a>
                        </div>
                      </div>
                    )
                  )}
              </CFGallery>
            ) : (
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "195px" }}
              >
                <img
                  src="././remix_build/project_summery/NoPage.svg"
                  alt="No Photos"
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default RecentPhotos;

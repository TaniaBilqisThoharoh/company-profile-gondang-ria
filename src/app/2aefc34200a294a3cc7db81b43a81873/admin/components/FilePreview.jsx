import React from "react";

const FilePreview = ({ fileData }) => {
  return (
    <div className="">
      <div className="">
        {/* loop over the fileData */}
        {fileData.fileList.map((f) => {
          return (
              <ol key={f.lastModified}>
                <li className="">
                  {/* display the filename and type */}
                  <div key={f.name} className="">
                    {f.name}
                  </div>
                </li>
              </ol>
          );
        })}
      </div>
    </div>
  );
};

export default FilePreview;
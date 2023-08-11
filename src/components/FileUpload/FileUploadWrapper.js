import React from "react";
import FileUpload from "./FileUpload";

const FileUploadWrapper = ({ allowedRoutes, updateUploadedFiles }) => {
  const currentPath = window.location.pathname;
  const isAllowedRoute = allowedRoutes.includes(currentPath);

  return isAllowedRoute ? (
    <FileUpload
      accept=".jpg,.png,.jpeg"
      label="Profile Image(s)"
      multiple
      updateFilesCb={updateUploadedFiles}
    />
  ) : null;
};

export default FileUploadWrapper;

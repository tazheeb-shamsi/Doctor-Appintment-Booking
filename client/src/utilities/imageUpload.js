const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

export const uploadImageToCloudinary = async (file) => {
  const uploadImage = new FormData();
  uploadImage.append("file", file);
  uploadImage.append("upload_preset", upload_preset);
  uploadImage.append("cloud_name", cloud_name);
  uploadImage.append("folder", "doctor-appointment-booking/profile-pictures");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: "POST",
      body: uploadImage,
    }
  );
  const data = await response.json();
  return data;
};

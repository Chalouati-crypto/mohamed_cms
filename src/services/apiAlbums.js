import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

export async function getAlbums() {
  const { data, error } = await supabase.from("Albums").select("*");
  if (error) {
    console.error(error.message);
    throw new Error("Albums could not be loaded");
  }
  return data;
}
export async function getAlbum(id) {
  const { data, error } = await supabase
    .from("Albums")
    .select("*")
    .eq("id", id);
  if (error) {
    console.error(error.message);
    throw new Error("Albums could not be loaded");
  }
  return data;
}

export async function deleteAlbum(id) {
  try {
    // Fetching images associated with the album
    const { data: images, error: fetchError } = await supabase
      .from("Images") // Ensure this matches the exact table name
      .select("image_name")
      .eq("album_id", id);

    // Handle fetch error
    if (fetchError) {
      console.error("Error fetching images:", fetchError.message);
      return; // Exit if there's an error
    }

    // Prepare the image paths for deletion
    const imagePaths = images.map((image) => `public/${image.image_name}`);
    console.log("Image paths to delete:", imagePaths);

    // Actually deleting the images from storage
    const { error: deleteError } = await supabase.storage
      .from("images") // Ensure this matches the exact bucket name
      .remove(imagePaths);

    // Handle delete error
    if (deleteError) {
      console.error("Error deleting images:", deleteError.message);
      return; // Exit if there's an error
    }

    // Deleting the album
    const { error } = await supabase
      .from("Albums") // Ensure this matches the exact table name
      .delete()
      .eq("id", id);

    // Handle album delete error
    if (error) {
      console.error("Error deleting album:", error.message);
    } else {
      console.log("Album deleted successfully.");
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err);
  }
}

export async function addAlbum(data) {
  const { name, images } = data;
  if (name === "" || images.length === 0) {
    toast.error("Please provide an album name and select at least one image.");
    return;
  }

  const uploadedImageUrls = [];

  // adding a new album row to the Albums table
  const { data: album, error: albumError } = await supabase
    .from("Albums")
    .insert([{ name: name }])
    .select();

  if (albumError) {
    toast.error("Error adding album:");
    return;
  }

  const albumId = album[0].id;

  // uploading images to the storage bucket
  for (const [index, image] of images.entries()) {
    const imageName = `${name}-${index}`.replaceAll("/", "");
    const imageSize = image.size;
    const { error } = await supabase.storage
      .from("images")
      .upload(`public/${imageName}`, image);

    if (error) {
      toast.error("Error uploading image:", error);
    } else {
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/images/public/${imageName}`;

      uploadedImageUrls.push({ imageUrl, imageName, imageSize });
    }
  }

  //linking each image in the bucket to its album through the images table
  //create one image row for each uploaded image to the album
  // Prepare the data to insert into the Images table
  const imageRows = uploadedImageUrls.map((image) => ({
    album_id: albumId, // Ensure albumId is valid and exists in Albums
    file_path: image.imageUrl, // Use file_path instead of image_url
    image_name: image.imageName, // Use public_url instead of image_url
    image_size: image.imageSize,
  }));

  // Attempt to insert the rows into the Images table
  const { error: imagesError } = await supabase
    .from("Images")
    .insert(imageRows);

  // Handle potential errors or success
  if (imagesError)
    toast.error("Error inserting images: " + imagesError.message);

  toast.success("Album and images added successfully");
}

export async function getImagesByAlbum(id) {
  let { data, error } = await supabase
    .from("Images")
    .select("*")
    .eq("album_id", id);
  if (error) {
    toast.error(error);
  }
  return data;
}
export async function getImagesNumber(id) {
  const { count, error } = await supabase
    .from("Images")
    .select("id", { count: "exact" }) // Select a column to count, you can also use '*' here
    .eq("album_id", id);
  return count;
}
export async function getImagesSize(id) {
  const { data, error } = await supabase
    .from("Images")
    .select("image_size") // Select the size column to sum
    .eq("album_id", id);
  if (error) {
    console.error("Error fetching image sizes:", error);
    return null; // Handle the error appropriately in your application
  }
  console.log(data);
  // Sum up the sizes of all images in the album
  const totalSizeInBytes = data.reduce(
    (acc, image) => acc + image.image_size,
    0
  );

  // Convert bytes to megabytes (1 MB = 1,048,576 bytes)
  const totalSizeInMB = totalSizeInBytes / (1024 * 1024);

  console.log(totalSizeInMB);
  return parseFloat(totalSizeInMB.toFixed(2)); // Return the total size in MB
}

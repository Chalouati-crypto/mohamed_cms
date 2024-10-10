import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Row from "../ui/Row";
import Button from "../ui/Button";
import MiniSpinner from "../ui/MiniSpinner";
import { MdDelete } from "react-icons/md";
import { useAddAlbum } from "../features/Albums/useAddAlbum";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetImagesByAlbum } from "../features/Albums/useGetImagesByAlbum";
const StyledForm = styled.form`
  margin: 5rem;
`;
const StyledLabel = styled.label`
  font-size: 2rem;
`;
const StyledInput = styled.input`
  font-size: 1rem;
  padding: 1rem 2rem;
  width: 30rem;
`;
const Styledrow = styled(Row)`
  gap: 5rem;
  margin: 3rem 0;
`;
const ImagePreview = styled.div`
  position: relative;
`;

const StyledDeleteButton = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  /* padding: 0.5rem 0.8rem; */
  font-size: 1rem;
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 20%;
  background-color: #930101;
`;

function AddAlbum() {
  //check if we're in a edit session

  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { addAlbum, isAddingAlbum } = useAddAlbum();

  const handleCreateAlbum = (e) => {
    e.preventDefault();
    addAlbum({ name, images });
  };
  const handleImageChange = (e) => {
    const newFiles = Array.from(e.target.files); // Convert FileList to array
    setImages((prevImages) => [...prevImages, ...newFiles]); // Append new images to the existing ones
  };
  const removeImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );

    if (images.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the input value
    }
  };
  return (
    <StyledForm>
      <Styledrow type="horizental">
        <StyledLabel htmlFor="name">Album name</StyledLabel>
        <StyledInput
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Styledrow>
      <Styledrow type="horizental">
        <StyledLabel htmlFor="name">Upload Images</StyledLabel>
        <StyledInput
          id="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          ref={fileInputRef}
        />
      </Styledrow>
      <Styledrow type="horizental">
        {images.map((image, index) => (
          <ImagePreview key={index}>
            <img
              src={URL.createObjectURL(image)}
              alt={`Selected Image ${index + 1}`}
              style={{ width: "200px", marginBottom: "5px" }}
            />

            <StyledDeleteButton
              onClick={(e) => {
                e.preventDefault();
                removeImage(index);
              }}
            >
              <MdDelete />
            </StyledDeleteButton>
          </ImagePreview>
        ))}
      </Styledrow>
      <Styledrow type="horizental">
        <Button onClick={handleCreateAlbum} disabled={isAddingAlbum}>
          {isAddingAlbum ? <MiniSpinner /> : "Create Album"}
        </Button>
        <Button
          variation="secondary"
          onClick={() => navigate("/albums")}
          disabled={isAddingAlbum}
        >
          Cancel
        </Button>
      </Styledrow>
    </StyledForm>
  );
}

export default AddAlbum;

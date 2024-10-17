import { DropZone, FormLayout, TextField, Thumbnail } from "@shopify/polaris";
import { useState } from "react";

const FormLayoutItem = () => {
  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
  const [file, setFile] = useState<File | null>(null);
  console.log(setFile(file));

  const fileUpload = !file && (
    <DropZone.FileUpload actionHint="Accepts .gif, .jpg, and .png" />
  );

  const uploadedFile = file && (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Thumbnail
        size="small"
        alt={file.name}
        source={
          validImageTypes.includes(file.type)
            ? window.URL.createObjectURL(file)
            : "https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png"
        }
      />
      <div>
        {file.name}{" "}
        <div style={{ fontSize: "0.8em", color: "#637381" }}>
          {file.size} bytes
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <FormLayout>
        <TextField label="Title" onChange={() => {}} autoComplete="off" />
        <TextField
          type="number"
          label="Price"
          onChange={() => {}}
          autoComplete="off"
        />
        <DropZone
          label="Product image"
          accept="image/*"
          type="image"
          onDrop={() => {}}
          allowMultiple={false}
        >
          {uploadedFile}
          {fileUpload}
        </DropZone>
        <TextField
          label="Description"
          onChange={() => {}}
          autoComplete="off"
          multiline={4}
        />
      </FormLayout>
    </div>
  );
};

export default FormLayoutItem;

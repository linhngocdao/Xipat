import {
  DropZone,
  LegacyStack,
  Thumbnail,
  Text,
  FormLayout,
  TextField,
} from "@shopify/polaris";
import { NoteIcon } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";

const FormLayoutItem = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDropZoneDrop = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) =>
      setFiles((files) => [...files, ...acceptedFiles]),
    []
  );

  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

  const fileUpload = !files.length && (
    <DropZone.FileUpload actionHint="Accepts .gif, .jpg, and .png" />
  );
  const uploadedFiles = files.length > 0 && (
    <LegacyStack vertical>
      {files.map((file, index) => (
        <LegacyStack alignment="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={
              validImageTypes.includes(file.type)
                ? window.URL.createObjectURL(file)
                : NoteIcon
            }
          />
          <div>
            {file.name}{" "}
            <Text variant="bodySm" as="p">
              {file.size} bytes
            </Text>
          </div>
        </LegacyStack>
      ))}
    </LegacyStack>
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
        <DropZone onDrop={handleDropZoneDrop} variableHeight label="Image">
          {uploadedFiles}
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

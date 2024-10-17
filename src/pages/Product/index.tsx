import React from "react";
import { Button, Page, DataTable, Spinner } from "@shopify/polaris";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ModalForm from "./modalForm";

type Post = {
  id: number;
  title: string;
  userId: number;
  body: string;
};

const ProductManager: React.FC = () => {
  const [active, setActive] = useState(false);
  const { data: posts, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    },
  });
  console.log(posts);

  const rows =
    posts
      ?.slice(0, 5)
      .map((post: Post) => [
        post.id,
        post.title,
        post.userId,
        post.body.slice(0, 50) + "...",
      ]) || [];

  return (
    <>
      <Page
        title="Product"
        secondaryActions={
          <Button onClick={() => setActive(true)}>Add product</Button>
        }
      >
        {isLoading ? (
          <Spinner accessibilityLabel="Loading posts" size="large" />
        ) : (
          <DataTable
            columnContentTypes={["numeric", "text", "text"]}
            headings={["ID", "Title", "userId", "Content"]}
            rows={rows}
          />
        )}
      </Page>
      <ModalForm active={active} setActive={setActive} />
    </>
  );
};

export default ProductManager;

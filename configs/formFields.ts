export const formFields: { [key: string]: TFormField[] } = {
  barang: [
    { label: "Name", name: "name", type: "text", required: true },
    { label: "Category", name: "category", type: "text", required: true },
    { label: "Price", name: "price", type: "number", required: true },
    { label: "Stock", name: "stock", type: "number", required: true },
    {
      label: "Description",
      name: "description",
      type: "text",
      required: false,
    },
    { label: "Brand", name: "brand", type: "text", required: false },
    { label: "Image URL", name: "imageUrl", type: "url", required: false },
  ],
};

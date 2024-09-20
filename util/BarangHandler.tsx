// Adjust the import based on your Firestore setup
import { TBarang } from "@/types/TBarang";
import { addDocument, getDocument, updateDocument, deleteDocument, getAllDocuments } from "./FirestoreUtil";

// Fetch a document by ID using the utility function
export const getBarangById = async (id: string): Promise<TBarang | null> => {
  const collectionName = "barangs"; // Specify the collection name
  try {
      return await getDocument<TBarang>(collectionName, id); // Use the utility function
  } catch (error) {
      console.error("Error fetching document: ", error);
      throw new Error("Failed to fetch barang. Please try again.");
  }
};
// Fetch all barang documents
export const getAllBarang = async (): Promise<TBarang[]> => {
  const collectionName = "barangs"; // Specify the collection name
  try {
      return await getAllDocuments<TBarang>(collectionName); // Use the utility function
  } catch (error) {
      console.error("Error fetching documents: ", error);
      throw new Error("Failed to fetch all barangs. Please try again.");
  }
};
// Add a new barang document
export const addBarang = async (barang: Omit<TBarang, 'id'>) => {
  try {
      const docId = await addDocument<Omit<TBarang, 'id'>>("barangs", barang);
      return docId; // Return the document ID
  } catch (error) {
      console.error("Error adding document: ", error);
      throw new Error("Failed to add barang. Please try again.");
  }
};

// Update an existing barang document
export const updateBarang = async (id: string, updatedData: Partial<TBarang>) => {
  const collectionName = "barangs"; // Specify the collection name
  try {
      await updateDocument<TBarang>(collectionName, id, updatedData);
  } catch (error) {
      console.error("Error updating document: ", error);
      throw new Error("Failed to update barang. Please try again.");
  }
};

// Delete a barang document by ID
export const deleteBarang = async (id: string) => {
  const collectionName = "barangs"; // Specify the collection name
  try {
      await deleteDocument(collectionName, id);
  } catch (error) {
      console.error("Error deleting document: ", error);
      throw new Error("Failed to delete barang. Please try again.");
  }
};
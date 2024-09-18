 // Adjust the import based on your Firestore setup
import { TBarang } from "@/types/TBarang";
import { getDocument } from "./FirestoreUtil";

// Fetch a document by ID using the utility function
export const getBarangById = async (id: string): Promise<TBarang | null> => {
  const collectionName = "barangs"; // Specify the collection name
  return await getDocument<TBarang>(collectionName, id); // Use the utility function
};
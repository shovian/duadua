import { db } from "@/lib/firebase"; // Adjust the import based on your Firebase setup
import { TBarang } from "@/types/TBarang";
// Import the necessary functions

export const getBarangById = async (id: string): Promise<TBarang | null> => {
  try {
    const docRef = doc(db, "barangs", id); // Create a reference to the document
    const docSnap = await getDoc(docRef); // Fetch the document

    if (!docSnap.exists()) {
      console.error("No such document!");
      return null;
    }

    return { id: docSnap.id, ...docSnap.data() } as unknown as TBarang; // Return the document data
  } catch (error) {
    console.error("Error fetching document:", error);
    return null;
  }
};

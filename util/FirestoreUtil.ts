import { db } from "@/lib/firebase"; // Adjust the import based on your Firebase setup
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Add a document to the collection
export const addDocument = async <T>(collectionName: string, data: T & { id: string }): Promise<string> => {
  const docRef = doc(db, collectionName, data.id); // Use data.id or generate a new one if needed
  await setDoc(docRef, data);
  return docRef.id; // Return the document ID
};

// Retrieve a document by ID
export const getDocument = async <T>(collectionName: string, documentId: string): Promise<T | null> => {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.error("No such document!");
    return null;
  }

  return { id: docSnap.id, ...docSnap.data() } as T;
};

// Update a document by ID
export const updateDocument = async <T>(collectionName: string, documentId: string, updates: Partial<T>): Promise<void> => {
  const docRef = doc(db, collectionName, documentId);
  await updateDoc(docRef, updates);
};

// Delete a document by ID
export const deleteDocument = async (collectionName: string, documentId: string): Promise<void> => {
  const docRef = doc(db, collectionName, documentId);
  await deleteDoc(docRef);
};
import { db } from "@/libs/firebase"; // Adjust the import based on your Firebase setup
import { doc, getDoc, updateDoc, deleteDoc, collection, addDoc, getDocs } from "firebase/firestore";

// Add a document to the collection
export const addDocument = async <T>(collectionName: string, data: T & { id?: string }): Promise<string | null> => {
  try {
    const docRef = collection(db, collectionName);
    const docRefAdded = await addDoc(docRef, data);
    return docRefAdded.id; // Return the document ID
  } catch {
    throw new Error("Failed to add document. Please try again.");
  }
};

export const getAllDocuments = async <T>(collectionName: string): Promise<T[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
  } catch {
    throw new Error("Failed to retrieve documents. Please try again.");
  }
};

// Retrieve a document by ID
export const getDocument = async <T>(collectionName: string, documentId: string): Promise<T | null> => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      throw new Error("Document not found.");
    }
    
    return { id: docSnap.id, ...docSnap.data() } as T;
  } catch {
    throw new Error("Failed to retrieve document. Please try again.");
  }
};

// Update a document by ID
export const updateDocument = async <T>(collectionName: string, documentId: string, updates: Partial<T>): Promise<void> => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, updates);
  } catch {
    throw new Error("Failed to update document. Please try again.");
  }
};

// Delete a document by ID
export const deleteDocument = async (collectionName: string, documentId: string): Promise<void> => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await deleteDoc(docRef);
  } catch {
    throw new Error("Failed to delete document. Please try again.");
  }
};
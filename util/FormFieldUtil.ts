import { TBarang } from "@/types/TBarang";

// Utility function to convert camelCase to Normal Sentence
export const camelCaseToNormalSentence = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .toLowerCase() // Convert to lower case
    .trim() // Remove leading/trailing spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
};

// Function to create a sample object based on the type
// utils.ts

export const createSample = <T>(): T => {
    const sample: Partial<T> = {} as Partial<T>;
  
    // Create a dummy object to infer keys
    const keys = Object.keys(sample) as Array<keyof T>;
  
    keys.forEach((key) => {
      const type = typeof (sample[key] as any);
  
      if (type === "string") {
        sample[key] = "" as any; // Default to empty string
      } else if (type === "number") {
        sample[key] = 0 as any; // Default to zero
      } else if (type === "boolean") {
        sample[key] = false as any; // Default to false
      } else {
        sample[key] = undefined; // Default to undefined for other types
      }
    });
  console.log(Array<keyof TBarang>);
  
    return sample as T;
  };

// Function to generate form fields from TBarang
export const generateFormFields = <T extends object>(type: T): TFormField[] => {
  const res = Object.keys(type).map((key) => {
    const isRequired = !key.endsWith("?");
    const fieldType =
      typeof type[key as keyof T] === "number" ? "number" : "text";

    return {
      label: camelCaseToNormalSentence(key),
      name: key.replace("?", ""), // Remove '?' for name
      type: fieldType,
      required: isRequired,
    };
  });
  console.log(res);
  
return res;
};

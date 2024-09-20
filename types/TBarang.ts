export type TBarang = {
    id: string;                // Unique identifier for the accessory
    name: string;              // Name of the accessory
    category: string;          // Category (e.g., charger, case, screen protector)
    price: number;             // Price of the accessory
    stock: number;             // Number of items available in stock
    description?: string;      // Optional description of the accessory
    brand?: string;            // Optional brand name
    imageUrl?: string;         // Optional URL for the product image
};
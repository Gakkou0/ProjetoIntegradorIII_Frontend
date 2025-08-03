export default interface Produto {
    productId: number;
    userId: number;
    name: string;
    description: string;
    price: string;
    stockQuantity: number;
    status: number;
    createdAt: string;
    deletedAt: string | null;
    imageUrl: string;
    storeName: string;
    variables: string[];
}
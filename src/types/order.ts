type ShippingAddress = {
  city: string;
  address: string;
};

type User = {
  _id: string;
  name: string;
};

export type OrderItem = {
  name: string;
  quantity: number;
  image: string;
  price: number;
  product: string;
  _id: string;
};

export type Order = {
  shippingAddress: ShippingAddress;
  _id: string;
  user: User;
  orderItems: OrderItem[];
  paymentMethod: string;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
};

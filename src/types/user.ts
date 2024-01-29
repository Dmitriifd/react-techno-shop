export type UserInfo = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  surname?: string;
  phone?: string;
  address: {
    city: string;
    street: string;
  };
};

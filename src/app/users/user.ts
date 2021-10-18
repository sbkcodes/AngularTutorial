export interface User {
  id: number;
  fname: string;
  lname: string;
  isAdmin?: boolean;
  isDeleted: boolean;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  status: string;
}

export const membersData: Member[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@gmail.com",
    status: "active",
  },
  {
    id: "2",
    name: "Bob Williams",
    email: "bob@gmail.com",
    status: "inactive",
  },
  {
    id: "3",
    name: "Shannon Jackson",
    email: "shannon@gmail.com",
    status: "active",
  },
];

interface User {
  id: number;
  email: string;
  name: string;
  birth: string;
  image: string | null;
  createDate: string | null;
  validDate: string;
  sexType: "MALE" | "FEMALE";
  roleType: "USER" | "ADMIN";
}

export type { User };

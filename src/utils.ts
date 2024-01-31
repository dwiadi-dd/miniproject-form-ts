export type StepListType = {
  id: number;
  title: string;
  alt: string;
  desc: string;
}[];

export type RegsiterDataType = {
  fullname: string | null;
  email: string | null;
  dob: string | null;
  street: string | null;
  city: string | null;
  province: string | null;
  username: string | null;
  password: string | null;
};

export const stepList = [
  {
    id: 1,
    title: "personal information",
    alt: "please provide your personal information",
    desc: "please provide your personal information",
  },
  {
    id: 2,
    title: "address information",
    alt: "please provide current address",
    desc: "please provide your personal information",
  },
  {
    id: 3,
    title: "account information",
    alt: "setup your username and password",
    desc: "please provide your personal information",
  },
];

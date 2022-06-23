export const sql = [
  {
    query: "select * from users;",
    key: "users",
    label: "users",
  },
  {
    query: "select * from activites;",
    key: "activites",
    label: "activites",
  },
  {
    query: "select * from categories;",
    key: "categories",
    label: "categories",
  },
  {
    query: "select categoryName from categories;",
    key: "category name",
    label: "categories",
    state: true,
  },
  {
    query: "select categoryName, description from categories;",
    key: "category name and description",
    label: "categories",
    state: true,
  },
  {
    query: "select * from employees;",
    key: "employees",
    label: "employees",
  },
  {
    query: "select * from customers;",
    key: "customers",
    label: "customers",
  },
];

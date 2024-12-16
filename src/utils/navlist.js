export const admin_menuItems = [
  {
    id: 1,
    title: "Home",
    icon: "/image/home_icon.svg",
    light_icon: "image/home_icon_light.svg", // Light mode icon
    path: "/",
  },
  {
    id: 2,
    title: "Franchisee",
    icon: "/image/franchisee_icon.svg",
    light_icon: "image/franchisee_icon_light.svg",
    path: "/franchisee",
  },
  {
    id: 3,
    title: "Accounts",
    icon: "/image/account_icon.svg",
    light_icon: "image/account_icon_light.svg",
    path: "/accounts",
  },
  {
    id: 4,
    title: "Users",
    icon: "/image/users_icon.svg",
    light_icon: "/image/users_icon_light.svg",
    path: "/users",
  },
  {
    id: 5,
    title: "Subscription",
    icon: "/image/subscription_icon.svg",
    light_icon: "/image/subscription_icon_light.svg",
    path: "/subscription",
  },
];

export const pharmacy_menuItems = [
  {
    id: 1,
    title: "Home",
    icon: "/image/home_icon.svg",
    light_icon: "image/home_icon_light.svg", // Light mode icon
    path: "/",
  },
  {
    id: 2,
    title: "Orders",
    icon: "/image/order_icon.svg",
    light_icon: "image/order_light_icon.svg",
    path: "/orders",
  },
  {
    id: 3,
    title: "Delivery history",
    icon: "/image/calendar-search.svg",
    light_icon: "/image/calendar-search-light.svg",
    path: "/delivery-history",
  },
  {
    id: 4,
    title: "Customers",
    icon: "/image/user-square.svg",
    light_icon: "/image/user-square-light.svg",
    path: "/customers",
  },
  {
    id: 5,
    title: "Accounts",
    icon: "/image/account_icon.svg",
    light_icon: "image/account_icon_light.svg",
    path: "/accounts",
  },
  {
    id: 6,
    title: "Users",
    icon: "/image/users_icon.svg",
    light_icon: "/image/users_icon_light.svg",
    path: "/users",
  },
];

export const franchisee_menuItems = [
  {
    id: 1,
    title: "Home",
    icon: "/image/home_icon.svg",
    light_icon: "image/home_icon_light.svg", // Light mode icon
    path: "/",
  },
  {
    id: 2,
    title: "Orders",
    icon: "/image/order_icon.svg",
    light_icon: "image/order_light_icon.svg",
    path: "/orders",
  },
  {
    id: 3,
    title: "Pharmacies",
    icon: "/image/hospital_icon.svg",
    light_icon: "image/hospital_light_icon.svg",
    path: "/pharmacies",
  },
  {
    id: 4,
    title: "Drivers",
    icon: "/image/drive_icon.svg",
    light_icon: "image/drive_light_icon.svg",
    sub: [
      { id: 1, title: "Drivers list", path: "/drivers" },
      { id: 2, title: "Attendance", path: "/attendance" },
      { id: 3, title: "Requests", path: "/requests" },
      { id: 4, title: "Track", path: "/driver-track" },
    ],
    // path: "/drives",
  },
  {
    id: 5,
    title: "Accounts",
    icon: "/image/account_icon.svg",
    light_icon: "image/account_icon_light.svg",
    sub: [
      { id: 1, title: "D2D", path: "/d2d" },
      { id: 2, title: "Pharmacies", path: "/account-pharmacies" },
    ],
    path: "/accounts",
  },
  {
    id: 6,
    title: "Users",
    icon: "/image/users_icon.svg",
    light_icon: "/image/users_icon_light.svg",
    path: "/users",
  },
];

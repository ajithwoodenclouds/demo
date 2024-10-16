export const admin_home_data = [
  {
    id: 1,
    title: "Due amount",
    amount: "$397,671",
    image: "/image/franchisee_icon.svg",
    color: "bg-[#C4E3F5]",
  },
  {
    id: 2,
    title: "Total pharmacies",
    amount: 2100,
    image: "/image/pharmacies_icon.svg",
    color: "bg-[#C0D3F0]",
  },
  {
    id: 3,
    title: "Total drivers",
    amount: 1150,
    image: "/image/drive_icon.svg",
    color: "bg-[#F5E2C4]",
  },
];

export const franchiseeOne_admin_data = [
  {
    id: 1,
    title: "Total franchises",
    amount: "$397,671",
    image: "/image/due_icon.svg",
    color: false,
    path: "/pharmacies",
    path_name: "View history",
  },
  {
    id: 2,
    title: "Total pharmacies",
    amount: 2100,
    image: "/image/hospital_icon.svg",
    color: "bg-[#C0D3F0]",
    path: "/pharmacies",
    path_name: "View",
  },
  {
    id: 3,
    title: "Total delivery boys",
    amount: 1150,
    image: "/image/delivery_icon.svg",
    color: "bg-[#F5E2C4]",
    path: "/drivers",
    path_name: "View",
  },
];

export const pharmaciesOne_admin_data = [
  {
    id: 1,
    title: "Pending payments",
    amount: "$397,671",
    image: "/image/due_icon.svg",
    color: false,
    amount_des: "Payables to (franchisee n...)",
    amount_des1: "Receivable from (franchisee n...)",
    path: "/pharmacies",
    path_name: "View history",
  },
  {
    id: 2,
    title: "Total paid amount to franchisee",
    amount: 2100,
    image: "/image/hospital_icon.svg",
    color: "bg-[#B0E2CD]",
  },
];

export const driversOne_admin_data = [
  {
    id: 1,
    title: "Total deliveries done",
    amount: "671",
    image: "/image/due_icon.svg",
    color: false,
    amount_des: "Payables to (franchisee n...)",
    amount_des1: "Receivable from (franchisee n...)",
    path: "/pharmacies",
  },
];

export const driversOne_admin_card_data = [
  {
    id: 1,
    title: "Total Deliveries",
    amount: "132",
    image: "/image/due_icon.svg",
    color: "bg-[#C0D3F0]",
    normal_deliveries: "04",
    bulk_deliveries: "20",
  },
  {
    id: 1,
    title: "Total Deliveries",
    amount: "132",
    image: "/image/due_icon.svg",
    color: "bg-[#F5E2C4]",
    payment_by_cash: "04",
    payment_by_card: "20",
    payment_by_cheque: "34",
  },
];
export const columns = [
  { header: "Normal Deliveries", accessor: "normal_deliveries" },
  { header: "Bulk Deliveries", accessor: "bulk_deliveries" },
  { header: "Payment by cash", accessor: "payment_by_cash" },
  { header: "Payment by card", accessor: "payment_by_card" },
  { header: "Payment by cheque", accessor: "payment_by_cheque" },
];

export const accounts_admin_card_data = [
  {
    id: 1,
    title: "Total revenue",
    amount: "$69,549671",
    bg_color: false,
    text_color: "#FFFFFF",
  },
  {
    id: 2,
    title: "Pending due amount",
    amount: "$6,97,671",
    path: "due_list",
    bg_color: "bg-[#B0E2CD]",
    text_color: "#4F4F4F",
    path: "/due-list",
    path_name: "Due list",
  },
];

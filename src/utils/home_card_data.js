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
    recive_amount: "$76,032",
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
    color: false,
    text_color: "#FFFFFF",
  },
  {
    id: 2,
    title: "Pending due amount",
    amount: "$6,97,671",
    path: "due_list",
    color: "bg-[#B0E2CD]",
    text_color: "#4F4F4F",
    path: "/due-list",
    path_name: "Due list",
  },
];

export const due_list_One_admin_data = [
  {
    id: 1,
    title: "Pending due amount",
    amount: "$6,97,671",
    // image: "/image/due_icon.svg",
    color: "bg-[#B0E2CD]",
    amount_des: "Payables to (franchisee n...)",
    amount_des1: "Receivable from (franchisee n...)",
    path: "/pharmacies",
  },
];
export const franchisee_home_data = [
  {
    id: 1,
    title: "Pending payments",
    To_Pharmacy: "$6,97,671",
    from_pharmacy: "$9842759",
    to_d2d: "$76,032",
    image: "/image/money_icon.svg",
    color: false,
    text_color: "text-[#FFFFFF]",
    amount_des: "Payables to (franchisee n...)",
    amount_des1: "Receivable from (franchisee n...)",
    path: "/history",
    path_name: "View history",
  },
  {
    id: 2,
    title: "Total pharmacies",
    amount: 7658,
    image: "/image/hospital_icon.svg",
    color: "bg-[#C0D3F0]",
    text_color: "text-[#1C1C1C]",
    path: "/pharmacies",
    path_name: "View",
  },
  {
    id: 3,
    title: "Total drivers",
    amount: 7652,
    image: "/image/drive_icon.svg",
    color: "bg-[#F5E2C4]",
    text_color: "text-[#1C1C1C]",
    path: "/pharmacies",
    path_name: "View",
  },
];

export const pharmaciesOne_franchise_data = [
  {
    id: 1,
    title: "Pending payments",
    amount: "$397,671",
    recive_amount: "$76,032",
    image: "/image/due_icon.svg",
    color: false,
    amount_des: "To D2D",
    text_color1: "text-[#41DD75]",
    amount_des1: "From D2D",
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

export const pharmaciesOne_pharmacie_data = [
  {
    id: 1,
    title: "Total paid amount to franchisee",
    amount: 2100,
    image: "/image/hospital_icon.svg",
    color: "bg-[#C0D3F0]",
  },
  {
    id: 2,
    title: "Due payments",
    amount: "$397,671",
    recive_amount: "$76,032",
    image: "/image/due_icon.svg",
    color: false,
    amount_des: "To franchisee",
    amount_des1: "From franchisee",
    path: "/history",
    path_name: "View history",
    text_color1: "text-[#E6BE1D]",
    text_color2: "text-[#41DD75]",
  },
];

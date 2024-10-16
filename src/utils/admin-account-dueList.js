export const data = [
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
  {
    sl_no: "01",
    franchisee: "MediCare Pharmacy",
    franchisee_id: "#121433423",
    location: "Torrento, 138 rd Hamilton 21",
    due_amount: "$32",
    due_date: "20 Jan, 2024",
  },
];

// Step 1: Process the data to combine pharmacyName and companyName
export const processedData = data.map((item) => ({
  ...item,
  franchisee_deatils: [item.franchisee, item.franchisee_id],
}));

// Step 2: Define the columns
export const columns = [
  { header: "Sl no", accessor: "sl_no" },
  { header: "Franchisee", accessor: "franchisee_deatils" },
  { header: "Location", accessor: "location" },
  { header: "Due amount", accessor: "due_amount" },
];
export const colors = ["#6A7683", "#6A7683", "#6A7683", "#48AE50"];
export const head_colors = ["#6A7683", "#6A7683", "#6A7683", "#6A7683"];

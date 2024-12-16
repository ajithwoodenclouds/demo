export const data = [
  {
    transaction_date: "10/12/2024",
    transaction_id: "#121433423",
    transaction_method: "Card payment",
    paid_amount: "$847",
    Status: "Processing",
  },
  {
    transaction_date: "10/12/2024",
    transaction_id: "#121433423",
    transaction_method: "Card payment",
    paid_amount: "$847",
    Status: "Successful",
  },
  {
    transaction_date: "10/12/2024",
    transaction_id: "#121433423",
    transaction_method: "Card payment",
    paid_amount: "$847",
    Status: "$847",
  },
  {
    transaction_date: "10/12/2024",
    transaction_id: "#121433423",
    transaction_method: "Card payment",
    paid_amount: "$847",
    Status: "Failed",
  },
];

// Step 1: Process the data to combine pharmacyName and companyName
// export const processedData = data.map((item) => ({
//   ...item,
//   franchisee_deatils: [item.franchisee, item.franchisee_id],
//   Status: item.Status == "Pending" ? "Pending" : ["verifying"],
// }));

// Step 2: Define the columns
export const columns = [
  { header: "Transaction date", accessor: "transaction_date" },
  { header: "Transaction id", accessor: "transaction_id" },
  { header: "Transaction method", accessor: "transaction_method" },
  { header: "Paid amount", accessor: "paid_amount" },
  { header: "Status", accessor: "Status" },
];
export const colors = ["#6A7683", "#6A7683", "#6A7683", "#48AE50", "#E69C1D"];
export const head_colors = ["#6A7683", "#6A7683", "#6A7683", "#6A7683"];

export const data = [
  {
    transaction_date: "10/12/2024",
    type: "credit",
    transaction_id: "#121433423",
    transaction_method: "Card payment",
    credit_amount: "+$847",
    pending_balance: "+$847",
    Status: "Processing",
  },
  {
    transaction_date: "10/12/2024",
    type: "Debit",
    transaction_id: "#121433423",
    transaction_method: "Card payment",
    debit_amount: "-$847",
    pending_balance: "-$847",
    Status: "Successful",
  },
];

export const processedData = data.map((item) => ({
  ...item,
  paid_amount: item.debit_amount ? item.debit_amount : item.credit_amount,
}));

// Step 2: Define the columns
export const columns = [
  { header: "Date", accessor: "transaction_date" },
  { header: "Type", accessor: "type" },

  { header: "Transaction id", accessor: "transaction_id" },
  { header: "Transaction method", accessor: "transaction_method" },
  { header: "Amount", accessor: "paid_amount" },
  { header: "Pending balance", accessor: "pending_balance" },
  { header: "Status", accessor: "Status" },
];

export const colors = [
  "#212529",
  "#212529",
  "#212529",
  "#212529",
  "#48AE50",
  "#212529",
  "#E69C1D",
];
export const head_colors = ["#6A7683", "#6A7683", "#6A7683", "#6A7683"];

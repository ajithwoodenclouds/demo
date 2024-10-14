export const data = [
  {
    sl_no: 121433422,
    order_id: "MediCare Pharmacy",
    created_date: "Trinity Medicare & Pharmaceuticals",
    order_type: "123-456-7890",
    assigned_driver_image: "/image/driver_image.svg",
    assigned_driver_name: "James Gonsalves",
    Status: "Out for delivery",
  },
  {
    sl_no: 121433422,
    order_id: "MediCare Pharmacy",
    created_date: "Trinity Medicare & Pharmaceuticals",
    order_type: "123-456-7890",
    assigned_driver_image: "/image/driver_image.svg",
    assigned_driver_name: "James Gonsalves",
    Status: "Out for delivery",
  },
  {
    sl_no: 121433422,
    order_id: "MediCare Pharmacy",
    created_date: "Trinity Medicare & Pharmaceuticals",
    order_type: "123-456-7890",
    assigned_driver_image: "/image/driver_image.svg",
    assigned_driver_name: "James Gonsalves",
    assigned_driver: "Not assigned",
    Status: "Pending",
  },

  {
    sl_no: 121433422,
    order_id: "MediCare Pharmacy",
    created_date: "Trinity Medicare & Pharmaceuticals",
    order_type: "123-456-7890",
    assigned_driver_image: "/image/driver_image.svg",
    assigned_driver_name: "James Gonsalves",
    assigned_driver: "Not assigned",
    Status: "Delivered",
  },
];

// Step 1: Process the data to combine pharmacyName and companyName
export const processedData = data.map((item) => ({
  ...item,
  pharmacyDetails:
    item.assigned_driver == "Not assigned"
      ? "Not assigned"
      : [item.assigned_driver_image, item.assigned_driver_name],
}));

// Step 2: Define the columns
export const columns = [
  { header: "Sl no", accessor: "sl_no", id: "pharmacyID" },
  { header: "Order id", accessor: "created_date", id: "pharmacyID" },
  { header: "created date", accessor: "created_date", id: "pharmacyID" },
  { header: "Order type", accessor: "order_type", id: "pharmacyID" },
  { header: "Assigned driver", accessor: "pharmacyDetails", id: "pharmacyID" },
  { header: "Status", accessor: "Status", id: "pharmacyID" },
];
export const colors = ["#6A7683", "#6A7683", "#6A7683", "#6A7683", "#E69C1D"];
export const head_colors = ["#6A7683", "#6A7683", "#6A7683", "#6A7683"];

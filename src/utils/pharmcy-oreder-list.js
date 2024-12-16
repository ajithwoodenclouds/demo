export const data = [
  {
    sl_no: "01",
    order_id: "#121433422",
    patient_name: "12/10/24",
    date: "Sep 17, 2024",
    time: "4:17 am - 2:00pm",
    assigned_driver_image: "/image/driver_image.svg",
    assigned_driver_name: "James Gonsalves",
    Status: "Scheduled",
  },
  {
    sl_no: "01",
    order_id: "#121433422",
    patient_name: "12/10/24",
    date: "Sep 17, 2024",
    time: "4:17 am - 2:00pm",
    assigned_driver_image: "/image/driver_image.svg",
    assigned_driver_name: "James Gonsalves",
    Status: "Attempted",
  },
  {
    sl_no: "01",
    order_id: "#121433422",
    patient_name: "12/10/24",
    date: "Sep 17, 2024",
    time: "4:17 am - 2:00pm",
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
  { header: "Order id", accessor: "order_id", id: "pharmacyID" },
  { header: "Patient name", accessor: "patient_name", id: "pharmacyID" },
  { header: "Assigned driver", accessor: "pharmacyDetails", id: "pharmacyID" },
  { header: "Date", accessor: "date", id: "pharmacyID" },
  { header: "Time", accessor: "time", id: "pharmacyID" },

  { header: "Status", accessor: "Status", id: "pharmacyID" },
];
export const colors = ["#212529"];
export const head_colors = ["#6A7683", "#6A7683", "#6A7683", "#6A7683"];

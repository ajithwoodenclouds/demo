export const data = [
  {
    activity: "Pickup",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Delivery",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Pickup",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Delivery",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Pickup",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Delivery",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Pickup",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Delivery",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Pickup",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Delivery",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Pickup",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Delivery",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Pickup",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Delivery",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Pickup",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
  {
    activity: "Delivery",
    location: "MediCare Pharmacy",
    item: "Trinity Medicare & Pharmaceuticals",
    type: "123-456-7890",
    time: "10:00 am",
    activity_image: "",
  },
];

export const processedData = data.map((item) => ({
  ...item,
  drivers_activity:
    item.activity == "Pickup"
      ? [item.activity, "/image/pickup_icon.svg"]
      : [item.activity, "/image/delivery_icon_green.svg"],
}));

// Step 2: Define the columns
export const columns = [
  { header: "Activity", accessor: "drivers_activity" },
  { header: "Location", accessor: "location" },
  { header: "Item", accessor: "item" },
  { header: "Type", accessor: "type" },
  { header: "Timer", accessor: "time" },
];
export const colors = ["#6A7683"];
export const head_colors = ["#6A7683", "#6A7683", "#6A7683", "#6A7683"];

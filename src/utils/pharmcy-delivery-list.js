export const data = [
  {
    Sno: "01",
    order_id: "#121433423",
    order_type: "Delivery",
    drivers_name: "Stephanie Sharkey",
    date: "Sep 17, 2024",
    drivers_img: "/image/driver_image.svg",
    delivery_time: "+1 250 555 0199",
  },
  {
    Sno: "01",
    order_id: "#121433423",
    order_type: "Delivery",
    drivers_name: "Stephanie Sharkey",
    date: "Sep 17, 2024",
    drivers_img: "/image/driver_image.svg",
    delivery_time: "+1 250 555 0199",
  },
  {
    Sno: "01",
    order_id: "#121433423",
    order_type: "Delivery",
    drivers_name: "Stephanie Sharkey",
    date: "Sep 17, 2024",
    drivers_img: "/image/driver_image.svg",
    delivery_time: "+1 250 555 0199",
  },
  {
    Sno: "01",
    order_id: "#121433423",
    order_type: "Delivery",
    drivers_name: "Stephanie Sharkey",
    date: "Sep 17, 2024",
    drivers_img: "/image/driver_image.svg",
    delivery_time: "+1 250 555 0199",
  },
  {
    Sno: "01",
    order_id: "#121433423",
    order_type: "Delivery",
    drivers_name: "Stephanie Sharkey",
    date: "Sep 17, 2024",
    drivers_img: "/image/driver_image.svg",
    delivery_time: "+1 250 555 0199",
  },
  {
    Sno: "01",
    order_id: "#121433423",
    order_type: "Delivery",
    drivers_name: "Stephanie Sharkey",
    date: "Sep 17, 2024",
    drivers_img: "/image/driver_image.svg",
    delivery_time: "+1 250 555 0199",
  },
  {
    Sno: "01",
    order_id: "#121433423",
    order_type: "Delivery",
    drivers_name: "Stephanie Sharkey",
    date: "Sep 17, 2024",
    drivers_img: "/image/driver_image.svg",
    delivery_time: "+1 250 555 0199",
  },
];

export const processedData = data.map((item) => ({
  ...item,
  drivers_details: [item.drivers_img, item.drivers_name],
}));

export const columns = [
  { header: "Sno", accessor: "Sno" },

  {
    header: "Order id",
    accessor: "order_id",
  },
  {
    header: "Order type",
    accessor: "order_type",
  },
  { header: "Assigned driver", accessor: "drivers_details" },
  {
    header: "Date",
    accessor: "date",
  },

  { header: "Delivery time", accessor: "delivery_time" },
];

export const colors = ["##212529"];

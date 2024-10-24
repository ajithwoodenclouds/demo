export const data = [
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    checkin_time: "10:00 am",
    checkout_time: "5:00 pm",
  },
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    checkin_time: "10:00 am",
    checkout_time: "5:00 pm",
  },
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    checkin_time: "10:00 am",
    checkout_time: "5:00 pm",
  },
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    checkin_time: "10:00 am",
    checkout_time: "5:00 pm",
  },
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    checkin_time: "10:00 am",
    checkout_time: "5:00 pm",
  },
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    checkin_time: "10:00 am",
    checkout_time: "5:00 pm",
  },
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    checkin_time: "10:00 am",
    checkout_time: "5:00 pm",
  },
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    checkin_time: "10:00 am",
    checkout_time: "5:00 pm",
  },
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    checkin_time: "10:00 am",
    checkout_time: "5:00 pm",
  },
];

export const processedData = data.map((item) => ({
  ...item,
  drivers_details: [item.drivers_img, item.drivers_name, item.drivers_id],
}));

export const columns = [
  { header: "Sno", accessor: "Sno" },
  { header: "Name", accessor: "drivers_details" },
  {
    header: "Checkin time",
    accessor: "checkin_time",
  },
  {
    header: "Checkout time",
    accessor: "checkout_time",
  },
];

export const colors = ["##212529"];

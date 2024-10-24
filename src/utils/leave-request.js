export const data = [
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    leave_type: "Single day",
    time: "10:00 am",
    start_time: null,
    end_time: null,
    reason:
      "Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec tincidunt exullamcorper.",
  },
  {
    Sno: "01",
    drivers_name: "MediFast Delivery",
    drivers_id: 121433422,
    drivers_img: "/image/driver_image.svg",
    leave_type: "Multiple days",
    start_time: "Jun 18, 2024",
    end_time: "Jun 24, 2024 ",
    reason:
      "Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec tincidunt exullamcorper.",
  },
];

export const processedData = data.map((item) => ({
  ...item,
  drivers_details: [item.drivers_img, item.drivers_name, item.drivers_id],
  date: item.time ? item.time : item.start_time + " to " + item.end_time,
}));

export const columns = [
  { header: "Sno", accessor: "Sno" },
  { header: "Name", accessor: "drivers_details" },
  {
    header: "leave type",
    accessor: "leave_type",
  },
  {
    header: "Date",
    accessor: "date",
  },
  {
    header: "Reason",
    accessor: "reason",
  },
];

export const colors = ["##212529"];

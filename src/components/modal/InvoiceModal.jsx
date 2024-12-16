import React from "react";

const InvoiceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#f0f6f5] p-6 flex justify-between items-start">
          <div>
            <img src="/path/to/logo.png" alt="Logo" className="w-20 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">INVOICE</h2>
            <p className="text-gray-600 mt-2">
              Invoice to <br />
              <span className="font-semibold text-gray-800">
                Hair Wellness Clinic
              </span>{" "}
              <br />
              1949 Linda Street, West Brunswick Twp, PA 19549
            </p>
          </div>
          <div className="text-right">
            <button onClick={onClose} className="text-gray-500 text-2xl">
              &times;
            </button>
            <p className="text-gray-600 mt-4">
              Invoice No: 0001018 <br />
              Date: 03/07/2024 <br />
              Due Date: 03/07/2024 <br />
              Terms: Due on receipt
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#003366] text-white">
                <th className="p-4">Activity</th>
                <th className="p-4">TAX</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Rate</th>
                <th className="p-4">Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr>
                <td className="p-4 border-b">All deliveries</td>
                <td className="p-4 border-b">HST ON</td>
                <td className="p-4 border-b">84</td>
                <td className="p-4 border-b">7.00</td>
                <td className="p-4 border-b">588.00</td>
              </tr>
              <tr>
                <td className="p-4 border-b">Town deliveries</td>
                <td className="p-4 border-b">HST ON</td>
                <td className="p-4 border-b">84</td>
                <td className="p-4 border-b">7.00</td>
                <td className="p-4 border-b">588.00</td>
              </tr>
              {/* Repeat rows as needed */}
            </tbody>
          </table>

          {/* Summary Section */}
          <div className="mt-6 flex justify-between items-center">
            <div className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Mattis lectus sed lacus
              diam pellentesque felis. Nunc faucibus non eget enim urna
              adipiscing.
            </div>
            <div className="text-right">
              <p className="text-gray-800">
                Sub Total: <span className="font-semibold">288.00</span>
              </p>
              <p className="text-gray-800">
                HST (ON) @ 13%: <span className="font-semibold">168.00</span>
              </p>
              <p className="text-lg font-semibold text-gray-900 mt-2">
                Total: 588.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;

import React from "react";

const PurchasePage = () => {
  return (
    <div className="bg-gray-50 w-full h-full">
      <div className="p-8 border border-gray-600">
        <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
          Orders
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr>
                <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                  No
                </th>
                <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                  Name
                </th>
                <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                  Date
                </th>
                <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                  Status
                </th>
                <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                  Total
                </th>
                <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  1
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  Mostarizing Oil
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  Aug 22, 2018
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  Pending
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  $45
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  <a href="shopping-cart.html" className="ht-btn black-btn">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  2
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  Katopeno Altuni
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  July 22, 2018
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  Approved
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  $100
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  <a href="shopping-cart.html" className="ht-btn black-btn">
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  3
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  Murikhete Paris
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  June 12, 2017
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  On Hold
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  $99
                </td>
                <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                  <a href="shopping-cart.html" className="ht-btn black-btn">
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;

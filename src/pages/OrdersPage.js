import Currency from "components/ui/Currency";
import { Helmet } from "react-helmet-async";
import React from "react";
import shopApi from "api/shopApi";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";

const OrderPage = () => {
  const { data, isLoading } = useSWR("PurchasePage", shopApi.getAllOrders);
  const navigate = useNavigate();
  if (isLoading) return;

  const orders = data?.orders || [];

  return (
    <div className="bg-gray-50 w-full h-full">
      <Helmet
        onChangeClientState={(newState, addedTags, removedTags) => {}}
        defaultTitle="Lialili Studio"
        titleTemplate="Lialili | %s"
      >
        <title>Orders</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content={`Store 1: Robins, Lầu 2, TTTM Crescent Mall, 101 Tôn Dật Tiên, phường Tân Phú, quậnt 7, TP HCM | Store 2: Lầu G  TTTM Nowzone , Nguyễn Văn Cừu , Quận 1 , Tp Hồ Chí Minh`}
        />

        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Cart Page`} />
        <meta
          property="og:description"
          content={`Store 1: Robins, Lầu 2, TTTM Crescent Mall, 101 Tôn Dật Tiên, phường Tân Phú, quậnt 7, TP HCM | Store 2: Lầu G  TTTM Nowzone , Nguyễn Văn Cừu , Quận 1 , Tp Hồ Chí Minh`}
        />
        <meta
          property="og:image"
          content="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/346500727_1377831933052584_6263561569183124993_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=79otJq24iLcAX-cjVqa&_nc_ht=scontent.fdad3-5.fna&oh=00_AfC7EU9JCK9EGv0L0Hzhz-hIUiiwfBGehe-p4A1KnSGzUw&oe=64ED0F17"
        />
      </Helmet>
      <div className="p-8 border border-gray-600">
        <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
          Orders
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr>
                <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                  NO
                </th>
                <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                  Order Code
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
              {orders.length > 0 &&
                orders.map((order, index) => (
                  <tr key={uuidv4()}>
                    <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                      {index + 1}
                    </td>
                    <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                      {order.order_code}
                    </td>
                    <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                      {/* Aug 22, 2018 */}
                      {new Date(order.created_at).toLocaleDateString("vi-VN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                      {order.status}
                    </td>
                    <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                      <Currency value={order.total_price} />
                    </td>
                    <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                      <div
                        className="font-bold cursor-pointer"
                        onClick={() => {
                          navigate(`/user/order/${order.order_code}`);
                        }}
                      >
                        View
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

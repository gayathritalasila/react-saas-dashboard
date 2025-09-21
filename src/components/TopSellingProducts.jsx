import React from "react";

const TopSellingProducts = () => {
  return (
    <div
      className="
    w-[519px] min-w-[519px] h-[226px]
    rounded-[16px] p-[25px] gap-[18px]
     dark:border-gray-700
    shadow-sm
  "
      style={{ background: 'var(--Primary-Light, rgba(247, 249, 251, 1))' }}
    >
      {/* Header */}
      <h2
        className="
          font-inter
          font-semibold
          text-[14px]
          leading-[20px]
          text-gray-900 dark:text-gray-100
          mb-4
        "
      >
        Top Selling Products
      </h2>

      {/* Table */}
      <div className="w-[524px] h-[264px]">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-200 border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="py-2 text-[12px] leading-[18px] font-normal tracking-normal text-[rgba(28,28,28,0.4)]">
                Name
              </th>
              <th className="py-2 text-[12px] leading-[18px] font-normal tracking-normal text-[rgba(28,28,28,0.4)]">
                Price
              </th>
              <th className="py-2 text-[12px] leading-[18px] font-normal tracking-normal text-[rgba(28,28,28,0.4)]">
                Quantity
              </th>
              <th className="py-2 text-[12px] leading-[18px] font-normal tracking-normal text-[rgba(28,28,28,0.4)]">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="py-2">ASOS Ridley High Waist</td>
              <td>$79.49</td>
              <td>82</td>
              <td>$6,518.18</td>
            </tr>
            <tr>
              <td className="py-2">Marco Lightweight Shirt</td>
              <td>$128.50</td>
              <td>37</td>
              <td>$4,754.50</td>
            </tr>
            <tr>
              <td className="py-2">Half Sleeve Shirt</td>
              <td>$39.99</td>
              <td>64</td>
              <td>$2,559.36</td>
            </tr>
            <tr>
              <td className="py-2">Lightweight Jacket</td>
              <td>$20.00</td>
              <td>184</td>
              <td>$3,680.00</td>
            </tr>
            <tr>
              <td className="py-2">Marco Shoes</td>
              <td>$79.49</td>
              <td>64</td>
              <td>$1,965.81</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;

const Table = () => {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto mt-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4">Sugar</td>
            <td className="px-6 py-4">20</td>
            <td className="px-6 py-4">$2</td>
            <td className="px-6 py-4">$40</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Rice</td>
            <td className="px-6 py-4">15</td>
            <td className="px-6 py-4">$3</td>
            <td className="px-6 py-4">$45</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Oil</td>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">$5</td>
            <td className="px-6 py-4">$50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

const Table = ({ columns, data }) => (
  <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-card">
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-50 text-xs uppercase tracking-[0.2em] text-slate-400">
        <tr>
          {columns.map((column) => (
            <th key={column.accessor} className="px-4 py-3">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {data.map((row, index) => (
          <tr key={row.id || index} className="text-slate-700">
            {columns.map((column) => (
              <td key={column.accessor} className="px-4 py-3">
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;

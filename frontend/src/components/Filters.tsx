export const Filters = ({
  category,
  setCategory,
  fromDate,
  toDate,
  setFromDate,
  setToDate
}: {
  category: string;
  setCategory: (v: string) => void;
  fromDate: string;
  toDate: string;
  setFromDate: (v: string) => void;
  setToDate: (v: string) => void;
}) => (
  <div className="controls">
    <select value={category} onChange={e => setCategory(e.target.value)}>
      <option value="">All Categories</option>
      <option value="Account">Account</option>
      <option value="Billing">Billing</option>
    </select>

    <input
      type="date"
      value={fromDate}
      onChange={e => setFromDate(e.target.value)}
    />

    <input
      type="date"
      value={toDate}
      onChange={e => setToDate(e.target.value)}
    />
  </div>
);

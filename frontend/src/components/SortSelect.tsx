export const SortSelect = ({
  sort,
  setSort
}: {
  sort: string;
  setSort: (v: string) => void;
}) => (
  <select value={sort} onChange={e => setSort(e.target.value)}>
    <option value="relevance">Relevance</option>
    <option value="date">Date</option>
    <option value="popularity">Popularity</option>
  </select>
);

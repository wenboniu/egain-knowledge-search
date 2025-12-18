export const SearchHistory = ({ history }: { history: string[] }) => (
  <div className="history">
    <h4>Recent Searches</h4>
    <ul>
      {history.map(h => (
        <li key={h}>{h}</li>
      ))}
    </ul>
  </div>
);

export const LoadingError = ({
  loading,
  error
}: {
  loading: boolean;
  error: string | null;
}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  return null;
};

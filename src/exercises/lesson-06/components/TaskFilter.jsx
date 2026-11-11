export default function TaskFilter({ filter, onFilterChange }) {
  const filters = ['all', 'completed', 'pending'];

  return (
    <div>
      {filters.map((item) => (
        <button key={item} onClick={() => onFilterChange(item)}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
      <p>Current filter: {filter}</p>
    </div>
  );
}

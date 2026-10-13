function SnackList() {
  const snacks = [
    { name: 'Goldfish', rank: 5 },
    { name: 'Pringles', rank: 4 },
    { name: 'Belvita', rank: 3 },
    { name: 'Pocky', rank: 2 },
    { name: 'Stonyfield', rank: 1 },
  ];
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.rank}>
          {snack.name} - Rank {snack.rank}
        </li>
      ))}
    </ol>
  );
}
export default SnackList;

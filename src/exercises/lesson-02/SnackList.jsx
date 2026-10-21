function SnackList() {
  const snacks = [
    { name: 'Pretzels', rank: 4 },
    { name: 'Popcorn', rank: 3 },
    { name: 'Chocolate', rank: 2 },
    { name: 'Potato Chips', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>
          {snack.name} — Rank: {snack.rank}
        </li>
      ))}
    </ol>
  );
}

export default SnackList;

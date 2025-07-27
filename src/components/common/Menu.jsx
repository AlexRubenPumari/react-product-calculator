export function Menu({ items, onItemClick, className = '' }) {
  return (
    <ul className={className}>
      {items.map((item, i) => (
        <li
          key={i}
          className='px-4 py-4 sm:py-1 hover:bg-black/10 transition-colors cursor-pointer whitespace-nowrap'
          onClick={() => onItemClick(i)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
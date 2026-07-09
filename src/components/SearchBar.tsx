interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="searchbar">
      <span className="searchbar__icon" aria-hidden="true">🔍</span>
      <input
        type="search"
        className="searchbar__input"
        placeholder="商品名やキーワードで検索（例: キャンプ、登山、ランタン）"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="商品を検索"
      />
    </div>
  );
}

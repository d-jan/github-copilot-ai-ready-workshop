interface HeaderProps {
  productCount: number;
}

export function Header({ productCount }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <span className="header__logo" aria-hidden="true">⛰️</span>
          <div>
            <h1 className="header__title">Outdoor eShop</h1>
            <p className="header__subtitle">山と自然を、もっと身近に</p>
          </div>
        </div>
        <span className="header__count">{productCount} 商品</span>
      </div>
    </header>
  );
}

import { useMemo, useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { ProductGrid } from './components/ProductGrid';
import { products } from './data/products';
import { searchProducts } from './lib/search';

export default function App() {
  const [query, setQuery] = useState('');

  const visibleProducts = useMemo(
    () => searchProducts(products, query),
    [query],
  );

  return (
    <div className="app">
      <Header productCount={products.length} />

      <main className="main">
        <div className="main__intro">
          <h2 className="main__heading">おすすめのアウトドア用品</h2>
          <p className="main__lead">
            登山・キャンプに役立つアイテムを取り揃えています。キーワードで検索してみましょう。
          </p>
        </div>

        <SearchBar value={query} onChange={setQuery} />

        <p className="result-count">{visibleProducts.length} 件の商品</p>

        <ProductGrid products={visibleProducts} />
      </main>

      <footer className="footer">
        <p>Outdoor eShop — GitHub Copilot ワークショップ用サンプル</p>
      </footer>
    </div>
  );
}

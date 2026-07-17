import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetail } from './components/ProductDetail';
import { products } from './data/products';
import { searchProducts } from './lib/search';

function ProductListPage() {
  const [query, setQuery] = useState('');

  const visibleProducts = useMemo(
    () => searchProducts(products, query),
    [query],
  );

  return (
    <>
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
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header productCount={products.length} />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <footer className="footer">
        <p>Outdoor eShop — GitHub Copilot ワークショップ用サンプル</p>
      </footer>
    </div>
  );
}

import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

const priceFormatter = new Intl.NumberFormat('ja-JP');

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="main">
        <div className="detail">
          <p className="empty">商品が見つかりませんでした。</p>
          <Link to="/" className="detail__back">
            ← 商品一覧に戻る
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="detail">
        <Link to="/" className="detail__back">
          ← 商品一覧に戻る
        </Link>

        <div className="detail__content">
          <div className="detail__imagewrap">
            <img
              className="detail__image"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>

          <div className="detail__info">
            <h2 className="detail__name">{product.name}</h2>
            <p className="detail__description">{product.description}</p>
            <p className="detail__price">
              ¥{priceFormatter.format(product.price)}
              <span className="detail__tax">税込</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

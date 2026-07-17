import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('商品詳細ページ遷移', () => {
  it('商品カードをクリックすると詳細ページに遷移する', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const firstCard = screen.getAllByRole('link')[0];
    fireEvent.click(firstCard);

    expect(screen.getByText('← 商品一覧に戻る')).toBeInTheDocument();
    expect(screen.getByText('ソーラー充電式フラッシュライト')).toBeInTheDocument();
  });

  it('詳細ページから「商品一覧に戻る」で一覧に戻れる', () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('← 商品一覧に戻る')).toBeInTheDocument();

    fireEvent.click(screen.getByText('← 商品一覧に戻る'));

    expect(screen.getByText('おすすめのアウトドア用品')).toBeInTheDocument();
  });

  it('存在しない商品 ID の場合は「商品が見つかりませんでした」と表示する', () => {
    render(
      <MemoryRouter initialEntries={['/product/9999']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('商品が見つかりませんでした。')).toBeInTheDocument();
    expect(screen.getByText('← 商品一覧に戻る')).toBeInTheDocument();
  });
});

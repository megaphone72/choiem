# choiem

## 環境構成

| ブランチ | 環境 | URL |
|---------|------|-----|
| `main` | 本番 (Production) | https://choiem.vercel.app |
| `staging` | テスト (Staging) | https://staging-choiem.vercel.app |
| `develop` | 開発 (Development) | 自動プレビュー URL |

## ブランチ運用フロー

```
develop → staging → main
  (開発)   (テスト)  (本番)
```

1. **開発**: `develop` ブランチで作業
2. **テスト**: PR を `staging` にマージ → テスト環境で確認
3. **リリース**: PR を `main` にマージ → 本番公開

## ローカル開発

```bash
# リポジトリのクローン
git clone https://github.com/<your-username>/choiem.git
cd choiem

# develop ブランチに切り替え
git checkout develop
```

## デプロイ

Vercel と GitHub が連携しており、各ブランチへのプッシュで自動デプロイされます。

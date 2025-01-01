📘 minulog

“For personal photography and nature portfolio.”

minulogは、ミニマルデザインのフォトライブラリサイトです。
自然や写真に関する記録を美しく整理し、個人のポートフォリオとして活用できます。

🌟 特徴
	•	簡単な操作性：シンプルで直感的なインターフェース
	•	軽量なデザイン：Sakura.CSSを使用した美しいスタイル
	•	効率的なバックエンド：Golangを活用した軽量サーバー

📁 プロジェクト構造

minulog/
│
├── frontend/             # フロントエンド関連ファイル
│   ├── index.html       # ポートフォリオページ
│   ├── library.html     # ブログ・ライブラリページ
│   ├── styles.css       # カスタムCSS
│
├── backend/              # バックエンド関連ファイル
│   ├── main.go          # Golangサーバー
│   └── app.yaml         # 設定ファイル
│
└── assets/               # 静的ファイル
    ├── images/          # 写真ファイル
    └── blog/            # ブログコンテンツ

🛠 使用技術

Frontend
	•	HTML：セマンティックで簡潔な構造
	•	Sakura.CSS：ミニマルなデザインフレームワーク

Backend
	•	Golang：軽量で高速なサーバーサイドフレームワーク

🌐 ページ概要
	1.	Portfolio (index.html)
	•	撮影作品を展示するメインページ。
	2.	Library (library.html)
	•	ブログや写真の記録を保管・公開。

🚀 ローカル環境での起動方法

1. 必要なツールをインストール
	•	Go (Golang)

2. サーバーを起動

cd backend/
go run main.go

サーバーはデフォルトで http://localhost:8080 で起動します。

3. フロントエンドを確認

ブラウザで http://localhost:8080 を開き、ポートフォリオページを確認します。

📌 TODOリスト
	•	写真のアップロード機能
	•	ライブラリのカテゴリ分け
	•	ユーザー認証システムの追加
	•	モバイル最適化デザイン

📄 ライセンス

このプロジェクトは自由に利用可能ですが、個人利用に限ります。商業利用の場合は事前に連絡してください。

「minulog」で素敵な写真ポートフォリオを作成しましょう！ 📸
import { kv } from '@vercel/kv';

const COUNTER_KEY = 'choiem:page_visits';

export default async function handler(req, res) {
    // CORS ヘッダー
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Cache-Control', 'no-store');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (req.method === 'POST') {
            // アクセスカウントをインクリメントして返す
            const count = await kv.incr(COUNTER_KEY);
            return res.status(200).json({ count });
        }

        if (req.method === 'GET') {
            // 現在のカウントを返す（インクリメントしない）
            const count = (await kv.get(COUNTER_KEY)) || 0;
            return res.status(200).json({ count });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error('KV error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

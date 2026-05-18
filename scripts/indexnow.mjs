// Submit all site URLs to Bing via IndexNow
// Usage: node scripts/indexnow.mjs
const KEY = 'd2a743db2dff4988cc9c9b54f9974edf'
const HOST = 'highestfundedgame.com'
const urls = ['/', '/the-story'].map(p => `https://${HOST}${p}`)
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
})
res.ok ? console.log(`✅ ${urls.length} URLs submitted (HTTP ${res.status})`) : console.error(`❌ HTTP ${res.status}: ${await res.text()}`)

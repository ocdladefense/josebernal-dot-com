import { createRoot } from 'react-dom/client';

const pdfExamples = [
    {
        label: 'House District 1 map (8.5 × 11)',
        url: encodeURI('https://geo.maps.arcgis.com/sharing/rest/content/items/4f1befdfdc17469ebc73b76e508cb259/data')
    },
    {
        label: 'House District 1 map (34 × 44)',
        url: 'https://geo.maps.arcgis.com/sharing/rest/content/items/6d7d2442a1bd4a77a347381e4d87ecf4/data'
    },
    {
        label: 'Senate District 1 map (8.5 × 11)',
        url: 'https://geo.maps.arcgis.com/sharing/rest/content/items/19d6fe61f0b745f6a2fd3a204d63767a/data'
    },
    {
        label: 'Senate District 1 map (34 × 44)',
        url: 'https://geo.maps.arcgis.com/sharing/rest/content/items/b147e462d1da4dd2a825f25a00ac31e3/data'
    }
];

const root = createRoot(document.getElementById('app'));

root.render(
    <main style={{ margin: '2rem auto', maxWidth: '40rem', padding: '0 1rem', fontFamily: 'sans-serif' }}>
        <h1>PDF Examples</h1>
        <ul>
            {pdfExamples.map(({ label, url }) => (
                <li key={url}>
                    <a href={url}>{label}</a>
                </li>
            ))}
        </ul>
    </main>
);

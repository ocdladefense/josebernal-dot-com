import { createRoot } from 'react-dom/client';

const pdfExamples = [
    {
        label: 'Letter to Sean O\'Day regarding residential exposure to kiln exhaust at the Jax residential building, Corvallis, Oregon.',
        url: '/documents/Request%20for%20Enforcement%20-%20Director%2C%20DCBS.pdf'
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

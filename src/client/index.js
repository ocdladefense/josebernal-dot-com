import { createRoot } from 'react-dom/client';

const pdfExamples = [
    {
        label: 'Letter to Sean O\'Day regarding residential exposure to kiln exhaust at the Jax residential building, Corvallis, Oregon - February 26, 2026',
        url: '/documents/Request%20for%20Enforcement%20-%20Director%2C%20DCBS.pdf'
    }
];

const root = createRoot(document.getElementById('app'));

root.render(
    <>
        <main style={{ margin: '2rem auto', maxWidth: '40rem', padding: '0 1rem', fontFamily: 'sans-serif' }}>
            <h1>Documents related to residential exposure to kiln exhaust</h1>
            <ul>
                {pdfExamples.map(({ label, url }) => (
                    <li key={url}>
                        <a href={url}>{label}</a>
                    </li>
                ))}
            </ul>
        </main>
        <footer style={{ margin: '2rem auto', maxWidth: '40rem', padding: '0 1rem', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
            This website is an independent, non-commercial public records archive and property condition safety log maintained by an affected party. It is not affiliated with, sponsored by, or associated with Little Blitzen River LLC, Gerding Builders, or Sterling Management.
        </footer>
    </>
);

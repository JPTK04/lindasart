import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// Aktualisierung alle 60 Sekunden (Performance + Aktualität)
export const revalidate = 60;

const QUERY = `*[_type == "homepage"][0] {
  headline,
  subline,
  heroImage,
  gallery,
  footerText
}`;

export default async function Home() {
    const data = await client.fetch(QUERY);

    if (!data) return <div style={{padding: 40}}>Loading... (Bitte Content im Studio anlegen)</div>;

    return (
        <div style={styles.container}>

            {/* --- HERO SECTION --- */}
            <header style={styles.heroSection}>
                <div style={styles.heroTextContainer}>
                    <h1 style={styles.headline}>{data.headline?.toUpperCase()}</h1>
                    <p style={styles.subline}>{data.subline?.toUpperCase()}</p>
                </div>

                {data.heroImage && (
                    <div style={styles.heroImageWrapper}>
                        <Image
                            src={urlFor(data.heroImage).url()}
                            alt="Hero"
                            fill // Füllt den Container komplett aus
                            style={{ objectFit: 'cover' }} // Schneidet das Bild passend zu
                            priority
                            unoptimized // Wichtig für deinen lokalen Fehler
                        />
                    </div>
                )}
            </header>

            {/* --- GALLERY SECTION --- */}
            <section style={styles.gallerySection}>
                {data.gallery?.map((image: any, index: number) => (
                    <div key={index} style={styles.galleryItem}>
                        <Image
                            src={urlFor(image).width(1200).url()}
                            alt={image.alt || "Portfolio Image"}
                            width={800}
                            height={1000} // Hochformat sieht meist edler aus
                            style={styles.galleryImage}
                            unoptimized
                        />
                    </div>
                ))}
            </section>

            {/* --- FOOTER --- */}
            <footer style={styles.footer}>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                    {data.footerText || "© 2025 Lindas Art"}
                </p>
            </footer>

        </div>
    );
}

// --- STYLES (CSS in JS für Clean Look) ---
const styles = {
    container: {
        fontFamily: 'Helvetica, Arial, sans-serif', // Klassisch, sauber
        color: '#1a1a1a',
        backgroundColor: '#ffffff',
        minHeight: '100vh',
    } as React.CSSProperties,

    // Hero
    heroSection: {
        height: '90vh', // Fast volle Bildschirmhöhe
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: '100px', // Viel Weißraum nach unten
    } as React.CSSProperties,

    heroTextContainer: {
        zIndex: 10, // Text über dem Bild (falls gewünscht) oder darüber
        textAlign: 'center',
        marginBottom: '2rem',
    } as React.CSSProperties,

    headline: {
        fontSize: 'clamp(2rem, 8vw, 6rem)', // Responsive Schriftgröße
        fontWeight: '300', // Dünne Schrift wirkt edel
        letterSpacing: '0.2em', // Spationierung (Abstand zwischen Buchstaben) macht es "teuer"
        margin: 0,
    } as React.CSSProperties,

    subline: {
        fontSize: '1rem',
        letterSpacing: '0.4em',
        marginTop: '1rem',
        opacity: 0.7,
    } as React.CSSProperties,

    heroImageWrapper: {
        width: '100%',
        height: '60vh', // Bild nimmt 60% der Höhe ein
        position: 'relative',
        maxWidth: '1200px', // Nicht breiter als 1200px
    } as React.CSSProperties,

    // Gallery
    gallerySection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Responsive Grid
        gap: '40px', // Großer Abstand zwischen Bildern
        padding: '0 40px',
        maxWidth: '1600px',
        margin: '0 auto',
    } as React.CSSProperties,

    galleryItem: {
        display: 'flex',
        justifyContent: 'center',
    } as React.CSSProperties,

    galleryImage: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        filter: 'grayscale(0%)', // Optional: grayscale(100%) für Schwarz-Weiß Look
        transition: 'opacity 0.3s ease',
    } as React.CSSProperties,

    // Footer
    footer: {
        padding: '100px 40px',
        textAlign: 'center',
        marginTop: '50px',
        borderTop: '1px solid #eee',
    } as React.CSSProperties,
};
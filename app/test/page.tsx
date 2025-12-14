import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// Das ist die "Bestellung" an die Küche (Query)
// Wir sagen: "Hol mir das Dokument vom Typ 'testPage'. Und zwar das erste ([0]), das du findest."
const QUERY = `*[_type == "testPage"][0] {
  title,
  description,
  mainImage
}`;

export default async function TestPage() {
    // Hier holen wir die Daten (passiert auf dem Server)
    const data = await client.fetch(QUERY);

    // Falls du im Studio noch nicht auf "Publish" gedrückt hast:
    if (!data) {
        return <h1>Keine Daten gefunden! Hast du im Studio 'Publish' gedrückt?</h1>;
    }

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>

            {/* Titel anzeigen */}
            <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                {data.title}
            </h1>

            {/* Bild anzeigen (falls eines hochgeladen wurde) */}
            {data.mainImage && (
                <div style={{ marginBottom: '20px' }}>
                    <Image
                        src={urlFor(data.mainImage).width(800).url()}
                        alt="Test Bild"
                        width={800}
                        height={500}
                        style={{ borderRadius: '10px', objectFit: 'cover' }}
                    />
                </div>
            )}

            {/* Beschreibung anzeigen */}
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                {data.description}
            </p>

        </div>
    );
}
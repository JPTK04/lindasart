import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Inhalt')
    .items([
      S.listItem()
        .title('Startseite')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.listItem()
        .title('Über Mich (About)')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
        ),
      S.divider(),
      S.listItem()
        .title('Websites (Work)')
        .child(
          S.document()
            .schemaType('workPage')
            .documentId('workPage')
        ),
      S.divider(),
      S.listItem()
        .title('Einstellungen (Footer)')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),
    ])

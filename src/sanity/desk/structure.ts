import { StructureBuilder } from 'sanity/desk'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Services')
        .child(
          S.documentList()
            .title('Services')
            .filter('_type == "service"')
            .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('News')
        .child(
          S.documentList()
            .title('News')
            .filter('_type == "news"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
    ]) 
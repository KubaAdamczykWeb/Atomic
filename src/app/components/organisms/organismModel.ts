export enum OrganismTypes {
  Article,
  ArticleWithPhoto,
  Footer,
  Header,
  Title,
  Tree,
  Label,
  LabelWithIcon
}

export interface Mutable {
  type: OrganismTypes,
  data: object
}

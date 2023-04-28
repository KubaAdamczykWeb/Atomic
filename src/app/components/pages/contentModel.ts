import { Mutable } from '../organisms/organismModel'

export enum Template {
  oneColumn,
  twoColumn
}

interface ColumnContent {
  mutables?: Mutable[]
}

export interface PageContent {
  template?: Template,
  title?: Title,
  columnA?: ColumnContent,
  columnB?: ColumnContent
}

interface Title {
  text: string
}

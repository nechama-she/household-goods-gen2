export interface ArticlePage {
  id: string;
  title: string;
  mainParagraph: string;
  h2Paragraph: string;
  conclusion: string;
  h3List: Paragraph[];
}
export interface Paragraph {
  id: string;
  title: string;
  paragraph: string;
  list?: Paragraph[];
}

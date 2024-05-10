export interface ArticlePage {
    id:string,
    title: string,
    mainParagraph: string,
    h2Paragraph: string;
    conclusion: string;
    h3List: H3Paragraph[];
}
export interface H3Paragraph {
    id:string,
    title: string,
    paragraph: string
}

import { Row } from "./row";
export interface Table {
    columnHeaders: string[],
    rows: Row[], 
    lastUpdate: string;
    textLastUpdate: string;
}

export interface Card{
    id: number,
    series: number,
    number: number,
    release_date: string,
    end_date: string,
    balanse: number,
    status: string
}


export interface ICardHistory {
    purchase_date: string,
    sum: number
}
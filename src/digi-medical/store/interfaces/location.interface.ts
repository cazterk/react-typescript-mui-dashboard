
export interface Province{
    slug?: string;
    location: string;

}

export interface District{
    slug?: string;
    location: string;
    province: number;
}
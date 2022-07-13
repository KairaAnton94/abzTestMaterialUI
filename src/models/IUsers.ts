export interface IUsers{
    "success": boolean,
    "page": number,
    "total_pages": number,
    "total_users": number,
    "count": number,
    "links": {
        "next_url": string,
        "prev_url": string | null
    }
    "users": IUser[]
}
interface IUser{
    "id": string,
    "name": string,
    "email": string,
    "phone": string,
    "position": string,
    "position_id": string,
    "registration_timestamp": number,
    "photo": string
}
export interface IArgumentUsers{
    page: number,
    count: number
}

export interface ICreateUser{
    name: string,
    email:string,
    phone: string,
    position_id:number,
    photo: string
}
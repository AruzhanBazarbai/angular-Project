export interface User {
    id: string
    name: string
    email: string
    address: string
    password: string
}
export interface Users {
    users: Array<User>
}
import { Po } from "../Entities/BC/Po";


export interface PoRepository {
    GetPo(): Promise<Po[]>
}
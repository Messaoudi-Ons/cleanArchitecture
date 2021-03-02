import { Po } from "../Entities/BC/Po";
import { PoRepository} from "../Repositories/PoRepository";
export interface PoService {
    GetPo(): Promise<Po[]>
}

export class PoServiceImpl implements PoService {
    poRepo: PoRepository

    constructor(ir: PoRepository) {
        this.poRepo = ir
    }

    async GetPo(): Promise<Po[]> {
        return this.poRepo.GetPo()
    }
}
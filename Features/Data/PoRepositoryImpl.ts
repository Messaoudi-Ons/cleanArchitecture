import { Po } from '../Domain/Entities/BC/Po';
import { PoRepository } from '../Domain/Repositories/PoRepository';


class PoDTO {
    POID = 0
    DESCRIPTION= ""
}

export class PoRepositoryImpl implements PoRepository {
    jsonUrl =
"http://maxgps.smartech-tn.com:9876/maxrest/rest/os/SM1421?_compact=1&_uw=((upper(receipts)%20%3D%20%27NONE%27%20or%20upper(receipts)%20%3D%20%27PARTIAL%27)%20and%20historyflag%20%3D%200)&_lpwd=maxadmin&_lid=maxadmin&_format=json"
    async GetPo(): Promise<Po[]> {
        const res = await fetch(this.jsonUrl)
        const jsonData = await res.json()
        return jsonData.map((po: PoDTO) => new Po (po.POID, po.DESCRIPTION))
    }
}
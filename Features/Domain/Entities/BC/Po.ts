import { Doclink } from './Doclink';
import { Company } from './Company';
import { Poline } from './Poline';
import { Currencycode } from './Currencycode';
import { Status } from './Status';
export class Po {
    rowstamp:       string;
    CURRENCYCODE:   Currencycode;
    DESCRIPTION:   string;
    ORDERDATE:      Date;
    POID:           number;
    PONUM:          string;
    PRETAXTOTAL:    number;
    REVISIONNUM:    number;
    SITEID:         number;
    SM_SENDEMAIL:   boolean;
    STATUS:         Status;
    STATUSDATE:     Date;
    TOTALCOST:      number;
    TOTALTAX1:      number;
    TOTALTAX2:     number;
    VENDOR:        string;
    POLINE:        Poline[];
    COMPANIES:     Company[];
    DOCLINKS:      Doclink[];
    PURCHASEAGENT: string;
    REQUIREDDATE:  Date;
    constructor(id: number, stat: string) {
        this.POID= id
        this.DESCRIPTION = stat
    }
}

import { Itemsetid } from './Itemsetid';
import { Linetype } from './Linetype';

export interface Poline {
    rowstamp:     string;
    DESCRIPTION: string;
    GLDEBITACCT: string;
    ITEMNUM:     string;
    ITEMSETID:   Itemsetid;
    LINECOST:     number;
    LINECOST1:   number;
    LINETYPE:     Linetype;
    LOADEDCOST1: number;
    ORDERQTY:    number;
    ORDERUNIT:   string;
    POLINEID:     number;
    POLINENUM:    number;
    UNITCOST:    number;
    PRLINENUM:   number;
    PRNUM:       string;
    REFWO:       string;
}

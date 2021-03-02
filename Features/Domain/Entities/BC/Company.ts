import { SmPwemail } from './smPwemail';
import { SmLangcode } from './SmLangcode';
import { Orgid } from './Orgid';
export interface Company {
    rowstamp:     string;
    COMPANY:      string;
    CUST_SUBST:   boolean;
    NAME:         string;
    ORGID:        Orgid;
    SM_ISCRM:     boolean;
    SM_PWEMAIL:  SmPwemail;
    SM_LANGCODE: SmLangcode;
}


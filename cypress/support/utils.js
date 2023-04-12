import { v4 as uuidv4 } from 'uuid';

class utils{

    getRandomString(length =8){

        return uuidv4().replace('-','').substring(0,length)

    }


}

export default new utils()
function getUserScope(userType){

    switch(userType){
        case ((userType == "owner") || (userType="admin")):
            return "owner has read, write and delete access to the doc"
            break;
        case "collaborator":
            return "collaborator has read  and write access"
            break;
        case "user":
            return "user has read only access"
            break
        default:
            return "given user type does not have access to the doc"    
    }

}

let userAccess = getUserScope("admin")

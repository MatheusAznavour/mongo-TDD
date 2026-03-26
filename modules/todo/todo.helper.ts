function convertBool(e: string){
    switch(e){
        case "True":
        case "true":
            return true
        case "False":
        case "false":
            return false
    };
};

export {
    convertBool
}

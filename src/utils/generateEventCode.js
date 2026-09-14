function generateEventCode() {

    const chars =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";

    for(let i=0;i<6;i++){

        const random =
            Math.floor(Math.random()*chars.length);

        code += chars[random];

    }

    return code;

}

export default generateEventCode;
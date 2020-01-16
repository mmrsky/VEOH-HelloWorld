function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms));
}


class order {
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }


    Summarize = async ()=>{
        console.log('start summarize');
        await sleep(2000);
        const summary = 'order id: ' + this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
        console.log('stop summarize');
        return summary;
    }    
    Deliver = async (kissa)=>{
        await sleep(1000);
        this.delivered = true;
    }
}


let orderObj = new order(1234,'second order');
//(parameters)=>{code}

orderObj.Deliver().then((delivered)=> {
    console.log('delivered status ' +orderObj.delivered)
});
const orderSummary = orderObj.Summarize().then((sumParam)=> {
    console.log(sumParam);
});



console.log('1222');




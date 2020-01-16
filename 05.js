
class order {
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }

    Summarize() {
        const summary = 'order id: ' + this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
        return summary;
    }

    Summarize2 = ()=>{
        const summary = 'order id: ' + this.id + ', message: ' + this.message + ', delivered: ' + this.delivered;
        return summary;
    }    
}




let orderObj = new order(1234,'second order');

var orderSummary = orderObj.Summarize2(orderObj.id, orderObj.message, orderObj.delivered);
console.log(orderSummary);



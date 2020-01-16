
class order {
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }
}


function SummarizeOrder(id, message, delivered) {
    var summary = 'order id: ' + id + ', message: ' + message + ', delivered: ' + delivered;
    return summary;
}

let orderObj = new order(1234,'second order');

var orderSummary = SummarizeOrder(orderObj.id, orderObj.message, orderObj.delivered);
console.log(orderSummary);



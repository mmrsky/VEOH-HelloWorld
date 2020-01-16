var orderId = 1234;
var orderMessage = 'My order';
var orderDelivered = false;


function SummarizeOrder(id, message, delivered) {
    var summary = 'order id: ' + id + ', message: ' + message + ', delivered: ' + delivered;
    return summary;
}

var orderSummary = SummarizeOrder(orderId, orderMessage, orderDelivered);
console.log(orderSummary);
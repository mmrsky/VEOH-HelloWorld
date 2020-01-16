
let order = {
    id: 1234,
    message: 'my order',
    delivered: false
}


function SummarizeOrder(id, message, delivered) {
    var summary = 'order id: ' + id + ', message: ' + message + ', delivered: ' + delivered;
    return summary;
}

var orderSummary = SummarizeOrder(order.id, order.message, order.delivered);
console.log(orderSummary);

orderDelivered = true;

var orderSummary2 = SummarizeOrder(order.id, order.message, order.delivered);
console.log(orderSummary2);

// error vakiota ei voi muuttaa
// orderId = 2222;

// var orderSummary3 = SummarizeOrder(orderId, orderMessage, orderDelivered);
// console.log(orderSummary3);
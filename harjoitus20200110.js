
function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms));
}


class worker {
    constructor(n_food) {
        this.n_food = n_food;
    }

    do_work = async (duration)=> {
        if(this.n_food) {
            console.log('started work: '+ duration);
            await sleep(duration);
            this.n_food -= 1;
            console.log('Ruokaa jäljellä: ' + this.n_food);
        }
        else {
            console.log("Ruokaa ei ole jäljellä riittävästi työn tekemiseen! " + this.n_food)
        }
    }
}

let worker_object = new worker(3);
worker_object.do_work(1000).then(()=>{
    return worker_object.do_work(1000);
}).then(()=> {
    return worker_object.do_work(3000);
}).then(()=> {
    return worker_object.do_work(2000);
}).then(()=> {
    return worker_object.do_work(1500);
}).then(()=> {
    return worker_object.do_work(2000);
});


console.log('work started');






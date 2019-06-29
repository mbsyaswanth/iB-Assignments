let carslist = [
    {
        id: '5',
        color: 'black',
        speed: '120',
        model: 'maruthi',
        fuel: 'petrol'
    },
    {
        id: '2',
        color: 'white',
        speed: '150',
        model: 'tesla',
        fuel: 'battery'
    },
    {
        id: '3',
        color: 'red',
        speed: '130',
        model: 'ford',
        fuel: 'petrol'
    }
];

function showroom(id, cars, addr) {
    this.id = id;
    this.cars = cars;
    this.addr = addr;
    this.addcar = function (car) {
        if(!this.checkCarAvailability(car)){
            this.cars.push(car);
            console.log("car added to showroom :",this.cars);
        } else {
            console.log("car already available in showroom ",this.cars);
        }
    };
    this.checkCarAvailability = function (car) {
        for (i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id == car.id) {

                //console.log("car found in showroom");
                return true;
            }
        }
        //console.log("car not available in showroom. please choose another car");
        return false;
    };
    this.removecar = function (rcar) {
        if (this.checkCarAvailability(rcar)) {
            let filcar = this.cars.filter(function (car) {
                return car.id !== rcar.id;
            });
            if (filcar.length == this.cars.length) {
                //console.log("failed to remove car.");
                return false;
            } else {
                this.cars = filcar;
                //console.log("removed the car from showroom :" + this.cars)
                return true;
            }
        } else{
            //console.log("car not available in showroom");
        }
    };
}

let showroom1 = new showroom(1, carslist, "Madhapur");

let PersonA = {
    firstName: "b",
    lastName: "kiran",
    carsWishList: [],
    carsOwned: [],
    buyCar: function(car, showroom){
        if(!this.searchOwnedCars(car)){
            if (showroom.checkCarAvailability(car)) {
                if(this.searchWishlist(car)){
                    this.removeFromWishlist(car);
                }
                if(showroom.removecar(car)){
                    this.carsOwned.push(car);
                    console.log("you have successfully bought this car  : " + this.carsOwned);
                }
            };
        }
    },
    searchOwnedCars: function(car) {
        for (i = 0; i < this.carsOwned.length; i++) {
            if (this.carsOwned[i].id == car.id) {
                console.log("You already own this car");
                return true;
            }
        }
        //console.log("You dont have this car.");
        return false;
    },
    addToWishlist: function (car) {
        if(!this.searchWishlist(car)){
            this.carsWishList.push(car);
            console.log("car added to persons wishlist " + " :" + this.carsWishList);
        }
    },
    searchWishlist: function(car) {
        for (i = 0; i < this.carsWishList.length; i++) {
            if (this.carsWishList[i].id == car.id) {
                //console.log("car found in wishlist");
                return true;
            }
        }
        //console.log("car not found in wishlist");
        return false;
    },
    removeFromWishlist: function(car) {
        if (this.searchWishlist(car)) {
            let filcar = this.carsWishList.filter(function (wcar) {
                return wcar.id !== car.id;
            });
            if (filcar.length == this.carsWishList.length) {
                //console.log("failed to remove car from wishlist.");
                return false;
            } else {
                this.carsWishList = filcar;
                //console.log("removed the car from wishlist :", this.cars)
                return true;
            }
        }
    }
}

// test 

console.log("all available cars in showroom :" + showroom1.cars);
PersonA.buyCar({
    id: '2',
    color: 'white',
    speed: '150',
    model: 'tesla',
    fuel: 'battery'
}, showroom1);



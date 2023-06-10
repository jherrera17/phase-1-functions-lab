const headquarters = 42;

function distanceFromHqInBlocks(someValue) {
     if (someValue > 42) {
        return (someValue - headquarters);
     }
     else if (someValue < 42) {
        return (headquarters - someValue);
     }
}

function distanceFromHqInFeet(someValue) {
     let feet = (distanceFromHqInBlocks(someValue) * 264);
     return feet;
}

function distanceTravelledInFeet(start, destination) {
    if ((destination - start) >= 1) {
        let distance = (destination - start) * 264;
        return distance;
    }
    else if ((destination - start) < 1) {
        let distance = (start - destination) * 264;
        return distance;
    }
}

const farePrice = 0.02
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        let price = distanceTravelledInFeet(start, destination) * 0;
        return price;
    }
    else if (distanceTravelledInFeet(start, destination) > 400) {
        if (distanceTravelledInFeet(start, destination) < 2000) {   
            let price = (distanceTravelledInFeet(start, destination) - 400) * farePrice;
            return price;
        } 
        else if (distanceTravelledInFeet(start, destination) < 2500) {
            let price = 25;
            return price;
        }
        else if (distanceTravelledInFeet(start, destination) > 2500) {
            let price = "cannot travel that far";
            return price; 
        }
    }    
}
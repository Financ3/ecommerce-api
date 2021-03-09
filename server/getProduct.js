const products = require('../products.json');

const getProduct = (req, res) => {
    let userToReturn = {};
    let isFound = false;
    for (let i=0; i<products.length; i++){
        if(+req.params.id === products[i].id) {
            userToReturn=products[i];
            isFound=true;
        } 
    }
    if (isFound) {
        res.status(200).send(userToReturn);
    } else {
        res.status(500).send("Item not in list");
    }
}

module.exports = getProduct

export const getData = (category) => {
    fetch(`https://www.reddit.com/r/${category}.json`)
        .then(function(res) {
        return res.json();   // Convert the data into JSON
        })
        .then(function(data) {
        console.log(data);   // Logs the data to the console
        })
        .catch(function(err) {
        console.log(err);   // Log error if any
        });
}

getData('programmerHumour');

export const listings = [ {
    id: 1,
    name: 'Listing 1'
},  {
    id: 2,
    name: 'Listing 2'
}, {
    id: 3,
    name: 'Listing 3'
}, {
    id: 4,
    name: 'Listing 4'
}];
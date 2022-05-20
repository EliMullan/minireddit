
const baseURL = 'https://www.reddit.com/r/';
const endpoint = 'ProgrammerHumor';

export async function getReddits() {
    try {
        const response = await fetch (`${baseURL}${endpoint}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            
        }
        throw new Error ('Request failed');
    } catch (err) {
        console.log(err);
    }
}


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
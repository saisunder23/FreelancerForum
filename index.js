const names = ["Alice", "Bob", "Carol", "Vishnu", "Krishna", "Rama"]
const occupations = ["Writer", "Teacher", "Programmer", "President", "Doctor", "Astronaut"]
const maxNmames = 10;
const freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
  ];


//   set interval 

const addFreelancerInterval = setInterval(addFreelancer, 1000); 
render(); 

// initial state 


function render() {
    // Render the freelancer names 
    const listElement = document.querySelector("#freelancersList");
    const freelancersElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.classList.add(freelancers.name, freelancers.price, freelancers.occupation);
        return element;
});
freelancers.replaceChildren(...freelancersElements);

//  Add average price 

const averagePrice = calculateAveragePrice(); 
const averagePriceElement = document.querySelector("#averagePrice");
averagePriceElement.textContent = `The average starting price is $${averagePrice.toFixed(2)}.`;

}


// Function to calculate average starting price 
function calculateAveragePrice() {
    // Sum of prices
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    // Divide by the number of freelancers
    return total / freelancers.length;
}



//  add random name to the array 

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 100) + 20; // Random price between 20 and 120

    const newFreelancer = { name, price, occupation };
    freelancers.push(newFreelancer);

    render();
}



// Set interval to add a new freelancer every few seconds
const addFreelancerInterval = setInterval(addFreelancer, 3000);
render(); // Initial render


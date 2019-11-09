// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// Getting promises
const axiosPromises = axios.get(
  "https://lambda-times-backend.herokuapp.com/topics"
);

const topics = document.querySelector(".topics");

function newTopic() {
  const data = axiosPromises.then(response => {
    // getting data from link
    const newData = response.data.topics;
    // iterate through the data
    newData.forEach(topic => {
      // Creating a new div for each topic
      const tab = document.createElement("div");
      // adding class
      tab.classList.add("tab");
      // Content
      tab.textContent = topic;
      // append
      topics.append(tab);
    });
  });
}

newTopic();

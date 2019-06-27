# Car Marketplace Challenge

Design and implement a React + Redux application that we gonna use for
managing our cars.

### Functional Requirements:
1. User can preview car details like it is presented in mockup
2. User should be able to update following fields: Physical Status, Legal Status,
Seller Status, Make, Model, Trim, and Engine type
3. Make, Model and Trim are depending on each other - Model can’t be selected
if Make is not selected, and Trim can’t be selected if Make and Model is not
selected
4. User should be able to add tasks for car, when user press on “+” button we
should to show him modal with form for new tasks, each task has Type,
Comment
5. User should be able to set task status to completed
   
### Non-Functional Requirements:
1. Use graphQL for communication with server (https://fcg-fetest.herokuapp.com/)
2. Options for Physical Status, Legal Status, Seller Status and Engine type
could be found in graphQL documentation (pass it as a static options to
select)
3. Options for Make, Model and Trim should be retrieved from api (check
graphQL doc)
4. Use React and Redux implementation. You are free to use any Redux
middlewares you prefer
The attached mockup is to be used as a reference point. You do not need to
implement it exactly as long as you cover the requirements above.
Feel free to use any other libraries you think would be useful. 

![Mockup](/images/mockup.png)
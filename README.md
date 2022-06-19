# LEGO ASSIGNMENT

This project was created for LEGO interview where the requirements are: 

•	Sort out all the vendors and the materials that the vendor offers.  

•	For each material, find the cheapest vendor and its deliver time. 
Note: different vendors offer their material in different currency and weight unit, so you need to take the currency, and weight conversion into consideration. 

•	Find the best offer for the material Polymethyl Methacrylate (PMMA) and the melting point between 200C to 300C.  Note: you should also consider the deliver time and cost, and eco-friendly, etc. 

•	[Open question] - Any issues with the data model, and how can we improve it? 
- The data model is very clear and readable, referencing the vendors with their ID. The conversions in currency and units were needed to be made, although the logic is usually implemented in code. In my opinion, there could be another table with names of the materials which would be in relations to currecnt materials, since the names are too long and sometimes more difficult to use in if or switch statements. Each material with the name could have and ID which would represent it. 

•	[Open question] - Any other filter options you might think that might be useful?  
- Having more filters is always a good option, since the user/developer can see exactly what he is looking for. I would add a filter, which would focus on user's preferences, such as find the material which is ECO friendly, find the material that has the lowest days in delivering, find the material that is the cheapest. 
- Another filter could be selecting the best option of each material and comparing the best ones together, to see the material's best option. 
- Basic filters such as sorting according to the melting points, price or days for delivering or based on colour are always good to have. 

•	This project has some functionalities that are displayed in the table and some of them are in console. The project has a workflow to show the work with CI/CD and could be deployed to a cloud service in the future. The design is simple, easy for user to manage. The whole project is coded in React Typescript.  

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

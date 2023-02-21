# ArpiaTest_FE
The test is to build web app in React. There is no predefined design so you have freedom to visually define how app will look. This is purely FE app and no additional BE is required.

Description:
App should have header, footer and content. 

Header: 
Should contain some app name as logo. It should also contain a button where you change content layout from thumbnail grid to list view.

Content: 
Inside content show users which you fetch from GET https://jsonplaceholder.typicode.com/users. Initial layout should be the grid of thumbnails. Chose part of information you wanna show from response. 
Every user needs to have avatar. You will be using Avatars by DiceBear. 
They provide a free API to create unique avatar images based on any string we send as query parameter. Each string generates a unique image.
-You will use the username to generate a unique avatar for each user.
GET example of call
https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy
The {{username}} in the URL is the placeholder for the user's username. It should be dynamically replaced by the username received from the users API endpoint

- Thumbnail grid / list view should have option of sorting.
- On thumbnail hover we should display tooltip info with user name. 
- Each Thumbnail will have tree actions. Details edit and delete.

You can use icons to represent these actions. 
Details should open a new route showing a detail page where with all informations listed of the specific user. 
Edit should open popup where you would change/update info from thumbnail item/ list item.
Delete should open confirmation dialog where you remove user from thumbnail grid / list view.

Footer: 
free interpretation

Some guidelines:

Chose your own stack and libraries you want to use, we would suggest to go with Ant Design on UX part  but in the end its your decision and were open for alternatives.
Don't use some example solutions from web, aim of this test is to evaluate your code styling, how you think and solve problems
Write clean, scalable and reusable code
Tests are always welcome but not mandatory
 Preferrably use TypeScript
Extra points if it also works on mobile
Make it as awesome as possible

Usually, we set a time frame of a 5 days to complete the test and return it to us but it would be bonus if you can deliver sooner. When you are finished, please push this code to a public git repository and share url with us.

Have Fun!
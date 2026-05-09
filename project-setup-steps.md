# 1. Create nextjs app
    - npx create-next-app@latest frontend-nextjs-shadcn
# 2. Initialize Shadcn
    - cd frontend-nextjs-shadcn
    - npx shadcn@latest init  
# 3. Create strapi app
    - cd ..
    - npx create-strapi-app@latest backend-strapi
# 4. Create Test data in Strapi
    - Open strapi by running npm run dev inside backend-strapi
    - Go to strapi dashoard at http://localhost:1337/
    - Go to Content-Type builder and create a new `Single Type` and provide Name as `Home Page`
    - create a text field called `name`
    - Click on add another field button and create another field called `description`
    - Go to Settings
    - Under Users and Permissions settings, click on `Roles`. You will get a list of Roles
    - Click on `Public` in the list of Roles
    - Under Permissions section in Public, click on expand icon in `Home Page` and select `find` checkbox
    - Once `find` is checked, on the right side pane you will see the api path for Home page. copy it and save it somewhere to use.
    
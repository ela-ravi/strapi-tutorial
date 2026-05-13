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
    

# 5. install qs and @types/qs libraries to build querystrings for strapi api calls
    - Created homePageQueryString using qs.stringify
    - Using URL library (inbuilt with typescript) to build api url (basedomain + path + searchQuery)
    - fetch the strapi data for Homepage (/api/home-page (path))
    - `{ cache: 'no-store' }` on that `fetch`: Next.js normally caches `fetch` results (so the same URL can reuse old JSON). `no-store` turns that off—every request goes to Strapi again, which matches “I’m editing in the admin and I want refresh to show it” while wiring things up (later you can use `revalidate` (cache apis for some seconds) / tags (control apis refreshment based on tags directly from CMS) if you want caching with controlled freshness).


# 6. Refer https://strapi.io/blog/epic-next-js-15-tutorial-part-3-finishup-up-the-homepage-features-section-top-navigation-and-footer
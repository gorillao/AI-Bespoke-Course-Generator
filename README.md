
## AI-Bespoke-Course-Generator

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's a comprehensive AI app that creates custom courses based on user-provided titles and units. Leveraging OpenAI's API and prompt-engineering, it generates courses for just about any topic. The possibilities are limitless! With sign-in capability using Google Cloud API, this app also generates pertinent images via Unsplash API and relevant YouTube videos using YouTube's API. A summary section succinctly summarizes the video transcript. This application uses Prisma, an open-source ORM which sets up all the settings for the MySQL-compatible serverless database - PlanetScale.

## Getting Started

To kick things off, run the development server on your terminal from the root directory of this project. We start with `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to view the result.

The page should look like the following image when you sign in:

![lj1](https://github.com/gorillao/AI-Bespoke-Course-Generator/assets/140755916/aaf6104f-a818-458d-8e1a-9e658bf16bd6)

You can start customizing the page by modifying `app/page.tsx`. The page auto-refreshes as you edit the file. We utilize [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to seamlessly load and optimize Inter, a customized Google Font.

The Gallery page displays courses you've generated. Check out these examples! You can create courses ranging from straightforward to complex topics.

![lj2](https://github.com/gorillao/AI-Bespoke-Course-Generator/assets/140755916/9beb8222-9928-4983-911c-e48a30ecd7d1)

Hit the 'create course' button to create your first course and enter the titles and units. Add as many units as you wish by clicking 'Add Unit'. 3 units is the default number.

![lj-3](https://github.com/gorillao/AI-Bespoke-Course-Generator/assets/140755916/026b31ae-c396-4f61-a4a4-98fdc10dd373)

All pages can be viewed in both light and dark themes. My preferred choice is the dark theme.

![lj-4](https://github.com/gorillao/AI-Bespoke-Course-Generator/assets/140755916/bc8c7ddf-fd4c-409f-8fdc-d1109955f20d)

Following successful course generation, your page should resemble the image below.

![lj-5](https://github.com/gorillao/AI-Bespoke-Course-Generator/assets/140755916/270352e9-2ed7-4045-94db-b0c3c2c7b7b6)

Each chapter of the course features a related YouTube video along with a concise summary of the video transcript.

![lj-11](https://github.com/gorillao/AI-Bespoke-Course-Generator/assets/140755916/5f995580-b0fd-4cb9-967f-81557fb42a2b)

You can revisit the generated course from the course gallery at any time. Enjoy your course creation experience!

## Learn More

To learn more about Next.js, check these resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

For [the Next.js GitHub repository](https://github.com/vercel/next.js/), feel free to provide your feedback and contribute!

## Deploy on Vercel

The smoothest way to deploy your Next.js app is by using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more information.
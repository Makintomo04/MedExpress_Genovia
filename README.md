## Notes
My Node Version: v20.5.1

Technologies Used:

- Next JS
- Typescript
- TailwindCSS & ShadCN (Component Library)
- React Hook form
- SWR and Axios used to fetch from randomuser.me 
api endpoint to grab fake Intendent Pharmacist.


Considerations:

1. The choice to use the React Hook form library was because of ease of development
and the fact it's a highly regarded library for forms. A big draw for 
me was being able to leverage the built-in form handling capabilities, such as 
form validation, error handling and form submission. With the time constraints for
this take home task, I felt RHF was the best way to go to allow me to quickly 
iterate.

2. The consultancy form was relatively simple in regards to handling data, not 
much complexity so I opted not to go for a
Global state management solution nor data persistence across page reloads.

I feel like making state local to the component
allows state to be managed within the 
component without external dependencies. And
I feel like for this task it made the most sense for me.

If task requirements were to evolve and require more complex state interactions or data persistence; I definately would
consider integrating with other state management solutions like Context API or Redux; or Local/session Storage for data persistence, 



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

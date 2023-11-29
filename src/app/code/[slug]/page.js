const PROJECT_PAGES = {
  'todo-app': 'Todo App',
  'age-calc': 'Age Calculator',
  advice: 'Advice Generator',
};

export function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: `${PROJECT_PAGES[slug]} • Elyse Kanagaratnam`,
  };
}

export default function Code({ params }) {
  const { slug } = params;
  return <h1>Here is the {PROJECT_PAGES[slug]} page</h1>;
}

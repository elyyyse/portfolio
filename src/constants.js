export const PROJECT_DETAILS = {
  abstracts: [
    {
      title: 'Frontend Todo App',
      blurb:
        'A todo web application that uses local browser storage. Features include drag and drop task reordering and day/night modes.',
      cta: 'Learn more',
      images: {
        wide: '',
        reg: '/thumbnails/todo-app.png',
      },
      alt: 'Todo app thumbnail showing a list of todos in night and day modes',
      slug: '/code/todo-app',
      featured: false,
      comingSoon: false,
      priority: true,
    },
    {
      title: 'Age Calculator',
      blurb:
        "An app that calculates the user's age in years, months, and days.",
      cta: 'Learn more',
      images: {
        wide: '',
        reg: '/thumbnails/age-calc-app.png',
      },

      alt: 'Age calculator thumbnail showing the empty load state',
      slug: '/code/age-calc',
      featured: false,
      comingSoon: false,
      priority: false,
    },
    {
      title: 'Rainbow Canvas',
      blurb:
        'A walk-thru of how I created the interactive hero at the top of my homepage. 🏳️‍🌈',
      cta: 'Read story',
      images: {
        wide: '/thumbnails/rainbow-canvas-480.png',
        reg: '/thumbnails/rainbow-canvas.png',
      },
      alt: 'A rectangular grid of dots in the colors of the rainbow',
      slug: '/code/rainbow',
      featured: true,
      comingSoon: false,
      priority: true,
    },
    {
      title: 'Random Advice Generator',
      blurb:
        "A silly app that generates a random piece of advice from an API called 'Advice Slip'.",
      cta: 'Get some advice',
      images: {
        wide: '',
        reg: '/thumbnails/advice-app.png',
      },
      alt: "Advice app thumbnail that says 'If you don't want something to be public, don't post it on the internet.'",
      slug: '/code/age-calc',
      featured: false,
      comingSoon: false,
      priority: false,
    },
    {
      title: 'Coming Soon',
      blurb:
        "I'm in the process of cooking up my next project, but until then, here's a picture of a puppy in a box.",
      cta: null,
      images: {
        wide: '',
        reg: '/thumbnails/erda-estremera-sxNt9g77PE0-unsplash.jpg',
      },
      alt: '',
      slug: '',
      featured: false,
      comingSoon: true,
      priority: false,
    },
  ],
  'todo-app': {
    title: 'Todo App',
    image: '/project-page/fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg',
    summary:
      'This todo app is a challenge from Frontend Mentor—they provide the designs, and you build it. Labore consequat adipisicing proident veniam ea irure consectetur anim commodo cupidatat velit Lorem ex. Ex ad veniam labore cupidatat non adipisicing proident Lorem esse sit occaecat ad sint.',
    stack: ['Vanilla JavaScript', 'Semantic HTML', 'CSS'],
    keyFeatures: ['Drag and drop reordering', 'Toggleable day and night modes'],
  },
  'age-calc': {
    title: 'Age Calculator',
    image: '/project-page/mike-kenneally-TD4DBagg2wE-unsplash.jpg',
    summary:
      'This age calculator is a challenge from Frontend Mentor—they provide the designs, and you build it. Labore consequat adipisicing proident veniam ea irure consectetur anim commodo cupidatat velit Lorem ex. Ex ad veniam labore cupidatat non adipisicing proident Lorem esse sit occaecat ad sint.',
    stack: ['Vanilla JavaScript', 'Semantic HTML', 'CSS'],
    keyFeatures: ['Drag and drop reordering', 'Toggleable day and night modes'],
  },
  advice: {
    title: 'Advice Generator',
    image: './project-page/nathan-dumlao-6VhPY27jdps-unsplash.jpg',
    summary:
      'This advice generator is a challenge from Frontend Mentor—they provide the designs, and you build it. Labore consequat adipisicing proident veniam ea irure consectetur anim commodo cupidatat velit Lorem ex. Ex ad veniam labore cupidatat non adipisicing proident Lorem esse sit occaecat ad sint.',
    stack: ['Vanilla JavaScript', 'Axios', 'Advice Slip API'],
  },
  rainbow: {
    title: 'Rainbow Canvas',
    image: '/project-page/jakub-dziubak-XtUd5SiX464-unsplash.jpg',
    summary: '',
    keyFeatures: ['Drag and drop reordering', 'Toggleable day and night modes'],
  },
};

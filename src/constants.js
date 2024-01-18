export const PROJECT_DETAILS = {
  abstracts: [
    {
      title: 'Raycast Extensions',
      blurb:
        'Extensions built on top of the Raycast platform. They can be installed in the Raycast Store.',
      cta: 'Learn more',
      images: {
        wide: '',
        reg: '/thumbnails/raycast-ext.png',
      },
      alt: 'Screenshot of the Raycast Store homepage',
      slug: '/code/raycast',
      featured: false,
      comingSoon: false,
      priority: true,
    },
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
      title: 'Random Advice Generator',
      blurb:
        "A silly app that generates a random piece of advice from an API called 'Advice Slip'.",
      cta: 'Get some advice',
      images: {
        wide: '',
        reg: '/thumbnails/advice-app.png',
      },
      alt: "Advice app thumbnail that says 'If you don't want something to be public, don't post it on the internet.'",
      slug: '/code/advice',
      featured: false,
      comingSoon: false,
      priority: false,
    },
    // {
    //   title: 'Tell Me More',
    //   blurb:
    //     "My next project is an app to submit, comment on, and upvote product feedback, but until it's ready, here's a picture of a puppy in a box.",
    //   cta: null,
    //   images: {
    //     wide: '',
    //     reg: '/thumbnails/erda-estremera-sxNt9g77PE0-unsplash.jpg',
    //   },
    //   alt: '',
    //   slug: '',
    //   featured: false,
    //   comingSoon: true,
    //   priority: false,
    // },
  ],
  'todo-app': {
    title: 'Todo App',
    heroImage: '/project-page/fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg',
    logline:
      'This todo app is a challenge from Frontend Mentor—they provide the designs, and you build it. Labore consequat adipisicing proident veniam ea irure consectetur anim commodo cupidatat velit Lorem ex. Ex ad veniam labore cupidatat non adipisicing proident Lorem esse sit occaecat ad sint.',
    stack: ['Vanilla JavaScript', 'Semantic HTML', 'CSS'],
    keyFeatures: ['Drag and drop reordering', 'Toggleable day and night modes'],
    overview: '',
    resources: [],
    challenges: [
      'One of the more challenging parts of this project was implementing drag and drop reordering and ensuring the new order is accurately captured in state and redrawn correctly on refresh (again, something React*Props could have helped me with). Since this was my first time attempting it, I opted not to use a library and to build it from scratch instead*. (understand what’s under the hood)',
      'The most difficult snag I hit was trying to meet the design spec while still achieving accessibility standards. In some cases, I just had to change the design a bit (strictly speaking, the design asked me to remove any focus outline from the new todo text input). But in other cases, I learned some neat practices - like how to hide radio buttons and completely customize checkboxes, but still keep them focusable for keyboard users.',
    ],
  },
  'age-calc': {
    title: 'Age Calculator',
    heroImage: '/project-page/mike-kenneally-TD4DBagg2wE-unsplash.jpg',
    logline:
      'This age calculator is a challenge from Frontend Mentor—they provide the designs, and you build it. Labore consequat adipisicing proident veniam ea irure consectetur anim commodo cupidatat velit Lorem ex. Ex ad veniam labore cupidatat non adipisicing proident Lorem esse sit occaecat ad sint.',
    stack: ['Vanilla JavaScript', 'Semantic HTML', 'CSS'],
    keyFeatures: ['Drag and drop reordering', 'Toggleable day and night modes'],
    overview: '',
    challenges: '',
  },
  advice: {
    title: 'Advice Generator',
    heroImage: './project-page/nathan-dumlao-6VhPY27jdps-unsplash.jpg',
    logline:
      'This advice generator is a challenge from Frontend Mentor—they provide the designs, and you build it. Labore consequat adipisicing proident veniam ea irure consectetur anim commodo cupidatat velit Lorem ex. Ex ad veniam labore cupidatat non adipisicing proident Lorem esse sit occaecat ad sint.',
    stack: ['Vanilla JavaScript', 'Axios', 'Advice Slip API'],
    keyFeatures: [],
    overview: '',
    challenges: '',
  },
  rainbow: {
    title: 'Interactive Rainbow Canvas',
    heroImage: '/project-page/jakub-dziubak-XtUd5SiX464-unsplash.jpg',
    logline: '',
    keyFeatures: [],
    overview: '',
    challenges: '',
  },
};

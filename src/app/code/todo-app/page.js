'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'react-feather';

import useRandomProjectPath from '@/hooks/use-random-project-path';

import List from '@/components/List';
import Footnote from '@/components/Footnote';

import styles from './todo-app.module.css';

// export const metadata = {
//   title: 'Todo App • Elyse Kanagaratnam',
// };

export default function TodoApp() {
  const slug = useRandomProjectPath();
  return (
    <div className={styles.gridWrapper}>
      <h1 className={styles.h1}>Todo App</h1>
      <p className={styles.p}>
        The illustrious portfolio Todo List. This app utilizes localStorage to
        save your todos and your light/dark mode preference. Design by Frontend
        Mentor.
      </p>
      <div className={styles.listsContainer}>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Stack</h2>
          <List>
            <li>Vanilla JavaScript</li>
            <li>localStorage</li>
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Key features</h2>
          <List>
            <li>Drag and drop reordering</li>
            <li>Filter for all, active, or completed todos</li>
            <li>Toggle light and dark mode</li>
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Links</h2>
          <List>
            <li>
              <Link
                href='https://elyyyse.github.io/Frontend-todo-app/'
                target='_blank'
              >
                Live site
              </Link>
            </li>
            <li>
              <Link
                href='https://github.com/elyyyse/Frontend-todo-app'
                target='_blank'
              >
                GitHub repo
              </Link>
            </li>
          </List>
        </div>
      </div>
      <Image
        priority
        className={`${styles.heroImage} ${styles.breakGrid}`}
        src='/project-page/todo-app/todo-app-hero.png'
        alt='Todo app with 4 todos in light mode'
        width={1440}
        height={810}
      />

      <h2 className={styles.h2}>Project overview</h2>
      <p className={styles.p}>
        This was the last project I built before learning React, and perhaps
        ironically, it&apos;s the one that would benefit most from the
        framework. The basic structure I created mirrors several React
        principles.
      </p>
      <List className={styles.bodyList}>
        <li>
          There are two main pieces of state&#8212;the todos themselves and
          which status filter is selected
          <Footnote>
            Another piece of state is a boolean for whether dark mode is
            selected
          </Footnote>
        </li>
        <li>
          Each time a todo is added, deleted, marked complete, or reordered, the
          todos array is updated<Footnote>As well as localStorage</Footnote>,
          and the todo list is redrawn based on the filter state
        </li>
        <li>
          The content &lt;template&gt; element works like a reusable component
          and includes all of the syntax and styles needed to house a todo in
          the list
        </li>
      </List>
      <h2 className={styles.h2}>Helpful resources</h2>
      <List className={styles.bodyList}>
        <li>
          <Link
            href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template'
            target='_blank'
          >
            MDN&apos;s article on the content &lt;template&gt; element
          </Link>
        </li>
        <li>
          <Link
            href='https://www.youtube.com/watch?v=jfYWwQrtzzY'
            target='_blank'
          >
            Web Dev Simplified&apos;s video on building sortable drag and drop
            in Vanilla JS
          </Link>
        </li>
      </List>
      <h2 className={styles.h2}>Challenges and lessons learned</h2>
      <p className={styles.p}>
        One of the more challenging parts of this project was implementing drag
        and drop reordering&#8212;ensuring the new order is accurately captured
        in state, and the list is redrawn correctly on refresh (again, something
        React could have helped me with). Since this was my first time
        attempting drag and drop, I opted to build it from scratch
        <Footnote>
          Incidentally, this feature is only available on web and doesn&apos;t
          yet work for mobile touch events.
        </Footnote>
        . But now that I understand the underlying mechanics, I would likely
        take advantage of a library for future projects.
      </p>
      <p className={styles.pContinued}>
        The most difficult snag I hit was trying to meet the design spec while
        still achieving accessibility standards. In some cases, I just had to
        change the design a bit (strictly speaking, the design asked me to
        remove any focus outline from the new todo text input). But in other
        cases, I learned some neat practices&#8212;like{' '}
        <Link
          href='https://github.com/elyyyse/til/blob/main/css/hide-radio-buttons-accessibly.css'
          target='_blank'
        >
          how to hide radio buttons
        </Link>{' '}
        and{' '}
        <Link
          href='https://github.com/elyyyse/til/blob/main/css/accessible-custom-checkbox.css'
          target='_blank'
        >
          completely customize checkboxes
        </Link>
        , but still keep them focusable for keyboard users.
      </p>
      <div className={`${styles.slideshow}  ${styles.breakGrid}`}>
        <Image
          className={styles.slideshowImage}
          src='/project-page/todo-app/todo-app-drag-light.png'
          alt='Todo list showing drag and drop reordering'
          width={1440}
          height={810}
        />
        <Image
          className={styles.slideshowImage}
          src='/project-page/todo-app/todo-app-mobile-dark.png'
          alt='Todo app mobile view in dark mode'
          width={500}
          height={750}
        />
        <Image
          className={styles.slideshowImage}
          src='/project-page/todo-app/todo-app-dark.png'
          alt=' Todo app showing hover state in dark mode'
          width={1440}
          height={810}
        />
        <Image
          className={styles.slideshowImage}
          src='/project-page/todo-app/todo-app-mobile-light.png'
          alt='Todo app mobile view in light mode'
          width={500}
          height={750}
        />

        {/* <Image
          // className={`${styles.slideshowImage} ${styles.breakGrid}`}
          className={styles.slideshowImage}
          src='/project-page/age-calc/age-calc-future-error.png'
          alt=''
          width={1440}
          height={810}
        /> */}
      </div>
      <span className={styles.nextProject}>
        <Link href={slug}>Check out another project</Link>
        <ChevronRight size={14} style={{ display: 'inline' }} />
      </span>
    </div>
  );
}

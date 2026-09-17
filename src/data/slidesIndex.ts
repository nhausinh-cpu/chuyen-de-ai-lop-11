import { Lesson } from '../types';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';
import { module4 } from './module4';

export const allLessons: Lesson[] = [
  ...module1,
  ...module2,
  ...module3,
  ...module4
];

export const totalSlidesCount = allLessons.reduce((acc, lesson) => acc + lesson.slides.length, 0);

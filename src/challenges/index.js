
/**
 * Export all the quizzes as an array, see the CONTRIBUTING.md
 * guide for directions for adding new questions or modifying
 * the content of these challenges.
 */

import vial from './01_educacion-vial';
import vial2 from './02_educacion-vial2';
import auxilios from './03_primeros-auxilios';
import mecanica from './04_mecanica-basica';
import legislacion from './05_legislacion-boliviana';

const challenges = [
  vial,
  vial2,
  auxilios,
  mecanica,
  legislacion
];

/* This doesn't cover everything but serves as a basic verification that
 * the quiz data being loading into the app is complete, and will not
 * break the app (e.g. if the title field was empty). Any contributions
 * to the app should be quality-assured manually by review, but this
 * can serve as a last resort to guard against problems. */

export default (function (challenges) {

  let noExplanation = 0;
  let rejectedTitles = [];
  let rejectedCategories = [];

  const verified = challenges.reduce((verified, category) => {

    const noRepeatTitle = {};
    const noRepeatSubtitle = {};

    if (!category.title || !category.category) {
      rejectedCategories.push(category.title);
      return verified;
    }
    const verifiedQuestions = category.challenges.filter(q => {
      if (!q.title || !q.subtitle || !q.solution) {
        return false;
      }
      if (q.choices.length < 2) return false;
      if (noRepeatTitle[q.title]) {
        rejectedTitles.push(q.title);
        return false;
      }
      if (noRepeatSubtitle[q.subtitle]) {
        rejectedTitles.push(q.subtitle);
        return false;
      }
      noRepeatTitle[q.title] = true;
      noRepeatSubtitle[q.subtitle] = true;
      if (!q.explanation) noExplanation++;
      return true;
    });
    if (verifiedQuestions.length > 0) {
      category.challenges = verifiedQuestions;
      return verified.concat(category);
    } else {
      rejectedCategories.push(category.title);
      return verified;
    }
  }, []);

  /* Log notes about any removed challenges/content: */
  if (rejectedCategories.length || noExplanation) console.warn('Take Note:');

  if (rejectedTitles.length) {
    console.log(`The following question titles are duplicates, titles must be ` +
      `unique: ${rejectedTitles.join(', ')}`
    );
  }

  if (rejectedCategories.length) {
    console.log(`The following quiz categories could not be added, ` +
      `probably because they are incomplete: ${rejectedCategories.join(', ')}`
    );
  }

  if (noExplanation) console.log(`${noExplanation} Questions have no explanation. ` +
    `Adding explanations will improve the learning experience.`);

  return verified;

})(challenges);

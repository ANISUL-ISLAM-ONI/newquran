const Chapter = require('./chapter');
const ChapterInfo = require('./chapterinfo');
const Juz = require('./juz');

module.exports = {
    chapter: new Chapter(),
    chapterInfo: new ChapterInfo(),
    juz: new Juz(),
}
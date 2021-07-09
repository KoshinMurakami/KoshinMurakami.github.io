import nlp from 'nlp_compromise';
import nlpSyllables from '../lib/nlp-syllables-async';
nlp.plugin(nlpSyllables);

const inputText = 'Two frogs, a father and his son, accidentally fell into a bucket of milk. They started swimming for their lives. They swam for a long time, but there seemed no hope of their getting out. The father soon gave up and drowned. The son carried on swimming. During this time, the milk had begun to form a ball of butter. Using this island of butter as a platform, he managed to hop out of the bucket.';

$(() => {

    $('.btn').on('click', () => {
        let doc = nlp(inputText);
        $('.result').text(doc.nouns());
    });
});
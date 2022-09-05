const student = {
    name: 'colim udding',
    age: 15,
    class: 11,
    mark: {
        math: 78,
        physics: 89,
        chemistry:65
    }
};
// const math = student.mark.math;
// console.log(math) 
const chemistry = student['mark']['chemistry'];
console.log(chemistry);

const subject = 'math';
const subjectMark = student.mark[subject];
console.log(subjectMark)
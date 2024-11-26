const examList = document.getElementById('exam-list');
const examSelect = document.getElementById('exam-select');
const studentList = document.getElementById('student-list');

const exams = [];
const students = [];

// Exam creation
document.getElementById('exam-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const examName = document.getElementById('exam-name').value;
    const examDate = document.getElementById('exam-date').value;

    const exam = { name: examName, date: examDate, id: exams.length + 1 };
    exams.push(exam);

    const option = document.createElement('option');
    option.value = exam.id;
    option.textContent = `${exam.name} (${exam.date})`;
    examSelect.appendChild(option);

    const listItem = document.createElement('li');
    listItem.textContent = `${exam.name} - ${exam.date}`;
    examList.appendChild(listItem);
});

// Student signup
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const studentName = document.getElementById('student-name').value;
    const examId = parseInt(examSelect.value);

    const exam = exams.find(e => e.id === examId);
    if (!exam) return alert('Hibás vizsga!');

    const student = { name: studentName, exam: exam.name };
    students.push(student);

    const listItem = document.createElement('li');
    listItem.textContent = `${student.name} jelentkezett a(z) ${exam.name} vizsgára.`;
    studentList.appendChild(listItem);
});

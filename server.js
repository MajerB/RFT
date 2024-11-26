const express = require('express'); 
const app = express(); 
const PORT = 3000; 


app.use(express.json());


const exams = [];


app.post('/api/exams', (req, res) => {
    const { name, date } = req.body;
    const newExam = { id: exams.length + 1, name, date };
    exams.push(newExam);
    res.status(201).json(newExam); 
});


app.get('/api/exams', (req, res) => {
    res.json(exams); 
});


app.delete('/api/exams/:id', (req, res) => {
    const examId = parseInt(req.params.id);
    const index = exams.findIndex(exam => exam.id === examId);
    if (index !== -1) {
        exams.splice(index, 1);
        res.status(204).send(); 
    } else {
        res.status(404).json({ error: "Vizsga nem található" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

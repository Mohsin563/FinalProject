const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();

const UserModel = require('./models/User');



app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Users');
app.post('/signup', async (req, res) => {
    UserModel.create(req.body)
        .then(Usersdata=> {
            res.json(Usersdata);
        })
        .catch(err => { 
            console.error(err);
            res.status(500).json({ error: 'An error occurred while creating the user.' });
        }   );
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel   .findOne({ email, password });
        if (!user) {   
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        res.json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while logging in.' });
    }    });

    app.post('/expenses', async (req, res) => {
       UserModel.create(req.body)
        .then(expenseData => {
            res.json(expenseData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while creating the expense.' });
        });
    });
            
app.post('/expenses/:id', async (req, res) => {
    const { id } = req.params;
    const { text, amount } = req.body;
    try {
        const updatedExpense = await UserModel.findByIdAndUpdate(id, { text, amount }, { new: true });
        if (!updatedExpense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json(updatedExpense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the expense.' });
    }
});

app.post('/expenses/:id/delete', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedExpense = await UserModel.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json({ message: 'Expense deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the expense.' });
    }
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

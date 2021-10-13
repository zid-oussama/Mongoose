// Importing Mongoose , Models , Config
const mongoose = require('mongoose')
const person = require('./Models/person')
const connectDB = require('./configuration/connectDB')

connectDB()

//Create and Save a Record Of a Model
let createModel = () => {
    const person1 = new person({
        name: 'person1',
        age: 45,
        favoriteFoods: ['Conscous', 'rice']
    });
    person1.save()
        .then(() => console.log('saved'))
        .catch(err => console.log(err))

};

//Create Many Records
let users = [
    { name: 'person4', age: 20, favoriteFoods: ['apple', 'milk'] },
    { name: 'person5', age: 52, favoriteFoods: ['pasta', 'rice'] }
];
const creating = () => {
    person.create(users, (err, data) => { err ? console.log(err) : console.log(data) }
    );
}



//Model Find
const finding = () => {
    person.find((err, data) => {
        err ? console.log(err) : console.log(data)
    })
}

//Find One
const findOne = (userName) => {
    person.find({ name: userName }, (err, data) => {
        err ? console.log(err) : console.log(data)
    })
}

//Find By Id
const findByid = (userID) => {
    //person.findById
    person.find({ _id: userID },
        (err, data) => {
            err ? console.log(err) : console.log(data)
        })

}


//Perform Classic Updates by Running Find, Edit, then Save
const findEditSave = (personId) => {
    person.findById(personId, (err, data) => {
        if (err) { return console.log(err) }
        console.log(data)
        data.favoriteFoods.push('pizza')

        data.save()
            .then(() => console.log('saved'))
            .catch(err => console.log(err))
    })
}


//Find and Update
const findUpdate = (userName) => {
    person.findOneAndUpdate({ name: userName }, { $set: { age: 20 } }, { new: true }, (err, data) => {
        err ? console.log(err) : console.log(data)
    })
}

//Find and Remove
const findRemove = (userId) => {
    person.findByIdAndRemove(userId, (err, data) =>
        err ? console.log(err) : console.log(data)
    );
}

//Delete Many

const removeManyPeople = (delName) => {
    const nameDel = "Mary";
    person.remove({ name: delName }, (err, data) =>
        err ? console.log(err) : console.log(data)
    );
};

//Chain Search Query Helpers to Narrow Search Results
const queryChain = (foodToSearch) => {
    person.find({ favoriteFoods: foodToSearch })
        .sort({ name: -1 })
        .limit(1)
        .select({ age: 0 })
        .exec((err, data) =>
            err
                ? console.error("error getting data: ", err.message)
                : console.log(data)
        );
};

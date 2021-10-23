// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


// //! for mcq questions.
// // const questionData = new Schema({
// //     index: {
// //         type: Number
// //     },
// //     choice : {
// //         type: String
// //     },
// //     isAnswer: {
// //         type: Boolean
// //     }
// // })

// // const inputMark = new Schema({
// //     top: {
// //         type: Number
// //     },
// //     left: {
// //         type: Number
// //     },
// //     answer: {
// //         type: String
// //     }
// // })

// // //! for fillOnImage questions.
// // const questionData = new Schema({
// //     index: {
// //         type: Number
// //     },
// //     inputMarks: [inputMark],
// //     image : {
// //         type: String | Buffer
// //     },
// //     wordBankClick : {
// //         type: Boolean
// //     }
// // })

// //point data 
// // options for kids and hints


// // // ! for sorting questions.
// // const category = new Schema({
// //     name:{
// //         type: String,
// //     },
// //     values: [String]
// // })

// // // ! for sorting questions.
// // const questionData = new Schema({
// //     index: {
// //         type: String
// //     },
// //     categories:[
// //         category
// //     ]
// // })



// //! fillBlanks question.
// // const questionData = new Schema({
// //     index: {
// //         type: String
// //     },
// //     statement: {
// //         type: String
// //     },
// //     options: [{
// //         type: String
// //     }]
// // })
// // //example : 
// //  const data = {   index : 1,
// //      statement : 'Hello my name is #12$12 and i am #12$12 years old.',
// //      options:[
// //          'pawan', '24'
// //      ]
// //  }
// //  extra options for each fillup
// // refrence for each question.

// const question = new Schema({
//     title: {
//         type: String
//     },
//     instruction: {
//         type: String
//     },
//     questionData: [questionData],
//     questionType: {
//         type: String
//     }
// })



// const worksheet = new Schema({
//     worksheetFriendlyName: {
//         type: String
//     },
//     questions: [question],
//     // classes: [string],
//     // subjects: [string],\
//     assignedTo: [students],
//     isOffline: {
//         type: Boolean
//     },
//     isPublic: {
//         type: Boolean
//     },
//     status: { type: String, default: '1' },
//     createdon: { type: Date },
//     createdby: { type: String },
//     actionCount: { type: String, default: 1 },
// })

// module.exports = mongoose.model('worksheet', worksheet);



// // let data = {
// //     _id: {
// //         type: String
// //     },
// //     worksheetFriendlyName: {
// //         type: String
// //     },
// //     questions: [{
// //         title: {
// //             type: String
// //         },
// //         instruction: {
// //             type: String
// //         },
// //         data:{
// //             index: 1,
// //             statement: 'Hello my name is #12$12 and i am #12$12 years old.',
// //             options: [
// //                 'pawan', '24'
// //             ]
// //         },
// //         questionType: {
// //             type: String
// //         }
// //     }],
// //         date : {
// //         type: Date,
// //         default: Date.now
// //     }
// // }





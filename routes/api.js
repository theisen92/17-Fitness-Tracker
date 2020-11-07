const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });

});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });

});


router.put("/api/workouts/:id", function (req, res) {
    Workout.updateOne({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true }, function (err, results) {
        if (err) throw err;
        console.log(results);
        res.json(results);
    });
});

// router.put("/api/workouts/:id", ({ body, params }, res) => {
//     // console.log(body, params)
//     const workoutId = params.id;
//     let savedExercises = [];

//     // gets all the currently saved exercises in the current workout
//     Workout.find({ _id: workoutId })
//         .then(dbWorkout => {
//             // console.log(dbWorkout)
//             savedExercises = dbWorkout[0].exercises;
//             res.json(dbWorkout[0].exercises);
//             let allExercises = [...savedExercises, body]
//             console.log(allExercises)
//             updateWorkout(allExercises)
//         })
//         .catch(err => {
//             res.json(err);
//         });

//     function updateWorkout(exercises) {
//         Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function (err, doc) {
//             if (err) {
//                 console.log(err)
//             }

//         })
//     }

// })

router.get("/api/workouts/:id", (req, res) => {
    let workoutID = req.params.id;
    Workout.find({ _id: workoutID })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        });
});

module.exports = router;

const orm = require('../config/orm');


const createUsers =(userId,email,name) => {
  orm.Users.create({sessionId:userId,Email:email,userName:name});
};

const createStress = (id,mood,hoursSleept,minEx,coffee,date) => {
  orm.Stress.create({usersId:id,moods:mood,hoursSleep:hoursSleept,minsExercise:minEx,coffeeUnits:coffee,inputDate:date});
};

const createHealth = (id,water,alchool,stepsIn,caloriesIn,date) =>{
  orm.Health.create({usersId:id,waterUnits:water,alchoolUnits:alchool,steps:stepsIn,calories:caloriesIn,inputDate:date});
};

const createValidator = (id,key) =>{
  orm.validator.create({usersId:id,valueKey:key});
};


module.exports = {
  createUsers,
  createStress,
  createHealth,
  createValidator
};

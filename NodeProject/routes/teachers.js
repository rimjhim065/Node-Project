const express=require('express');
const T_ID =require ('uuid-int');    //to get random id as int
const router=express.Router();

let teachers=[]; 
router.get('/',(req,res)=>{      //for /teachers
    res.send(teachers);
});

router.post('/',(req,res)=>{    //for creating a new teacher
    const tchr=req.body;        //to get the data which we need to push
    const tchr_id=T_ID(0).uuid();
    teachers.push({...tchr ,id:tchr_id});   
    res.send(`Teacher with the name ${tchr.name} is added.`);
});

router.get('/:id',(req,res) =>{     //to get a teacher data as per the given id 
    const {id}=req.params;
    const foundTeacher=teachers.find((teacher)=>teacher.id== id);
    res.send(foundTeacher)
});

router.delete('/:id',(req,res)=>{       //to delete a teacher data as per the given id
    const {id}=req.params;
    teachers =teachers.filter((tchr) => tchr.id!=id);   //which are not equal to id given we need to keep them in array,and delete other one which is matching
    res.send(`Teacher with the id ${id} is deleted.`)
});

router.patch('/:id',(req,res)=>{    //to update the data of a teacher 
    const {id}=req.params;
    const {name,department,age,street,city,state,pin}=req.body;   //things we want to change except id 
    const tchr=teachers.find((tchr) => tchr.id==id);

    if(name) {
        tchr.name=name;
    }
    if(department){
         tchr.department=department;
    }
    if(age){
         tchr.age=age;
    }
    if(street) {
        tchr.address.street=street;
    }
    if(city){
         tchr.address.city=city;
    }
    if(state) {
        tchr.address.state=state;
    }
    if(pin) {
        tchr.address.pin=pin;
    }

    res.send(`Teacher with the id ${id} has been updated!`)
});

module.exports= router;



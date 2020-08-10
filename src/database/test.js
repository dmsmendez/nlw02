const Database = require(`./db`)
const createProffy = require (`./createProffy`)


Database.then(async (db) => {
    proffyValue = {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "89334567", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 100.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: "1", 
        cost: "20",
        //o proff id vira pelo database
    }

    classScheduleValues = [
        { 
            weekday:  "1",
            time_from: "750",
            time_to: "1270"
        },
        { 
            weekday:  "0",
            time_from: "570",
            time_to: "1260"
        },
        //class_id vira pelo database - cadastrar a class
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues })

    const selectedProffys = await db.all("SELECT * FROM proffys")
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "780"
        AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)
})

// INSERIR DADOS, CONSULTAR DADOS INSERIDOS
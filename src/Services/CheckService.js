import db from "../Database"

const checkHabit = (obj)=>{
    return new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                "UPDATE habits SET lastCheck=?, habitIsChecked=?, habitChecks=? WHERE habitArea=?;",
                [obj.lastCheck, obj.habitIsChecked, obj.habitIsChecked, obj.habitArea],
                (_, {rowsAffexted})=>{
                    if(rowsAffexted > 0)resolve(rowsAffexted)
                    else reject("Error updating obj")
                },
                (_, error)=> reject(error)
            )
        })
    })
}

export default {
    checkHabit,
}
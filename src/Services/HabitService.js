db.transaction((tx)=>{
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS habits (id INTEGER PRIMARY KEY AUTOINCREMENT, habitArea TEXT, habitFrequency TEXT, habitHasNotification BOOLEAN, habitNotificationFrequency TEXT, habitNotificationTime TEXT, lastCheck INTEGER, progressBar INTEGER, habitIsChecked BOOLEAN, habithecks INTEGER);",
        [],
        (_, error) => {
            console.log(error)
        }
    )
})
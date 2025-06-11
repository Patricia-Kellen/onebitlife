import * as SQLite from "expo-sqlite"

const db = await SQLite.openDatabase("db.db")

export default db
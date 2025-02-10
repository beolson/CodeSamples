import sqlite3
conn = sqlite3.connect("people.db")
columns = [
    "id INTEGER PRIMARY KEY",
    "lname VARCHAR UNIQUE",
    "fname VARCHAR",
    "timestamp DATETIME",
]
create_table_cmd = f"CREATE TABLE person ({','.join(columns)})"
conn.execute(create_table_cmd)


conn = sqlite3.connect("people.db")
cur = conn.cursor()
cur.execute("SELECT * FROM person")

people = cur.fetchall()
for person in people:
    print(person)


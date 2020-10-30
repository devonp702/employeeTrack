-- First add some department managers to keep things organized. --
USE employee_db;

INSERT INTO department (name)
VALUES ("Elemental"), ("Planetary"), ("Zodiacal");

-- Now Lets add some Roles for our Employees --
-- WARNING!: Make sure your department table has values populated before continuing.--
USE employee_db;

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 3000.00, 1), ("Luminary", 200.00, 2),("Inner", 300.00, 2), ("Outer", 200.00, 2), ("Cardinal", 4.00, 3), ("Fixed", 4.00, 3), ("Mutable", 4.00, 3);

-- Finally we will add our employees--
-- WARNING!: Make sure your role table has values populated before continuing.--
USE employee_db;

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Alef", "Air", 1), ("Bet", "Mercury", 3), ("Gimel", "Moon", 2), ("Dalet", "Venus", 3), ("He", "Aries", 5), ("Vav", "Taurus", 6), ("Zayin", "Gemini", 7), ("Chet", "Cancer", 5), ("Tet", "Leo", 6), ("Yod", "Virgo", 7), ("Kaf", "Jupiter", 4), ("Lamed", "Libra", 5),("Mem", "Water", 1), ("Nun", "Scorpio", 6), ("Samech", "Sagittarius", 7), ("Ayin", "Capricorn", 5), ("Pe", "Mars", 3), ("Tsade", "Aquarius", 6), ("Qof", "Pisces", 7), ("Resh", "Sun", 2), ("Shin", "Fire", 1), ("Tav", "Saturn", 4);

UPDATE employee SET manager_id = 1 WHERE id=2 OR id=3 OR id=7 OR id=8 OR id=10 OR id=16 OR id=18 OR id=22;

UPDATE employee SET manager_id = 13 WHERE id=4 OR id=6 OR id=11 OR id=12 OR id=15 OR id=19;

UPDATE employee SET manager_id = 21 WHERE id=5 OR id=9 OR id=14 OR id=17 OR id=20;

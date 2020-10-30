-- First add some department managers to keep things organized. --
USE employee_db;

INSERT INTO department (name)
VALUES ("Alef"), ("Mem"), ("Shin");

-- Now Lets add some Roles for our Employees --
-- WARNING!: Make sure your department table has values populated before continuing.--
USE employee_db;

INSERT INTO role (title, salary, department_id)
VALUES ("Elemental", 3000.00, 1), ("Planetary", 700.00, 2), ("Zodiacal", 12.00, 3);

-- Finally we will add our employees--
-- WARNING!: Make sure your role table has values populated before continuing.--
USE employee_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alef", "Air", 1, NULL), ("Bet", "Mercury", 2, 1), ("Gimel", "Moon", 2, 1), ("Dalet", "Venus", 2, 2), ("He", "Aries", 3, 3), ("Vav", "Taurus", 3, 2), ("Zayin", "Gemini", 3, 1), ("Chet", "Cancer", 3, 1), ("Tet", "Leo", 3, 3), ("Yod", "Virgo", 3, 1), ("Kaf", "Jupiter", 2, 2), ("Lamed", "Libra", 3, 2),("Mem", "Water", 1, NULL), ("Nun", "Scorpio", 3, 3), ("Samech", "Sagittarius", 3, 2), ("Ayin", "Capricorn", 3, 1), ("Pe", "Mars", 2, 3), ("Tsade", "Aquarius", 3, 1), ("Qof", "Pisces", 3, 2), ("Resh", "Sun", 2, 3), ("Shin", "Fire", 1, NULL), ("Tav", "Saturn", 2, 1);
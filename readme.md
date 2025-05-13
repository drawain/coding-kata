# FizzBuzz Task
FizzBuzz is a simple number game in which you count, but replace certain numbers with the words "Fizz" and/or "Buzz", adhering to certain rules.

- Create a FizzBuzz() method that prints out the numbers 1 through 100, separated by newlines.
- Instead of numbers divisible by 3, the method should output "Fizz".
- Instead of numbers divisible by 5, the method should output "Buzz".
- Instead of numbers divisible by 3 and 5, the method should output "FizzBuzz".

# Socks Task
There is a large pile of socks that must be paired by color. Write a function which can determine how many pairs of socks with matching colors there are based on array of integers representing the color of each sock.
  
Example: arr = [1,2,1,1,3,2,2]
 

# SQL Task
Write an SQL query that counts how many people we have for each language, and only includes languages with at least two entries.
https://sqlplayground.app/sandbox/6822eeb4625efef3449ada7c

```
 -- 1) Create table
CREATE TABLE person_languages (
  id       SERIAL      PRIMARY KEY,
  name     VARCHAR(50) NOT NULL,
  language VARCHAR(50) NOT NULL
);

-- 2) Insert sample data
INSERT INTO person_languages (name, language) VALUES
  ('Alice',   'English'),
  ('Bob',     'French'),
  ('Charlie', 'English'),
  ('David',   'German'),
  ('Eve',     'French'),
  ('Frank',   'Spanish'),
  ('Grace',   'German'),
  ('Heidi',   'English'),
  ('Ivan',    'Russian'),
  ('Judy',    'French');
  ```
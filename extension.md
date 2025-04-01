# Other challenges

## Extension
- Extra constraints:
    - Instead of numbers with a three in them, print "Fizz".
    - Instead of numbers with a five in them, print "Buzz".
    - Instead of numbers with a three and a five in them, print "FizzBuzz".
- How to make the code easy to extend? 
- How to make it easy to extend without coding?

## Testing
- What if we wanted to use simple database queries instead of printing ‘Fizz’ and ‘Buzz’? How would that change the way we test our methods?

## Scalability
- What if we wanted to make expensive calls (such as slow SQL queries) instead of simply printing ‘Fizz’, ‘Buzz’, etc.? How would you scale this solution?
- Let's say you have a FizzBuzz API which needs to handle 10 million requests per day. Users can submit a numeric range (potentially up to 1 billion), and your system must return the results within milliseconds. How do you handle this situation? What kind of technology, architecture, or strategies would you choose to ensure reliability, performance, and scalability?

## Reliability & DevOps
- We receive input from a message queue and perform text replacements using database queries. We notice that our application is slowing down. How would you start investigating this issue?
- Suppose one of your external dependencies (like the database or an external API that determines Fizz/Buzz conditions) is temporarily unavailable. How would you build resilience into your solution to handle failures gracefully? Can you describe any specific patterns you’d apply?
- How would you ensure your FizzBuzz service is observable in a production environment? What metrics would you track? What monitoring or logging frameworks/tools would you use?

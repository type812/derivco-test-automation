# derivco-test-automation
This assignment contains the solution to the test assignment where automation for slot game is expected under different combinations of input test data sequence.

As part of the problem statement given ,I have written 22 test cases which encompasses around the win combination message and the equivalent middle row text highlight synchnorization as criteria for pass/fail. 

Also,there are some basic test cases which covers the negative test scenarios and invalid test input sequences.

I have chosen cypress as test automation tool for this task.

test script file can be found here : derivco-test-automation/cypress/integration/test_game.spec.js


Approach:
- I am ANDing the results from middle row notch highlights with valid winning message combination to mark test as pass/fail.
- I have added delays of 5 seconds in each test case to handle the Spin button enablement after subsequent test execution.

Since the test sequence data combination with message yields random results,we'll be able to catch the issue with above approach.


Instructions:

- Download cypress 3.3.1 node module 
- Run node_modules/.bin/cypress open to launch cypress 



Test run results:

The test data sequence mentioned below are the ones which failed during execution.Below is the sample of 5 test runs.

------Execution 1--------3 out of 22 failed
222
4444
55555
-------Execution 2------4 out of 22 failed
222
333
4444
55555
-------Execution 3--------4 out of 22 failed 
222
4444
555
55555
--------Execution 4-------4 out of 22 failed 
222
2222
4444
55555
--------Execution 5------5 out of 22 failed 
111
222
333
4444
55555
---------------------


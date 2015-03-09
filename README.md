MILESTONE 2 - CSC591 DevOps
-------------------------------

Project Team Members:

1] Priyanka Shankaran (priyan)

2] Smitha Sathyanarayana (ssathya)

### Test Section
-------------------------------

**Step 1: The ability to run unit tests, measure coverage, and report the results.**

![alt Jenkins Git plugin](mile2_screenshot/gruntfile.png)

![alt Jenkins Git plugin](mile2_screenshot/cov1.png)

![alt Jenkins Git plugin](mile2_screenshot/cov2.png)

![alt Jenkins Git plugin](mile2_screenshot/cov_html.png)

![alt Jenkins Git plugin](mile2_screenshot/jasmine.png)


**Step 2: The ability to improve testing coverage using one of the techniques covered in class: constraint-based test generation, fuzzing, etc. You can use an existing tool or implement your own approach.**





### Analysis Section
---------------------------
**Step 3: The ability to run an existing static analysis tool on the source code (e.g. FindBugs, PMD, CheckStyle, NCover, Lint, etc.), process its results, and report its findings.**

![alt Jenkins Git plugin](mile2_screenshot/grunt_jshint.png)

![alt Jenkins Git plugin](mile2_screenshot/jshint_validate.png)

![alt Jenkins Git plugin](mile2_screenshot/jshint_report.png)



**Step 4: The ability to extend an existing analysis tool with a custom rule, or implement a new analysis. For example, you could write a static analysis that checks for the ratio of comments to code, or finds parse errors in SQL string statements. You could introduce security checks, a dynamic analysis, a data-flow analysis or a data-flow based test coverage.**

1] Esprima was used in order to analyse different code statements and their properties. For example, maximum depth of nested loops, mean and maximum parameters taken by functions in the code have been computed and displayed.

2] As can been seen from the screenshot below, we have run the analysis on the test.js file to check through the statements and return the properties of the test.js file as needed.

![alt Jenkins Git plugin](mile2_screenshot/extension.png)


**Step 5: The ability to reject a commit if it fails a minimum testing criteria (e.g. failed test case, or less than 50% statement coverage) and analysis criteria (e.g. cannot commits that generate a particular FindBugs rule, such as "Method concatenates strings using + in a loop").**

![alt Jenkins Git plugin](mile2_screenshot/jshint_validate.png)

![alt Jenkins Git plugin](mile2_screenshot/jshint_report.png)
 
# Basic Information
Language: JS\
Framework: NodeJS\
Version Control: Git\
Data Management: MySQL (XAMPP)

### Version

1.1.0


## Install Dependencies

1.
Download [XAMPP](https://www.apachefriends.org/download.html), make sure to select "Apache", "phpMyAdmin" and "MySQL" components when installing (not deselect anything should be alright). 

2.
Donload [NodeJS](https://nodejs.org/en/download), make sure to have JavaScript Installed on VSCode prior, if not please follow [this](https://www.youtube.com/watch?v=x_2sYpk75Ic) tutorial to setup (on Windows 10).

3.
When locate under the correct folder, run the below command.
```bash
npm install 
npm install mysql
```

## SetUp
1. Open XAMPP control panel, start "Apache" and "MySQL" under "Actions" section. Then click Admin button for MySQL module, enter the admin control panel. Under "SQL" , load "calculatorDB.ddl" in the \main folder. This create the database "simpleCalculator". 

## Run

```bash
node app
```

## Instruction
1. When using calculator's parameter function, pelase make sure to type in the prefix for the parameter (e.g. 2+x  would be 2+1x.) in order for the calculator to function properly. 
2. Please make sure to use the given parameter when typing into calculator (x, y, z and t), and when using interface to submit the parameters' value, please press the green checkmark beside the parameter to submit your input values for each parameter.  


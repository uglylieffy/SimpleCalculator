drop database simpleCalculator;
create database simpleCalculator;


CREATE TABLE history(
    Date		DATETIME             NOT NULL,
    Equation		VARCHAR(100)		NOT NULL,
    PRIMARY KEY(Date)
);


insert into history values
('2023-06-16 10:23:40', '3+5=8'),
('2008-11-09 15:45:21', '(2x-3)/(2+0.5)=1.2')
;
--create database with collation
CREATE DATABASE employee CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- check current character set of a database
SELECT default_character_set_name FROM information_schema.SCHEMATA WHERE schema_name = "employees";

-- check foreign key check is enabled or not
SELECT @@FOREIGN_KEY_CHECKS

-- stop foreign key check and run sql command
SET FOREIGN_KEY_CHECKS=0;
--your code here 
SET FOREIGN_KEY_CHECKS=1;

-- turn off sql safe mode to mass update
SET SQL_SAFE_UPDATES=0;
--UPDATE tablename SET columnname=1;
SET SQL_SAFE_UPDATES=1;

-- turn of unique key check 
SET unique_checks=0;
... SQL import statements ...
SET unique_checks=1;

-- this will set mysql timezone in UTC globally
SET GLOBAL time_zone = '+00:00'; 

-- update table from another table joining on primary key
UPDATE employee AS emp_main INNER JOIN employee_backup AS emp_backup ON emp_main.id = emp_backup.id SET emp_main.status = emp_backup.status WHERE emp_main.status = 'active';

-- import data from sql file
mysql -u root -p'12345678' custom_crm_db < ./custom_crm_staging_05_dec_21.sql 

-- take backup of database
mysqldump -u root -p'12345678' -h localhost database_name > ~/dbbackup_2022.sql
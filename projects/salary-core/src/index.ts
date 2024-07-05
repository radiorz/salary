import { Salary, WorkSystem } from "../lib";
async function bootstrap() {
  let salary = new Salary();
  salary.start();
  salary = new Salary({
    salaryCycle: 30,
    salaryPerCycle: 11000,
    workHoursPerDay: 8,
    workSystem: WorkSystem["5/7"],
    yearEndAward: 0,
  });
  salary.start();
  salary = new Salary({
    salaryCycle: 30,
    salaryPerCycle: 18000,
    workHoursPerDay: 10,
    workSystem: WorkSystem["5/7"],
    yearEndAward: 50000,
  });
  salary.start();
}
bootstrap();

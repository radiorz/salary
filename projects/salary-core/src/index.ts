import { Salary } from "../lib";
async function bootstrap() {
  let salary = new Salary();
  const { workDaysPerYear, workHoursPerYear, salaryPerYear, salaryPerHour } =
    salary.start();
  console.log("每年工作天数", workDaysPerYear.toString());
  console.log("每年工作小时数", workHoursPerYear.toString());
  console.log("年薪", salaryPerYear.toString());
  console.log(`每个小时赚的钱`, salaryPerHour.toString());
}
bootstrap();
// salary = new Salary({
//   salaryCycle: 30,
//   salaryPerCycle: 11000,
//   workHoursPerDay: 8,
//   workSystem: WorkSystem["5/7"],
//   yearEndAward: 0,
// });
// salary.start();
// salary = new Salary({
//   salaryCycle: 30,
//   salaryPerCycle: 18000,
//   workHoursPerDay: 10,
//   workSystem: WorkSystem["5/7"],
//   yearEndAward: 50000,
// });
// salary.start();

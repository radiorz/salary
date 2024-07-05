import { Salary, WorkSystem } from "../lib";
async function bootstrapMy() {
  let salary = new Salary();
  const { workDaysPerYear, workHoursPerYear, salaryPerYear, salaryPerHour } =
    salary.start();
  console.log("每年工作天数", workDaysPerYear.toString());
  console.log("每年工作小时数", workHoursPerYear.toString());
  console.log("年薪", salaryPerYear.toString());
  console.log(`每个小时赚的钱`, salaryPerHour.toString());
}
bootstrapMy();
async function bootstray20w() {
  let salary = new Salary({
    salaryCycle: 365,
    salaryPerCycle: 200000,
    workHoursPerDay: 8,
    workSystem: WorkSystem["5/7"],
    yearEndAward: 0,
  });
  const { workDaysPerYear, workHoursPerYear, salaryPerYear, salaryPerHour } =
    salary.start();
  console.log("每年工作天数", workDaysPerYear.toString());
  console.log("每年工作小时数", workHoursPerYear.toString());
  console.log("年薪", salaryPerYear.toString());
  console.log(`每个小时赚的钱`, salaryPerHour.toString());
}
bootstray20w();

async function bootstrapZhun() {
  console.log(`--------------------------`);
  let salary = new Salary({
    salaryCycle: "365/12",
    salaryPerCycle: 18000,
    workHoursPerDay: 10,
    workSystem: WorkSystem["5/7"],
    yearEndAward: 50000,
  });
  const { workDaysPerYear, workHoursPerYear, salaryPerYear, salaryPerHour } =
    salary.start();
  console.log("每年工作天数", workDaysPerYear.toString());
  console.log("每年工作小时数", workHoursPerYear.toString());
  console.log("年薪", salaryPerYear.toString());
  console.log(`每个小时赚的钱`, salaryPerHour.toString());
}
bootstrapZhun();

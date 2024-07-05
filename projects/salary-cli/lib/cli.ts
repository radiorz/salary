import inquirer from "inquirer";
import { DEFAULT_OPTIONS, Salary } from "./Salary";
const prompts = [
  {
    type: "input",
    name: "workingCycle",
    default: DEFAULT_OPTIONS.salaryCycle,
    message: "薪资周期",
  },
  {
    type: "input",
    name: "salaryPerCycle",
    default: DEFAULT_OPTIONS.salaryPerCycle,
    message: "周期内的薪水",
  },
  {
    type: "input",
    name: "workHoursPerDay",
    default: DEFAULT_OPTIONS.workHoursPerDay,
    message: "每天工作几小时",
  },
  {
    type: "input",
    name: "publicVacation",
    default: DEFAULT_OPTIONS.publicVacation,
    message: "带薪假期",
  },
  {
    type: "list",
    name: "workSystem",
    default: DEFAULT_OPTIONS.workSystem,
    message: "工作制度",
    choices: ["6/7", "5/7", "5.5/7", "29/30"],
  },
];
async function bootstrap() {
  const options = await inquirer.prompt(prompts);
  const salary = new Salary(options);
  await salary.start();
}
bootstrap();

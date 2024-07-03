#!/usr/bin/env node

import inquirer from "inquirer";
import { BigNumber } from "bignumber.js";
const DEFAULT_OPTIONS = {
  monthSalary: 7000,
  monthWorkHours: 24 * 8,
};
const prompts = [
  {
    type: "input",
    name: "monthSalary",
    default: DEFAULT_OPTIONS.monthSalary,
    message: "月薪",
  },
  {
    type: "input",
    name: "monthWorkHours",
    default: DEFAULT_OPTIONS.monthWorkHours,
    message: "工作几小时",
  },
];

class Salary {
  constructor(options) {
    this.opts = Object.assign(options);
  }
  start() {
    const s = new BigNumber(this.opts.monthSalary);
    const h = new BigNumber(this.opts.monthWorkHours);
    console.log(`s`, s);
    const salaryPerHour = s.div(h);
    console.log(`salaryPerHour`, salaryPerHour.toString());
    return salaryPerHour.toString();
  }
}
async function bootstrap() {
  const options = await inquirer.prompt(prompts);
  const salary = new Salary(options);
  await salary.start();
}
bootstrap();

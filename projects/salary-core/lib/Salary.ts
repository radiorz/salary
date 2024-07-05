#!/usr/bin/env node

import { BigNumber } from "bignumber.js";

// 工作制度
export enum WorkSystem {
  "6/7" = "6/7", // 单休
  "5/7" = "5/7", // 双休
  "11/14" = "11/14", // 大小周
  "29/30" = "29/30", // 大小周
}
// function getDefaultOptions(){

// }
export interface SalaryOptions {
  salaryCycle: number; // 30 一个月 365 一年
  salaryPerCycle: number;
  workHoursPerDay: number;
  workSystem: WorkSystem;
  publicVacation: number;
  yearEndAward: number; // 这里简化了 直接写数字
}
export const DEFAULT_OPTIONS: SalaryOptions = {
  salaryCycle: 30,
  salaryPerCycle: 7000,
  workHoursPerDay: 8,
  workSystem: WorkSystem["11/14"], // 大小周
  publicVacation: 11,
  yearEndAward: 7000,
};

export class Salary {
  opts: SalaryOptions;
  constructor(options?: Partial<SalaryOptions>) {
    this.opts = Object.assign(DEFAULT_OPTIONS, options);
  }
  getWorkDayPerYear(workSystem: WorkSystem, publicVacation: number) {
    const workingDaysRatio = getFraction(workSystem);
    const workdayPerYear = workingDaysRatio.times(365 - publicVacation);
    return workdayPerYear;
  }
  start() {
    const salaryCycle = new BigNumber(this.opts.salaryCycle);
    const salaryPerCycle = new BigNumber(this.opts.salaryPerCycle);
    const yearEndAward = new BigNumber(this.opts.yearEndAward);
    const salaryPerDay = salaryPerCycle.div(salaryCycle);
    const salaryPerYear = salaryPerDay
      .times(new BigNumber(365))
      .plus(yearEndAward);
    const workHoursPerDay = new BigNumber(this.opts.workHoursPerDay);
    const workDaysPerYear = this.getWorkDayPerYear(
      this.opts.workSystem,
      this.opts.publicVacation
    );
    const workHoursPerYear = workHoursPerDay.times(workDaysPerYear);
    const salaryPerHour = salaryPerYear.div(workHoursPerYear);
    return {
      workDaysPerYear,
      workHoursPerYear,
      salaryPerYear,
      salaryPerHour,
    };
  }
}

export function getFraction(value: string) {
  const [numerator, denominator] = value.split("/");
  const n = new BigNumber(numerator);
  const d = new BigNumber(denominator);
  return n.div(d);
}

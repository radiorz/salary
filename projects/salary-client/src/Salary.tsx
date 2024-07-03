/**
 * @author
 * @file Salary.tsx
 * @fileBase Salary
 * @path projects\salary-client\src\Salary.tsx
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */

import { useState } from "react";

function Salary() {
  const [salaryPerHour, setSalaryPerHour] = useState(0);
  const onSubmit = (d) => {
    setSalaryPerHour(1);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label></label>
        {/* 到手工资 */}
        {/* <input></input> */}
        {/* 大下周 */}
        {/* <select></select> */}
        {/* 每天工作几小时 */}
        {/* 加班工资 */}
      </form>
      {/* 时薪 */}
      你的时薪为： {salaryPerHour}
    </div>
  );
}

export default Salary;

import {
  FormButtonGroup,
  FormItem,
  FormLayout,
  Input,
  Submit,
} from "@formily/antd-v5";
import { createForm } from "@formily/core";
import { Field, FormConsumer, FormProvider } from "@formily/react";
import { DEFAULT_OPTIONS, Salary } from "@tikkhun/salary-core";
import { useState } from "react";

const form = createForm();
export default function App() {
  const [result, setResult] = useState(new Salary(form.values).start());
  function refreshResult() {
    setResult(new Salary(form.values).start());
  }
  return (
    <>
      {JSON.stringify(form.values)}
      <FormProvider form={form}>
        <FormLayout layout="vertical">
          <Field
            name="salaryCycle"
            title="薪资周期"
            required
            initialValue={DEFAULT_OPTIONS.salaryCycle}
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="salaryPerCycle"
            title="周期内的薪水"
            required
            initialValue={DEFAULT_OPTIONS.salaryPerCycle}
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="workHoursPerDay"
            title="每天工作几小时"
            required
            initialValue={DEFAULT_OPTIONS.workHoursPerDay}
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="publicVacation"
            title="带薪假期"
            required
            initialValue={DEFAULT_OPTIONS.publicVacation}
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="workSystem"
            title="工作制度"
            required
            initialValue={DEFAULT_OPTIONS.workSystem}
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="yearEndAward"
            title="年终奖金"
            required
            initialValue={DEFAULT_OPTIONS.yearEndAward}
            decorator={[FormItem]}
            component={[Input]}
          />
        </FormLayout>
        <FormConsumer>
          {() => (
            <div
              style={{
                marginBottom: 20,
                padding: 5,
                border: "1px dashed #666",
              }}
            >
              {JSON.stringify(result, null, 2)}
              {/* {result.start()} */}
            </div>
          )}
        </FormConsumer>
        <FormButtonGroup>
          <Submit onSubmit={refreshResult}>submit</Submit>
        </FormButtonGroup>
      </FormProvider>
    </>
  );
}

import React from "react";
import { createForm } from "@formily/core";
import { FormProvider, FormConsumer, Field } from "@formily/react";
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from "@formily/antd-v5";

const form = createForm();

export default function App() {
  return (
    <FormProvider form={form}>
      <FormLayout layout="vertical">
        <Field
          name="input"
          title="Input box"
          required
          initialValue="Hello world"
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
            Real-time response：{form.values.input}
          </div>
        )}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
}

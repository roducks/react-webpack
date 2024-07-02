import React, { useState } from "react"
import { Button } from "src/libs/roducks/components/Button"
import { Logo } from "src/libs/roducks/components/Logo"
import { Form } from "src/libs/roducks/components/Form"
import { EmailField } from "src/libs/roducks/components/Form/EmailField"
import { PasswordField } from "src/libs/roducks/components/Form/PasswordField"
import { TextareaField } from "src/libs/roducks/components/Form/TextareaField"
import { Switch } from "src/libs/roducks/components/Form/Switch"
import "./styles.scss"

export const Login = () => {
  const [data, setData] = useState<FormDataType>({
    email: "rod@roducks.org",
    password: null,
    comments: null,
    privacy: true,
  })

  return (
    <div className="roducks__login">
      <div className="roducks__login--container">
        <div className="roducks__login--logo">
          <div className="roducks__login--logo-img">
            <Logo />
          </div>
        </div>
        <div className="roducks__container--white">
          <Form
            data={data}
            onSubmit={(valid, form, onSuccess) => {
              setTimeout(() => {
                console.log("FORM VALID", valid, form)
                if (valid) {
                  setData({
                    email: null,
                    password: null,
                    comments: null,
                    privacy: false,
                  })
                  onSuccess()
                }
              }, 1000)
            }}
            render={({ form, setForm, errors, submit }) => {
              return (
                <div>
                  <EmailField
                    label="Email"
                    name="email"
                    value={form["email"]}
                    required={true}
                    error={errors["email"]}
                    onChange={(value, isInvalid) => {
                      setForm("email", value, isInvalid)
                    }}
                  />
                  <PasswordField
                    label="Password"
                    name="password"
                    value={form["password"]}
                    required={true}
                    error={errors["password"]}
                    onChange={(value) => {
                      setForm("password", value)
                    }}
                  />
                  <TextareaField
                    label="Comments"
                    name="comments"
                    value={form["comments"]}
                    placeholder="Add some comments here..."
                    required={true}
                    error={errors["comments"]}
                    onChange={(value) => {
                      setForm("comments", value)
                    }}
                  />
                  <Switch
                    value={form["privacy"]}
                    required={true}
                    error={errors["privacy"]}
                    onChange={(value) => {
                      setForm("privacy", value)
                    }}
                  />
                  <Button
                    label="Login"
                    color="roducks"
                    rounded={true}
                    large={true}
                    onClick={() => {
                      submit()
                    }}
                  />
                </div>
              )
            }}
          ></Form>
        </div>
      </div>
    </div>
  )
}

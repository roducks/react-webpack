import React from "react"
import { Button } from "src/libs/roducks/components/Button"
import { Logo } from "src/libs/roducks/components/Logo"
import { Form } from "src/libs/roducks/components/Form"
import { EmailField } from "src/libs/roducks/components/Form/EmailField"
import { PasswordField } from "src/libs/roducks/components/Form/PasswordField"
import { TextareaField } from "src/libs/roducks/components/Form/TextareaField"
import "./styles.scss"

export const Login = () => {
  return (
    <div className="roducks__login">
      <div className="roducks__login--container">
        <Logo />
        <div className="roducks__container--white">
          <Form
            data={{
              email: "rod@roducks.org",
              password: "abc1373",
              comments: null,
            }}
            render={({ form, setForm, errors, validate }) => {
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
                  <Button
                    label="Login"
                    color="roducks"
                    rounded={true}
                    large={true}
                    onClick={() => {
                      console.log(validate, errors, form)
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

import React from "react"
import { Button } from "src/libs/roducks/components/Button"
import { Logo } from "src/libs/roducks/components/Login"
import { Form } from "src/libs/roducks/components/Form"
import { PasswordField } from "src/libs/roducks/components/Form/PasswordField"
import { EmailField } from "src/libs/roducks/components/Form/EmailField"
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
            }}
            render={({ form, setForm, errors, validate }) => {
              return (
                <div>
                  <EmailField
                    name="email"
                    value={form["email"]}
                    required={true}
                    error={errors["email"]}
                    onChange={(value, isInvalid) => {
                      setForm("email", value, isInvalid)
                    }}
                  />
                  <PasswordField
                    name="password"
                    value={form["password"]}
                    required={true}
                    error={errors["password"]}
                    onChange={(value) => {
                      setForm("password", value)
                    }}
                  />
                  <Button
                    label="Login"
                    color="roducks"
                    rounded={true}
                    large={true}
                    onClick={() => {
                      console.log(validate, form)
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

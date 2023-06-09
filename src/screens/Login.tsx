import { A } from "@solidjs/router";
import { Component } from "solid-js";
import useAuth from "../hooks/useAuth";
import useForm, { FormError, requiredValidator } from "../hooks/useForm";

import { AuthForm } from "../types/Form";


const LoginScreen: Component = () => {

    const {authUser, loading} = useAuth("login")

    const {handleInput, submitForm, validate, errors } = useForm<AuthForm>({
      email: "",
      password: "",
     })

     const onFormSubmit = (form: AuthForm)=>{
      authUser(form)
     }

  return (
    <div class="flex-it justify-center items-center h-full">
      <div class="text-white text-center text-5xl font-bold pb-2">Speakr </div>
      <div class="text-white text-center text-3xl font-bold">Come on in...</div>
      <div class="text-slate-400 text-md mt-1 font-medium">built with solidjs</div>
      <div class="mt-10 flex-it h-100 xs:w-100 max-w-100 bg-white p-10 rounded-3xl">
        <div class="flex-it">
          <form class="flex-it">
            <div class="flex-it overflow-hidden sm:rounded-md">
              <div class="flex-it">
                <div class="flex-it">
                  <div class="flex-it py-2">
                    <label class="block text-md font-medium text-gray-700" for="email">
                      Email
                    </label>
                    <input
                      onInput={handleInput}
                      use:validate={[requiredValidator]}
                      type="email"
                      name="email"
                      id="email"
                      class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      autocomplete="off"
                    />
                    <FormError>{errors["email"]}</FormError>
                  </div>
                  <div class="flex-it py-2">
                    <label class="block text-md font-medium text-gray-700" for="password">
                      Password
                    </label>
                    <input
                      onInput={handleInput}
                      use:validate={[requiredValidator]}
                      type="password"
                      name="password"
                      id="password"
                      class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <FormError>{errors["password"]}</FormError>
                  </div>
                </div>
              </div>
              <div class="text-sm text-gray-600 py-4">
                No Account Yet?{" "}
                <A class="underline" href="/auth/register">
                  Create a new account
                </A>
              </div>
              <div class="flex-it py-2">
                <button
                  disabled={loading()}
                  onClick={submitForm(onFormSubmit)}
                  type="button"
                  class="
                  bg-gradient-to-tr from-sky-500 to-blue-900
                  inline-flex focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-400 justify-center rounded-lg border border-transparent py-2 px-4 text-xl font-medium text-white shadow-sm  focus:outline-none focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;





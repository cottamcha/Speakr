import { A } from "@solidjs/router";
import { Component, onMount, onCleanup } from "solid-js";
import { useUIDispatch } from "../context/ui";
import useAuth from "../hooks/useAuth";
import useForm, { compareWith, firstUppercaseLetter, FormError, minLengthValidator, requiredValidator } from "../hooks/useForm";

import { RegisterForm } from "../types/Form";


const RegisterScreen:Component = () => {

    const { authUser, loading } = useAuth("register")

    const {handleInput, submitForm, validate, errors } = useForm<RegisterForm>({
      fullName: "",
      nickName: "",
      email: "",
      avatar: "",
      password: "",
      passwordConfirmation: ""
     })



     const onFormSubmit = (form: RegisterForm)=>{
      authUser(form)
     }



    return(
        <div class="flex-it justify-center items-center top-[6.25rem]">
          <div class="text-white text-center text-5xl font-bold pb-2">Speakr </div>
          <div class="text-white text-center text-3xl font-bold">Become a member</div>
          <div class="text-slate-400 text-md font-medium mt-1">built with solidjs</div>
          <div class="mt-10 flex-it h-100 sm:max-w-100 max-w-84 bg-white p-10 rounded-3xl">
            <div class="flex-it">
              <form class="flex-it">
                <div class="flex-it overflow-hidden sm:rounded-md">
                  <div class="flex-it">
                    <div class="flex-it">
                      <div class="flex-it py-2">
                        <label class="block text-md font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          onInput={handleInput}
                          use:validate={[requiredValidator, (ele)=> minLengthValidator(ele, 5),firstUppercaseLetter]}
                          type="text"
                          name="fullName"
                          id="fullName"
                          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <FormError>{errors["fullName"]}</FormError>
                      </div>
    
                      <div class="flex-it py-2">
                        <label class="block text-md font-medium text-gray-700">
                          Nickname
                        </label>
                        <input
                          onInput={handleInput}
                          use:validate={[
                            requiredValidator, 
                            (ele)=> minLengthValidator(ele, 4)]}
                          type="text"
                          name="nickName"
                          id="nicknName"
                          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <FormError>{errors["nickName"]}</FormError>
                      </div>
    
                      <div class="flex-it py-2">
                        <label class="block text-md font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          onInput={handleInput}
                          use:validate={[requiredValidator]}
                          type="text"
                          name="email"
                          id="email"
                          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <FormError>{errors["email"]}</FormError>
                      </div>
    
                      <div class="flex-it py-2">
                        <label class="block text-md font-medium text-gray-700">
                          Avatar
                        </label>
                        <input
                          onInput={handleInput}
                          use:validate={[requiredValidator]}
                          type="text"
                          placeholder=""
                          name="avatar"
                          id="avatar"
                          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <p class="text-sm font-semibold text-gray-700 mt-2">☝☝☝ <br/> <span class="text-blue-500">https://api.dicebear.com/6.x/adventurer/svg?seed=</span><span class="font-bold text-red-600">random-text-of-your-choice</span></p>
                        <FormError>{errors["avatar"]}</FormError>
                      </div>
    
                      <div class="flex-it pb-2">
                        <label class="block text-md font-medium text-gray-700">
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
    
                      <div class="flex-it py-2">
                        <label class="block text-md font-medium text-gray-700">
                          Password Confirmation
                        </label>
                        <input
                          onInput={handleInput}
                          use:validate={[
                            requiredValidator,
                            (ele)=> compareWith(ele, "password")

                          ]}
                          type="password"
                          name="passwordConfirmation"
                          id="passwordConfirmation"
                          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <FormError>{errors["passwordConfirmation"]}</FormError>
                      </div>
                    </div>
                  </div>
                  <div class="text-sm text-gray-600 py-4">
                    Already Registered?{" "}
                    <A class="underline" href="/auth/login">
                      Go to Login
                    </A>
                  </div>
                  <div class="flex-it py-2">
                    <button
                      disabled={loading()}
                      onClick={submitForm(onFormSubmit)}
                      type="button"
                      class="
                      bg-blue-400 hover:bg-blue-500 focus:ring-0
                      disabled:cursor-not-allowed disabled:bg-gray-400
                      inline-flex justify-center rounded-lg border border-transparent py-2 px-4 text-xl font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
    );
  };
  
  export default RegisterScreen;



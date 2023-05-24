<script setup>
import { ref } from "vue";

import TextInput from "@/components/forms/TextInput.vue";
import DefaultButton from "@/components/forms/DefaultButton.vue";

let errors = ref([]);

let password = ref(null);
let password_confirmation = ref(null);

</script>

<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">New account password</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">

            <text-input
                    label="New Password"
                    :labelColor="true"
                    placeholder="Ex: ^J?$s#48NCf-nVG"
                    v-model:input="password"
                    inputType="password"
                    :error="errors.password ? errors.password[0] : '' "
            />

            <text-input
                    label="Confirm New Password"
                    :labelColor="true"
                    placeholder="Ex: ^J?$s#48NCf-nVG"
                    v-model:input="password_confirmation"
                    inputType="password"
            />

            <default-button inputType="button" label="Reset"/>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Back to login
            {{ ' ' }}

            <router-link :to="{ name: 'LoginView'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Log In
            </router-link>
        </p>
    </div>
</template>


<script setup>
import { ref } from "vue";
import TextInput from "@/components/forms/TextInput.vue";
import DefaultButton from "@/components/forms/DefaultButton.vue";

let errors = ref([]);
let email = ref(null);
let password = ref(null);

</script>


<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Reset account password</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
            <text-input
                    label="Email Address"
                    :labelColor="true"
                    placeholder="example@yahoo.com"
                    v-model:input="email"
                    inputType="email"
                    :error="errors.email ? errors.email[0] : '' "
            />

            <default-button inputType="button" label="Send reset link"/>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Remember your password?
            {{ ' ' }}

            <router-link :to="{ name: 'LoginView'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Log In
            </router-link>
        </p>
    </div>
</template>
<script setup>
import {  toRefs, computed } from 'vue';
import {RouterLink} from "vue-router";

const emit = defineEmits(['update:input']);

const props = defineProps({
  label: String,
  labelColor: { type: Boolean, default: false},
  input: String,
  placeholder: { type: String, default: ""},
  inputType: String,
  error: String,
});

const { label, labelColor, input, placeholder, error } = toRefs(props);

const inputComputed = computed({
  get:() => input.value,
  set:(val) => emit('update:input', val),
});
</script>

<template>
  <div>
    <label
      class="
      block text-sm
      font-medium
      leading-6
      text-gray-100"
      :class="[labelColor ? 'text-gray-900' : 'text-gray-100']"
    >

      {{ label }}

    </label>



    <div class="mt-2">
      <input
        v-model="inputComputed"
        :type="inputType"
        :placeholder="placeholder"
        class="
        block w-full rounded-md
        border-0 py-1.5
        text-gray-900
        shadow-sm ring-1
        ring-inset
        ring-gray-300
        placeholder:text-gray-400
        focus:ring-2
        focus:ring-inset
        focus:ring-indigo-600
        sm:text-sm sm:leading-6"
      />
    </div>
    <span v-if="error" class="text-red-500">{{ error }}</span>
  </div>
</template>



<style scoped>

</style>

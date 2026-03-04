<template>
  <Popover placement="right-start" class="flex w-full">
    <template #target="{ togglePopover }">
      <button
        :class="[
          'group w-full flex h-7 items-center justify-between rounded px-2 text-base text-gray-800 hover:bg-gray-100',
        ]"
        @click.prevent="togglePopover()"
      >
        <div class="flex gap-2">
          <AppsIcon />
          <span class="whitespace-nowrap">Apps</span>
        </div>
        <ChevronRight class="h-4 w-4 stroke-1.5" />
      </button>
    </template>
    <template #body>
      <div
        class="grid grid-cols-3 justify-between mx-3 p-2 rounded-lg border border-gray-100 bg-white shadow-xl"
      >
        <div v-for="app in apps" key="name">
          <a
            :href="app.route"
            class="flex flex-col gap-1.5 rounded justify-center items-center py-2 px-3 hover:bg-gray-100"
          >
            <img class="size-8" :src="app.logo" />
            <div class="text-sm" @click="app.onClick">
              {{ app.title }}
            </div>
          </a>
        </div>
      </div>
    </template>
  </Popover>
</template>
<script setup>
import { Popover } from "frappe-ui";
import ChevronRight from "~icons/lucide/chevron-right";
import AppsIcon from "./icons/AppsIcon.vue";

const apps = [
    { name: 'EthioBiz', logo: '/assets/lms/logos/ethiobiz_butterfly_logo.png', title: 'EthioBiz', route: 'https://ethiobiz.et' },
    { name: 'Tibeb', logo: '/assets/lms/logos/tibeb_logo.png', title: 'Tibeb', route: 'https://ethiobiz.et/blog' },
    { name: 'Dagu', logo: '/assets/lms/logos/dagu_logo.png', title: 'Dagu', route: 'https://ethiobiz.et/dagu' },
    { name: 'Magala', logo: '/assets/lms/logos/magala_logo.png', title: 'Magala', route: 'https://ethiobiz.et/magala' },
    { name: 'DOBiz ERP', logo: '/assets/lms/logos/dobiz_logo.png', title: 'DOBiz ERP', route: 'https://ethiobiz.et/app' },
    { name: 'Jobs', logo: '/assets/lms/logos/jobs_logo.png', title: 'Jobs', route: 'https://ethiobiz.et/jobs' },
    { name: 'Shop', logo: '/assets/lms/logos/shop_logo.png', title: 'Shop', route: 'https://ethiobiz.et/all-products' },
    { name: 'Walta', logo: '/assets/lms/logos/walta_logo.png', title: 'Walta', route: 'https://ethiobiz.et/walta-main' },
    { name: 'Afocha', logo: '/assets/lms/logos/afocha_logo.png', title: 'Afocha', route: 'https://ethiobiz.et/afocha' }
];
</script>

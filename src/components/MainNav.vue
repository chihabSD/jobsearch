<template>
  <header class="w-full text-sm">Main Nav</header>
  <div class="fixed top-0 left-0 h-16 w-full bg-white">
    <div
      class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
    >
      <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
      <nav class="ml-12 h-full">
        <ul class="flex h-full list-none">
          <li class="h-full ml-9 first:ml-0" v-for="menuItem in menuItems" v-bind:key="menuItem">
            <a :href="url" class="flex h-full items-center py-2.5"> {{ menuItem }}  </a>
          </li>
        </ul>
      </nav>
      <!-- Login button -->
      <div class="flex ml-auto h-full items-center">
        <ProfileImage v-if="isloggedIn"/>
        <ActionButton  v-else />
      </div>
    </div>
  </div>
</template>
<script>
import ActionButton from './ActionButton.vue';
import ProfileImage from './ProfileImage.vue';
export default {
  name: "MainNav",
  components:{
    ActionButton,
    ProfileImage
  }, 
  data() {
    return {
      company: "Bobo Career",
      url: "https://careers.google.com",
      menuItems:[
        'Teams', 'Locations', 
        'Life at Bobo Corp', 
        'How we hire', 
        'Students', 
        'Jobs', 
      ], 
      isloggedIn:false
    };
    
  },
};
</script>

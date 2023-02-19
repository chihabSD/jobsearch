<template>
  <img
    :src="imageLink"
    alt=""
    class="h-8 w-8 rounded-3xl object-contain"
  />
</template>
<script>
export default {
    
    name:"ProfileImage", 
    data(){
        return {
            imageLink :'https://png.pngitem.com/pimgs/s/24-248226_computer-icons-user-profile-clip-art-login-user.png'
        }
    }
}
</script>
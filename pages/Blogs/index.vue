<template>
  <div>
    <div v-for="blog in blogs.data" :key="blog._id">
      <NuxtLink :to="`/Blogs/${blog._id}`" class="blogs">
        <img
          :src="`https://crypto-backend-seven.vercel.app/${blog.Banner}`"
          alt=""
          style="width: 20%"
        />
        <div
          style="
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          "
        >
          <h3>{{ blog.Title }}</h3>
          <p>
            {{
              blog.Description.length > 250
                ? `${blog.Description.substring(0, 250)}...`
                : blog.Description
            }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: blogs } = await useFetch(
  "https://crypto-backend-seven.vercel.app/Blogs"
);
</script>

<style lang="scss" scoped>
.blogs {
  width: 80%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  color: black;
}
.blogs:hover {
  background: rgb(8, 8, 134);
  color: white;
  h3 {
    color: white;
  }
}
</style>

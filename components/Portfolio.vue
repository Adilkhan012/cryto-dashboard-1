<template>
  <!--======  PORTFOLIO PART START ======-->
  <section class="blog-section" id="Portfolio">
    <div class="container">
      <div class="row" v-if="blogs.length > 0">
        <div class="col-md-6" v-if="blogs[0] != undefined">
          <div class="title-blog">
            <h3 class="title">Our Blog</h3>
          </div>

          <div class="blog-card">
            <div class="thumb">
              <NuxtLink :to="`/Blogs/${blogs[0]._id}`">
                <img
                  :src="`https://crypto-backend-production.up.railway.app/${blogs[0].Banner}`"
                  class="img-fluid"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="#">{{ blogs[0].Title }}</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="blog-meta-cards">
            <div class="blog-meta-card" v-if="blogs[1] != undefined">
              <div class="thumb">
                <img
                  :src="`https://crypto-backend-production.up.railway.app/${blogs[1].Banner}`"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="content">
                <h3 class="title">
                  <NuxtLink :to="`/Blogs/${blogs[1]._id}`">
                    {{ blogs[1].Title }}
                  </NuxtLink>
                </h3>
              </div>
            </div>

            <div class="blog-meta-card" v-if="blogs[2] != undefined">
              <div class="thumb">
                <img
                  :src="`https://crypto-backend-production.up.railway.app/${blogs[2].Banner}`"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="content">
                <h3 class="title">
                  <NuxtLink :to="`/Blogs/${blogs[2]._id}`">
                    {{ blogs[2].Title }}
                  </NuxtLink>
                </h3>
              </div>
            </div>

            <div class="blog-meta-card" v-if="blogs[3] != undefined">
              <div class="thumb">
                <img
                  :src="`https://crypto-backend-production.up.railway.app/${blogs[3].Banner}`"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="content">
                <h3 class="title">
                  <NuxtLink :to="`/Blogs/${blogs[3]._id}`">
                    {{ blogs[3].Title }}
                  </NuxtLink>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/Blogs" class="see-more">See More</NuxtLink>
      </div>
    </div>
  </section>
  <!--======  PORTFOLIO PART END ======-->
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      blogs: [],
    };
  },

  mounted() {
    console.log("sadfhkja");
    axios
      .get(`https://crypto-backend-production.up.railway.app/Blogs`)
      .then((res) => {
        this.blogs = res.data.data;
      });
  },
};
</script>
<style scoped>
.blog-section {
  padding: 80px 0px;

  background-position: center center;
  background-size: cover;
}

.blog-section .title {
  font-weight: 700;
  font-size: 45px;
  line-height: 70px;
  margin-bottom: 5px;
}

.blog-card {
  margin-top: 10px;
  background-color: #fff;
  padding: 20px 25px;
  border-radius: 15px;
  transition: all 0.4s linear;
  -webkit-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -ms-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
}

.blog-card:hover {
  transition: all 0.4s linear;
  background: linear-gradient(45deg, #000549, #0198d0);
  -webkit-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -ms-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
}

.blog-card .thumb {
  background-color: #f7faff;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 15px;
}

.blog-card .thumb a {
  display: block;
}

.blog-card .thumb a img {
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  height: 400px;
  -ms-transition: all 0.3s;
  width: 100%;
  object-fit: cover;
}

.blog-card .content p {
  color: #000;
  font-weight: 700;
  line-height: 2.5;
  margin-bottom: 10px;
  font-size: 14px;
}

.blog-card:hover .content p,
.blog-card:hover .content .title a {
  color: #fff;
  transition: all 0.4s linear;
}

.blog-card:hover .title a {
  color: #fff;
  transition: all 0.4s linear;
}

.blog-card .content .title {
  font-weight: 700;
  line-height: 1.59;
  font-size: 22px;
}

.blog-meta-cards {
  margin-bottom: -30px;
}

.blog-meta-card {
  background-color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 15px;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.blog-meta-card .thumb {
  margin-right: 20px;
  border-radius: 15px;
  overflow: hidden;
}

.blog-meta-card .content {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.blog-meta-card .content p {
  color: #000;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 15px;
  font-size: 14px;
  margin-top: 10px;
}

.blog-meta-card .content .title {
  font-weight: 700;
  line-height: 30px;
  font-size: 20px;
}

.blog-card .content p span,
.blog-meta-card .content p span {
  color: #000549;
}

.blog-card:hover .content p span,
.blog-meta-card:hover .content p span {
  color: #fff;
  transition: all 0.4s linear;
  -webkit-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -ms-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
}

.blog-meta-card:hover {
  background: linear-gradient(45deg, #000549, #0198d0);
}

.blog-meta-card:hover p,
.blog-meta-card:hover h3 a,
.blog-meta-card:hover .content .title a {
  color: #fff;
  transition: all 0.4s linear;
  -webkit-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -ms-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
}

.blog-meta-card .thumb img {
  height: 150px;
  width: 150px;
}

.blog-meta-card .content .title a {
  color: #000;
  text-decoration: none;
}

.blog-card .content .title a {
  color: #000;
  text-decoration: none;
}
.see-more {
  font-size: 14px;
  font-weight: 700;
  padding: 16px 30px;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  border-radius: 30px;
  border: transparent;
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  background: #3520df;
  margin: 3rem auto;
}
</style>

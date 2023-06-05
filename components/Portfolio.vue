<template>
  <!--======  PORTFOLIO PART START ======-->
  <section class="blog-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="title-blog">
            <h3 class="title">Our Blog</h3>
          </div>

          <div class="blog-card">
            <div class="thumb">
              <a href="#">
                <img
                  src="@/assets/images/blog/1.png"
                  class="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div class="content">
              <p>
                By Admin / 12 January, 2021 / <span>Digital Marketing.</span>
              </p>
              <h3 class="title">
                <a href="#"
                  >The Step-by-Step Guide to Improving Your Google Rankings.</a
                >
              </h3>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="blog-meta-cards">
            <div class="blog-meta-card">
              <div class="thumb">
                <img
                  src="@/assets/images/blog/1.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="content">
                <p>
                  By Admin / 12 January, 2021 /
                  <span>Digital Marketing.</span>
                </p>
                <h3 class="title">
                  <a href="#">
                    The Step-by-Step Guide to improving your google rankings.
                  </a>
                </h3>
              </div>
            </div>

            <div class="blog-meta-card">
              <div class="thumb">
                <img
                  src="@/assets/images/blog/1.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="content">
                <p>
                  By Admin / 12 January, 2021 /
                  <span>Digital Marketing.</span>
                </p>
                <h3 class="title">
                  <a href="#">
                    The Step-by-Step Guide to improving your google rankings.
                  </a>
                </h3>
              </div>
            </div>

            <div class="blog-meta-card">
              <div class="thumb">
                <img
                  src="@/assets/images/blog/1.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="content">
                <p>
                  By Admin / 12 January, 2021 /
                  <span>Digital Marketing.</span>
                </p>
                <h3 class="title">
                  <a href="#">
                    The Step-by-Step Guide to improving your google rankings.
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--======  PORTFOLIO PART END ======-->
</template>

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
</style>

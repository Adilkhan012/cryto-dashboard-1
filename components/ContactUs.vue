<template>
  <section class="event" ref="event">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="event-content">
            <ul>
              <li>
                <div class="tickets">
                  <div class="icon-box">
                    <i class="fab fa-sharp fa-light fa-location-dot"></i>
                  </div>
                  <div class="info">
                    <h3>Location</h3>
                    <p>{{ JoinEventLocation }}</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="tickets">
                  <div class="icon-box">
                    <i class="fab fa-light fa-envelope"></i>
                  </div>
                  <div class="info">
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:info@drvineeshvijayan.com">{{
                        JoinEventEmail
                      }}</a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="tickets">
                  <div class="icon-box">
                    <i class="fab fa-light fa-phone"></i>
                  </div>
                  <div class="info">
                    <h3>Call Us:</h3>
                    <p>
                      <a :href="`tel:${JoinEventPhone}`">{{
                        JoinEventPhone
                      }}</a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-7">
          <div class="event-img">
            <img
              v-if="image != ''"
              :src="image"
              alt=""
              width="1200"
              height="470"
            />
            <img
              v-else
              src="@/assets/images/event.jpeg"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      image: "",
      JoinEventLocation: "",
      JoinEventEmail: "",
      JoinEventPhone: "",
      config: null,
    };
  },
  mounted() {
    this.config = useRuntimeConfig();
    axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
      if (res.data != null) {
        if (res.data.JoinEvent != undefined) {
          this.image = `${this.config.public.BaseUrl}/${res.data.JoinEvent}`;
        }
        this.JoinEventLocation = res.data.JoinEventLocation;
        this.JoinEventEmail = res.data.JoinEventEmail;
        this.JoinEventPhone = res.data.JoinEventPhone;
      }
    });
    try {
      const options = {
        root: null,
        rootMargin: "600px",
        threshold: 0,
      };
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          document.querySelector(".scroll-to-top").style.display = "initial";
        } else {
          document.querySelector(".scroll-to-top").style.display = "none";
        }
      }, options);

      observer.observe(this.$refs.event);
    } catch (ex) {
      console.log("Asdfasdf", ex);
    }
  },
};
</script>

<style lang="scss" scoped>
.event {
  margin: 60px;
  position: relative;
  z-index: 2;
}
@media (min-width: 0px) and (max-width: 900px) {
  .event {
    margin: 0;
  }
}
.event .title-bar {
  margin-right: 35px;
  font-size: 45px;
  font-weight: 600;
}

.event .event-content {
  margin-top: 35px;
  background: #2a07f9;
  padding: 40px 50px;
  border-radius: 10px;
  position: relative;
}

.event .event-content .tickets {
  display: flex;
  max-width: 310px;
  margin-bottom: 30px;
}

.event .event-content .tickets .icon-box i {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
  color: #2a07f9;
  margin-right: 20px;
}
.info > h3 {
  color: #fff;
}
.event .event-content .tickets .info {
  color: #fff;
}

.event .event-content .tickets .info h3 {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 7px;
}

.event .event-content .tickets .info p {
  margin-bottom: 0;
}

.event .event-content .tickets .info p a {
  color: #fff;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
}

.event .event-img {
  margin-left: -60px;
  margin-top: 70px;
}

ul.social-media {
  margin-top: 30px;
  margin-left: 10px;
}

ul.social-media li a i {
  background: #fff;
  font-size: 18px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  color: #2a07f9;
  transition: all 0.5s;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
}

ul.social-media li a i:hover {
  background: #2a07f9;
  color: #fff;
}

ul.social-media li {
  display: inline-block;
  padding-right: 5px;
}

.social_links li a i {
  color: #fff;
  border: 1px solid white;
  width: 35px;
  display: inline-block;
  height: 35px;
  line-height: 35px;
  border-radius: 50%;
  text-align: center;
  font-size: 16px;
  transition: all 0.4s linear;
}

.social_links li {
  padding-right: 7px;
}
</style>

<template>
  <div id="app" class="container">
    <div class="card">
      <div class="card-header">Vue Fetch POST - BezKoder.com</div>
      <div class="card-body">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            ref="post_title"
            placeholder="Title">
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            ref="post_description"
            placeholder="Description">
        </div>
        <button class="btn btn-sm btn-primary" @click="postData">Post Data</button>
        <button class="btn btn-sm btn-warning ml-2" @click="clearPostOutput">Clear</button>
        <div
          v-if="postResult"
          class="alert alert-secondary mt-2"
          role="alert">
          <pre>{{ postResult }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const baseURL = 'https://keep-ur-dis.firebaseio.com';
export default {
  name: 'App',
  data() {
    return {
      postResult: null
    };
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    async postData() {
      const postData = {
        title: this.$refs.post_title.value,
        description: this.$refs.post_description.value,
      };
      try {
        const res = await fetch(`${baseURL}/tutorials/surveys.json`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'token-value',
          },
          body: JSON.stringify(postData),
        });
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
        const data = await res.json();
        const result = {
          status: `${res.status  }-${  res.statusText}`,
          headers: {
            'Content-Type': res.headers.get('Content-Type'),
            'Content-Length': res.headers.get('Content-Length'),
          },
          data: data,
        };
        this.postResult = this.fortmatResponse(result);
      } catch (err) {
        this.postResult = err.message;
      } 
    },
    clearPostOutput() {
      this.postResult = null;
    },
  }
};
</script>
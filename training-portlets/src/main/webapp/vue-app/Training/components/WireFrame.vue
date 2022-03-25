<template>
  <v-stepper v-model="e1">
    <exo-drawer
      id="activityKudosDrawer"
      ref="testDrawer"
      width="600px"
      hide-actions
      right
      disable-pull-to-refresh>
      <template slot="title">
        <span class="text-header-title">
          Add product 
        </span>
      </template>
      <template slot="content">
        <v-form ref="form" @submit.prevent>
          <v-container>
            <v-row>
              <v-col
                cols="6" 
                
                md="12">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
               
                  label="name product"
                  required />
              </v-col>

              <v-col cols="6" md="12">
                <v-textarea
                  v-model="description"
                  color="teal">
                  <template v-slot:label>
                    <div>
                      Bio <small>(optional)</small>
                    </div>
                  </template>
                </v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1" md="12">
                <v-text-field
                  v-model="price"
                  label="Price"
                  prefix="DT" />
              </v-col>
              <v-col cols="6" md="12">
                <v-file-input
                  v-model="image"
                  counter
                  show-size
                  truncate-length="15" />
              </v-col>
            </v-row>
            <div
              @click="submit">
              Envoyer
            </div>
          </v-container>
        </v-form>
      </template>
    </exo-drawer>
        
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1">
        Name of step 1
      </v-stepper-step>

      <v-divider />

      <v-stepper-step
        :complete="e1 > 2"
        step="2">
        Name of step 2
      </v-stepper-step>

      <v-divider />

      <v-stepper-step step="3">
        Name of step 3
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px" />

        <v-btn
          color="primary"
          @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px" />

        <v-btn
          color="primary"
          @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px" />

        <v-btn
          color="primary"
          @click="showDrawer">
          Continueeeee
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>

export default {
  components: { },
  data () {
    return {
      e1: 1,
    };
  },
  methods: {
    showDrawer()
    {
      this.$refs.testDrawer.drawer = true;
    },

  }
  ,
  mounted(){
    this.$refs.testDrawer.drawer = false ; 
  }
};
</script>
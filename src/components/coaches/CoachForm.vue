<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName"/>
    </div>
    <div class="form-control">
      <h3>Pick a sport</h3>
      <input type="radio" id="basketball" value="basketball" v-model="sportName">
      <label for="basketball">Basketball</label>
      <input type="radio" id="tennis" value="tennis" v-model="sportName">
      <label for="tennis">Tennis</label>
      <input type="radio" id="swimming" value="swimming" v-model="sportName">
      <label for="swimming">Swimming</label>
      <input type="radio" id="boxing" value="boxing" v-model="sportName">
      <label for="boxing">Boxing</label>
      <input type="radio" id="soccer" value="soccer" v-model="sportName">
      <label for="soccer">Soccer</label>
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate"/>
    </div>
    <div class="form-control">
      <h3>Level of student</h3>
      <div>
        <input type="checkbox" id="beginner" value="beginner" v-model="levels">
        <label for="beginner">Beginner</label>
      </div>
      <div>
        <input type="checkbox" id="intermediate" value="intermediate" v-model="levels">
        <label for="intermediate">Intermediate</label>
      </div>
      <div>
        <input type="checkbox" id="pro" value="pro" v-model="levels">
        <label for="pro">Pro</label>
      </div>
    </div>
    <base-button>Register</base-button>
    
  </form>
</template>

<script> 
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      levels: [],
      sportName: ''
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        levels: this.levels,
        sport: this.sportName
      }
      this.$emit('save-data', formData);
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label{
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

input[type='radio'] {
  display: inline;
  width: auto;
  border: none;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

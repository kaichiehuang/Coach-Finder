<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName.val" @blur="clearValidity('firstName')"/>
      <p v-if="!firstName.isValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName.val" @blur="clearValidity('lastName')" />
      <p v-if="!lastName.isValid">Lastname must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !sportName.isValid}">
      <h3>Pick a sport</h3>
      <input type="radio" id="basketball" value="basketball" v-model="sportName.val" @blur="clearValidity('sportName')">
      <label for="basketball">Basketball</label>
      <input type="radio" id="tennis" value="tennis" v-model="sportName.val" @blur="clearValidity('sportName')">
      <label for="tennis">Tennis</label>
      <input type="radio" id="swimming" value="swimming" v-model="sportName.val" @blur="clearValidity('sportName')">
      <label for="swimming">Swimming</label>
      <input type="radio" id="boxing" value="boxing" v-model="sportName.val" @blur="clearValidity('sportName')">
      <label for="boxing">Boxing</label>
      <input type="radio" id="soccer" value="soccer" v-model="sportName.val" @blur="clearValidity('sportName')">
      <label for="soccer">Soccer</label>
      <p v-if="!sportName.isValid">You must choose one sport.</p>
    </div>
    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !rate.isValid}">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" @blur="clearValidity('rate')"/>
      <p v-if="!rate.isValid">Rate must be greater than 0.</p>
    </div>
    <div class="form-control" :class="{invalid: !levels.isValid}">
      <h3>Level of student</h3>
      <div>
        <input type="checkbox" id="beginner" value="beginner" v-model="levels.val" @blur="clearValidity('levels')">
        <label for="beginner">Beginner</label>
      </div>
      <div>
        <input type="checkbox" id="intermediate" value="intermediate" v-model="levels.val" @blur="clearValidity('levels')">
        <label for="intermediate">Intermediate</label>
      </div>
      <div>
        <input type="checkbox" id="pro" value="pro" v-model="levels.val" @blur="clearValidity('levels')">
        <label for="pro">Pro</label>
      </div>
      <p v-if="!levels.isValid">At least one level must be selected.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
    
  </form>
</template>

<script> 
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      levels: {
        val: [],
        isValid: true
      },
      sportName: {
        val: '',
        isValid: true
      },
      formIsValid: true
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.levels.val.length === 0) {
        this.levels.isValid = false;
        this.formIsValid = false;
      }
      if (this.sportName.val === '') {
        this.sportName.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm()
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        levels: this.levels.val,
        sport: this.sportName.val
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

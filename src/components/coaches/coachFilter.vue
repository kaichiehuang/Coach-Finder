<template>
  <base-card>
  <h2>Find Your Coach</h2>
  <span class="filter-option">
    <input type="checkbox" id="basketball" checked @change="setFilter"/>
    <label for="basketball">Basketball</label>
  </span>
  <span class="filter-option">
    <input type="checkbox" id="tennis" checked @change="setFilter"/>
    <label for="tennis">Tennis</label>
  </span>
  <span class="filter-option">
    <input type="checkbox" id="swimming" checked @change="setFilter"/>
    <label for="swimming">Swimming</label>
  </span>
  <span class="filter-option">
    <input type="checkbox" id="boxing" checked @change="setFilter"/>
    <label for="boxing">Boxing</label>
  </span>
  <span class="filter-option">
    <input type="checkbox" id="soccer" checked @change="setFilter"/>
    <label for="soccer">Soccer</label>
  </span>
  </base-card>
</template>

<script> 
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        basketball: true,
        tennis: true,
        swimming: true,
        boxing: true,
        soccer: true
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
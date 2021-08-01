<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :sport-name="coach.sportName"
          :levels="coach.levels"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilters: {
        basketball: true,
        tennis: true,
        swimming: true,
        boxing: true,
        soccer: true
      }
    }
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.basketball && coach.sportName === 'basketball') {
          return true;
        } else if (this.activeFilters.tennis && coach.sportName === 'tennis') {
          return true;
        } else if (this.activeFilters.swimming && coach.sportName === 'swimming') {
          return true;
        } else if (this.activeFilters.boxing && coach.sportName === 'boxing') {
          return true;
        } else if (this.activeFilters.soccer && coach.sportName === 'soccer') {
          return true;
        } else {
          return false;
        }
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

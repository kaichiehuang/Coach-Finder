export default {
  registerCoach(context, data) {
    const coachData =  {
      id: 'c3',
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      levels: data.levels,
      sportName: data.sport
    };

    context.commit('registerCoach', coachData);
  }
};
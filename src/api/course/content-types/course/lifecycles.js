const slugify = require("slugify");

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;

    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },
};

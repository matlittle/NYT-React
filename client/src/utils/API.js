import axios from "axios";

export default {
  // Search for articles
  search: function(query) {
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
    const apiKey = "api-key=62a29b73618a42e48823fd1ad8656887"

    query.topic = query.topic.replace(" ", "+");
    const queryString = `&q=${query.topic}&begin_date=${query.startDate}&end_date=${query.endDate}`;

    const fullUrl = `${url}?${apiKey}${queryString}`;

    return axios.get(fullUrl);
  },

  // Get saved articels
  getSaved: function() {
    return axios.get('/api/article');
  },

  // Save an article
  save: function(article) {
    return axios.post('/api/article', article);
  },

  // Update an article's note
  update: function(id, note) {
    return axios.put(`/api/article/${id}`, note);
  },

  // Saves a book to the database
  delete: function(id) {
    return axios.delete(`/api/article/${id}`);
  }
};
